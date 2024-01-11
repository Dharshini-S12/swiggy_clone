import React from 'react'

function Header() {
  return (
    <div>
        <nav>
            <ul className='nav-items-left'>
                <a className='nav-items-left-a' href=''><img className='logo' src='https://th.bing.com/th/id/OIP.zeYbojw3hyzUz8DIzfVnagHaEK?rs=1&pid=ImgDetMain'></img></a>
                <li className='nav-items'><a className='nav-items-left-a' href=''>Orders</a></li>
                <li className='nav-items-1'><a href=''>Coimabtore,Tamilnadu,India</a></li>
                <li className='nav-items-1'><a href=''><img className='arrow-down' src="/images/down-arrow.png"></img></a></li>
            </ul>
            <ul className='nav-items-right'>
                <li className='nav-items-2'>
                    <a  className='nav-items-left-a' href=''>
                        <div className='nav-items-right-container'>
                            <span><img className='image' src="/images/search.png"></img></span>
                            <span>Search</span>
                        </div>
                    </a>
                </li>
                <li className='nav-items-2'>
                    <a className='nav-items-left-a' href=''>
                        <div className='nav-items-right-container'>
                            <span><img className='image' src="/images/discount.png"></img></span>
                            <span>Offers</span>
                        </div>
                    </a>
                </li>
                <li className='nav-items-2'>
                    <a className='nav-items-left-a' href=''>
                        <div className='nav-items-right-container'>
                            <span><img className='image' src="/images/help.png"></img></span>
                            <span>Help</span>
                        </div>
                    </a>
                </li>
                <li className='nav-items-2'>
                    <a className='nav-items-left-a' href=''>
                        <div className='nav-items-right-container'>
                            <span><img className='image' src="/images/user.png"></img></span>
                            <span>Profile</span>
                        </div>
                    </a>
                </li>
                <li className='nav-items-2'>
                    <a className='nav-items-left-a' href=''>
                        <div className='nav-items-right-container'>
                            <span><img className='image' src="/images/cart.png"></img></span>
                            <span>Cart</span>
                        </div>
                    </a>
                </li>
            </ul>  
        </nav>
    </div>
  )
}

export default Header