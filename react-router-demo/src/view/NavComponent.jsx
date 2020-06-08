import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './NavComponent.css'

export default class NavComponent extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {/* <li><Link to='/home' >Home</Link></li>
                    <li><Link to='/about' >About</Link></li> */}
                    <li><NavLink exact to='/' >Home</NavLink></li>
                    <li><NavLink to='/about' >About</NavLink></li>
                    <li><NavLink to='/listview' >列表视图</NavLink></li>
                </ul>
            </div>
        )
    }
}