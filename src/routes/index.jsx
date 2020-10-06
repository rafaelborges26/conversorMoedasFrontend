import React from 'react'
import { Switch } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Converter from '../pages/Converter'

import Route from './Route'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/converter" component={Converter} isPrivate />
        
    </Switch>
)

export default Routes

