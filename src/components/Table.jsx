import React from 'react'

export default function Table() {
    return (
        <div class="tabl">
        <h2>Book a table</h2>
        <div class="tab">
            <form>
                    <label for="">name</label>
                    <br/>
                    <input type="text" placeholder="Name"/>
                    <br/>
                    <label for="">phone</label>
                    <br/>
                    <input type="text" placeholder="Phone"/>
                    <br/>
                    <label for="">date</label>
                    <br/>
                    <input type="text" placeholder="mm-dd-yy"/>
            </form>
            <form class="">
                    <label for="">last name</label>
                    <br/>
                    <input type="text" placeholder="Last Name"/>
                    <br/>
                    <label for="">email</label>
                    <br/>
                    <input type="text" placeholder="Email"/>
                    <br/>
                    <label for="">time</label>
                    <br/>
                    <input type="text" placeholder="12:00"/>
            </form>
            <div class="open">
                <h3>Opening Hours</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, inventore hic nulla, provident laudantium voluptate ipsa eligendi commodi mollitia vero animi, repudiandae quidem minima est sint sapiente quas iure deleniti.</p>
            </div>
        </div>
        <div class="lin"><a href="">book a table</a></div>
    </div>
    )
}
