import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// -----------------------------------------------------------------------------
import detective from '~/assets/LandIn/logos/detective02.svg'
import banner from '~/assets/LandIn/logos/banner.png'
import { signUpRequest } from '~/store/modules/auth/actions';
import { Container } from './styles'
// -----------------------------------------------------------------------------
export default function SignUp({ match }) {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    first_name: Yup.string().required('O nome é obrigatório'),
    last_name: Yup.string().required('O sobrenome é obrigatório'),
    user_name: Yup.string().required('O nome de usuário é obrigatório'),
    password: Yup.string().min(6,'No mínimo 6 caracteres.').required('A senha é obrigatorória'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'A senha confirmada não é igual'),
    email: Yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
    instagram: Yup.string(),
    linkedin: Yup.string(),

  });
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ user_name, email, password }) => {
    // console.log(user_name, email, password)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser);
        const bio = 'web Bio test'
        const resp = dispatch(signUpRequest(user_name, password, email, bio));
        // console.log(resp)
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(error.code)
      });

    }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <div className="sign-up-div">
        <div className="logo-div">
          <img className="logo-img" src={detective} alt="godtaskerFont"/>
          <img className="banner-img" src={banner} alt="godtaskerFont"/>
        </div>
        <form schema={schema} onSubmit={handleSubmit(onSubmit)}>
          <div className="line-div">
            <input name= "first_name" placeholder="First Name" ref={register}/>
            <input name= "last_name" placeholder="Last Name" ref={register}/>
          </div>
          <div className="line-div">
            <input name= "user_name" placeholder="User Name" ref={register}/>
          </div>

          <div className="line-div">
            <input name= "email" type="email" placeholder="Your e-mail" ref={register}/>
          </div>

          <div className="line-div">
            <input name="instagram" placeholder="Instagram (optional)" ref={register}/>
            <input name="linkedin" placeholder="LinkedIn (optional)" ref={register}/>
          </div>
          <div className="line-div">
            <input name="password" type="password" placeholder="Your password" ref={register}/>
          </div>
          <div className="line-div">
            <input name="confirmPassword" type="password" placeholder="Confirm password" />
          </div>
          <div className="line-div">
            <button
              className="sign-up-button"
              type="submit"
            >
              Create Account
            </button>
          </div>

        </form>
      </div>
    </Container>
  );
}
