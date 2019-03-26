import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student'

export default (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/classList/:class' component={ClassList}/>
            <Route path='/student/:id' component={Student}/>
        </Switch>
    </div>
)