import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'
// -----------------------------------------------------------------------------
import LandIn from '~/pages/LandIn';
import LandInContact from '~/pages/LandInContact';
import LandInEula from '~/pages/LandInEula';
import LandInPrivacyEn from '~/pages/LandInPrivacyEn';
import LandInPrivacyPt from '~/pages/LandInPrivacyPt';
import LandInResponse from '~/pages/LandInResponse';
import LandInTerms from '~/pages/LandInTerms';
import SignInPhonenumber from '~/pages/SignInPhonenumber';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import UpdateProfile from '~/pages/Profile';
import Home from '~/pages/Home';

// -----------------------------------------------------------------------------
export default function Routes() {
// -----------------------------------------------------------------------------
  return (
    <Switch>
      <Route path="/" exact component={LandIn} />
      <Route path="/contact" exact component={LandInContact} />
      <Route path="/privacy" exact component={LandInPrivacyEn} />
      <Route path="/privacidade" exact component={LandInPrivacyPt} />
      <Route path="/terms" exact component={LandInTerms} />
      <Route path="/eula" exact component={LandInEula} />
      <Route path="/response" exact component={LandInResponse} />
      <Route path="/login" exact component={SignInPhonenumber} />
      <Route path="/password" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/profile" exact component={UpdateProfile} isPrivate/>

      <Route path="/home" exact component={Home} isPrivate/>

      {/* <Route path="/tutorial" exact component={Tutorial} isPrivate/> */}
      {/* <Route path="/privacy" exact component={Privacy}/> */}
    </Switch>
  );
}
