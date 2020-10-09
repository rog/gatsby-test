import React from 'react'
import { Link } from 'gatsby'

export default function Nav () {
    return (<nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pizza">Pizza Menu</Link></li>
            <li><Link to="/">LOGO</Link></li>
            <li><Link to="/slicemasters">Slicemasters</Link></li>
            <li><Link to="/order">Order Ahead!</Link></li>
        </ul>
    </nav>);
}
