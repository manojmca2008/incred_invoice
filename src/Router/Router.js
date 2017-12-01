import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from "./../Components/Header/Header";
import Home from "./../Containers/Home/Home";
import CreateInvoice from "./../Containers/CreateInvoice/CreateInvoice";
import VeiwPastInvoice from "./../Containers/VeiwPastInvoice/VeiwPastInvoice";
import TrackPaymentsDue from "./../Containers/TrackPaymentsDue/TrackPaymentsDue";
import AccountOverview from "./../Containers/AccountOverview/AccountOverview";
import RecordExpenses from "./../Containers/RecordExpenses/RecordExpenses";
import ViewPassExpenses from "./../Containers/ViewPassExpenses/ViewPassExpenses";

import SignIn from "./../Containers/SignIn/SignIn";
import SignUp from "./../Containers/SignUp/SignUp";
import ForgetPassword from "./../Containers/ForgetPassword/ForgetPassword";


import PageNotFound from "./../Containers/PageNotFound/PageNotFound";

const Router = () => (
  <div>
    <Header />
    <div className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/create-invoice' component={CreateInvoice}/>
      <Route path='/veiw-past-invoice' component={VeiwPastInvoice}/>
      <Route path='/track-payments-due' component={TrackPaymentsDue}/>
      <Route path='/account-overview' component={AccountOverview}/>
      <Route path='/record-expenses' component={RecordExpenses}/>
      <Route path='/view-pass-expenses' component={ViewPassExpenses}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/sign-up' component={SignUp}/>
      <Route path='/forget-password' component={ForgetPassword}/>
      <Route exact path='*' component={PageNotFound}/>
    </Switch>
    </div>
  </div>
)

export default Router;