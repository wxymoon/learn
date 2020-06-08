import React from 'react'
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './view/home'
import About from './view/about'
import ListView from './view/ListView'
import Details from './view/Details'
import NotFound from './view/NotFound'

export default class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} ></Route>
                    <Route exact strict path='/about' component={About} ></Route>
                    <Route path='/listview' component={ListView} ></Route>
                    <Route path='/details/:data/:price' component={Details} ></Route>
                    {/* <Route component={NotFound} ></Route> */}
                    <Route render={()=> <div>404页面</div>} ></Route>
                </Switch>
            </Router>
        )
    }
}