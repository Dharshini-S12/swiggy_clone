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
        <div className='Footer-items'>
            <div className='Footer-container-2-items-bold'>Swiggy</div>
            <div className='Footer-container-2-items-listed'>© 2023 Bundl Technologies Pvt. Ltd</div>
        </div>
        <div className='Footer-items'>
            <div className='Footer-container-2-items'>Company</div>
            <div className='Footer-container-2-items-listed-1'>About</div>
            <div className='Footer-container-2-items-listed-1'>Careers</div>
            <div className='Footer-container-2-items-listed-1'>Team</div>
            <div className='Footer-container-2-items-listed-1'>Swiggy One</div>
            <div className='Footer-container-2-items-listed-1'>Swiggy Instamart</div>
            <div className='Footer-container-2-items-listed-1'>Swiggy Genie</div>
        </div>
        <div className='Footer-items-extra'>
          <div className='Footer-items'>
            <div className='Footer-container-2-items'>Contact us</div>
            <div className='Footer-container-2-items-listed-1'>Help & Support</div>
            <div className='Footer-container-2-items-listed-1'>Partner with us</div>
            <div className='Footer-container-2-items-listed-1'>Ride with us</div>
          </div>
          <div className='Footer-items'>
            <div className='Footer-container-2-items'>Legal</div>
            <div className='Footer-container-2-items-listed-1'>Terms & Conditions</div>
            <div className='Footer-container-2-items-listed-1'>Cookie Policy</div>
            <div className='Footer-container-2-items-listed-1'>Privacy Policy</div>
          </div>
        </div>
        <div className='Footer-items'>
            <div className='Footer-container-2-items'>We deliver to:</div>
            <div className='Footer-container-2-items-listed-1'>Bangalore</div>
            <div className='Footer-container-2-items-listed-1'>Gurgaon</div>
            <div className='Footer-container-2-items-listed-1'>Hyderabad</div>
            <div className='Footer-container-2-items-listed-1'>Delhi</div>
            <div className='Footer-container-2-items-listed-1'>Mumbai</div>
            <div className='Footer-container-2-items-listed-1'>Pune</div>
            <button className='Footer-button'>
              <div className='Footer-container-2-items-listed-1'>589 cities</div>
              <div><img className='arrow-down-2' src='/images/down-arrow-footer.png'></img></div>
            </button>
        </div>
        
  

      </div>
    </div>
  )
}

export default Footer