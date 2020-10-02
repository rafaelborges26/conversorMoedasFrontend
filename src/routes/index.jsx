import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Converter from '../pages/Converter'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/converter" component={Converter} />
    </Switch>
)

export default Routes

