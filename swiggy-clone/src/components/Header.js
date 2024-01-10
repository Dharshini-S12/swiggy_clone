import React from 'react'

function Header() {
  return (
    <div>
        <nav id="desktop-nav">
        <div>
            <ul class="nav-links-left">
                <li><img src='https://www.swiggy.com/'></img></li>
                <li><a >Orders</a></li>
                <li><a></a></li>
            </ul>
        </div>
        <div>
            <ul class="nav-links">
                <li><a>Search</a></li>
                <li><a>Offers</a></li>
                <li><a>Help</a></li>
                <li><a>Profile</a></li>
                <li><a>Cart</a></li>
            </ul>
        </div>
    </nav>   
    </div>
  )
}

export default Header