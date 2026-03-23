import React from 'react'
import Category from './Category'
import Category2 from './Category2'

export default function Menu() {
    return (
        <div className='menus'>
            <h2>OUR MENU</h2>
            <div className="all">
                <a href="">ALL</a>
                <a href="">BURGERS</a>
                <a href="">PIZZAS</a>
                <a href="">STEAKS</a>
                <a href="">PASTS</a>
                <a href="">SALADS</a>
                <a href="">DESERTS</a>
                <a href="">DRINKS</a>
            </div>
            <div className="categories">
                <Category/>
            </div>
        </div>
    )
}
