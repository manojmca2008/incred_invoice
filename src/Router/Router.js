import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from "./../Components/Header/Header";
import Home from "./../Containers/Home/Home";
import CreateInvoice from "./../Containers/CreateInvoice/CreateInvoice";
import ViewPastInvoice from "./../Containers/ViewPastInvoice/ViewPastInvoice";
import TrackPaymentsDue from "./../Containers/TrackPaymentsDue/TrackPaymentsDue";
import AccountOverview from "./../Containers/AccountOverview/AccountOverview";
import RecordExpenses from "./../Containers/RecordExpenses/RecordExpenses";
import ViewPassExpenses from "./../Containers/ViewPassExpenses/ViewPassExpenses";
import AccountSetting from "./../Containers/AccountSetting/AccountSetting";

import SignIn from "./../Containers/SignIn/SignIn";
import SignUp from "./../Containers/SignUp/SignUp";
import ForgetPassword from "./../Containers/ForgetPassword/ForgetPassword";
import ChangePassword from "./../Containers/ChangePassword/ChangePassword";


import PageNotFound from "./../Containers/PageNotFound/PageNotFound";

import PrivacyPolicy from "./../Containers/PrivacyPolicy/PrivacyPolicy";
import TermOfService from "./../Containers/TermOfService/TermOfService";

const Router = () => (
  <div>
    <Header />
    <div>
    <Switch>
      <Route exact path='/' component={CreateInvoice}/>
      <Route path='/create-invoice' component={CreateInvoice}/>
      <Route path='/view-past-invoice' component={ViewPastInvoice}/>
      <Route path='/track-payments-due' component={TrackPaymentsDue}/>
      <Route path='/account-overview' component={AccountOverview}/>
      <Route path='/record-expenses' component={RecordExpenses}/>
      <Route path='/view-pass-expenses' component={ViewPassExpenses}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/register' component={SignUp}/>
      <Route path='/forget-password' component={ForgetPassword}/>
      <Route path='/reset-password/:token' component={ChangePassword}/>
      
      <Route path='/account-setting' component={AccountSetting}/>
      <Route path='/privacy-policy' component={PrivacyPolicy}/>
      <Route path='/terms-of-service' component={TermOfService}/>
      <Route exact path='*' component={PageNotFound}/>
    </Switch>
    </div>
  </div>
)

export default Router;