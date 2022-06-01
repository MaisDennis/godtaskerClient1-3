import { takeLatest, call, put, all} from 'redux-saga/effects';
import { toast } from 'react-toastify';
// -----------------------------------------------------------------------------
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

// -----------------------------------------------------------------------------
export function* signIn({ payload }) {
  try {
    const { phonenumber, password } = payload;


    const response = yield call(api.post, 'sessions', {
      phonenumber,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const responseWorkers = yield call(api.get, 'workers/mobile', {
      params: { test: '' },
    });

    const worker = responseWorkers.data.find(
      w => w.phonenumber === phonenumber
    );

    yield put(signInSuccess(token, user, worker));
    history.push('/home');

  } catch (err) {
    yield put(signFailure());
    toast.error('Falha na autenticação, verifique seus dados');
  }
}
// -----------------------------------------------------------------------------
export function setToken({payload }) {
  if(!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}
// -----------------------------------------------------------------------------
export function* signUp({ payload }) {
  try {
    const {
      user_name,
      password,
      email,
      bio,
    } = payload;

    console.log(payload)

    yield call(api.post, 'users', {
      user_name,
      worker_name: user_name,
      password,
      email,
      bio,
      points: 0,
      subscriber: false
    })
    history.push('/response');
    // toast.success('Usuário cadastrado com sucesso!');

  } catch (error) {
    toast.error(error.response.data.error);
  }
}
// -----------------------------------------------------------------------------
export function signOnOut() {
  history.push('/');
}
// -----------------------------------------------------------------------------
export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOnOut),
]);
