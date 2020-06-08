import React from 'react'
import NavComponent from './NavComponent'
import {Link} from 'react-router-dom'

export default class ListView extends React.Component{
    render(){
        const productList=[
            {
                product:'啤酒',
                price:5
            },
            {
                product:'花生',
                price:4
            },
            {
                product:'可乐',
                price:2
            }
        ]
        return(
            <div>
                <NavComponent/>
                <ul>
                    {
                        productList.map((element,index)=>{
                        return <li key={index}>
                            <Link to={'/details/'+element.product+'/'+element.price} >{element.product}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}