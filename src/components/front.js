import React, { Component } from 'react'

import Navbar from './navbar'
import './header.css'


export class Front extends Component {
    
      
    render() {
        return ( 
            <div className="center">   
               <Navbar/>
               <img alt="Burger" width="5vh" height="5vh" src="https://www.freepngimg.com/thumb/burger/5-2-burger-png.png"/>
               <img alt="Burger" width="100px" height="100px" src="https://www.freepngimg.com/thumb/pizza/17-pizza-png-image.png"/>
               <img alt="Burger" width="200px" height="200px" src="https://www.freepngimg.com/thumb/coke/4-2-coca-cola-picture.png"/>
               <img alt="Burger" width="200px" height="200px" src="https://www.freepngimg.com/thumb/sandwich/5-2-sandwich-transparent.png"/>
               <img alt="Burger" width="200px" height="200px" src="https://www.freepngimg.com/thumb/tomato/17-tomato-png-image.png"/>
               <img alt="Burger" width="200px" height="200px" src="https://www.freepngimg.com/thumb/meat/59330-and-cuisine-weight-beefsteak-for-to-donts.png"/>
               <div className="div">
                    <text>Hello</text>
               </div>
                
            </div>
           
        )
    }
}

export default Front