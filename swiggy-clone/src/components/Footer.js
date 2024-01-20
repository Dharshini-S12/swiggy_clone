import React from 'react'

function Footer() {
  return (
    <div>
      <div className='Footer-container-1'>
          <div className='Footer-container-text'>For better experience,download the Swiggy app now</div>
          <div className='Footer-container-social'>
            <div>
              <a href=''>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png' className='social-img'></img>
              </a>
            </div>
            <div>
              <a href=''>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png' className='social-img'></img>
              </a>
            </div>
          </div>
      </div>
      <div className='Footer-container-2'>
        <div>Swiggy</div>
        <div>Company</div>
        <div>Contact us</div>
        <div>We deliver to:</div>
  
      </div>
    </div>
  )
}

export default Footer