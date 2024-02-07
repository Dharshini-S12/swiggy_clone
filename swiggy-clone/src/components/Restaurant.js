import React from 'react'

function Restaurant() {

    function myFunction() {
        document.getElementById('button-id').innerHTML="Best Restaurants in Pune";
        var x = document.getElementById('myDIV');
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
  return (
    <div className='body-container'>
        <hr className='horizontal-tag'></hr>
        <h1 className='body-title-3'>Best Places to Eat Across Cities</h1>

        <div className='resturant-container-main'>
            <div className='resturant-container-main-items'>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Banglore</a>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Jaipur</a>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Kolkata</a>
            </div>
            <div className='resturant-container-main-items'>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Pune</a>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Banglore</a>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Jaipur</a>
            </div>
            <div className='resturant-container-main-items'>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Mumbai</a>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Chennai</a>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Nagpur</a>
            </div>
            <div className='resturant-container-main-items'>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Delhi</a>
                <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Chandigarh</a>
            <div>
                
                <button onClick={myFunction} id='button-id'>
                    <div> Show More</div>
                    <div><img className='arrow-down-1' src='/images/down-arrow-1.png'></img></div>
                </button>
                <div id="myDIV">
                    <div className='resturant-container-main'>
                        <div className='resturant-container-main-items'>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Banglore</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Jaipur</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Kolkata</a>
                        </div>
                        <div className='resturant-container-main-items'>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Pune</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Banglore</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Jaipur</a>
                        </div>
                        <div className='resturant-container-main-items'>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Mumbai</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Chennai</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Nagpur</a>
                        </div>
                        <div className='resturant-container-main-items'>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Delhi</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Chandigarh</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Chandigarh</a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>



    <h1 className='body-title-3'>Best Cuisines Near Me</h1>

        <div className='resturant-container-main'>
            <div className='resturant-container-main-items'>
                <a className='resturant-container-main-items-ancchor' href=''>Chinese Restaurant Near Me</a>
                <a className='resturant-container-main-items-ancchor' href=''>korean Restaurant Near Me</a>
                <a className='resturant-container-main-items-ancchor' href=''>Punjabi Restaurant Near Me</a>
            </div>
            <div className='resturant-container-main-items'>
                <a className='resturant-container-main-items-ancchor' href=''>South Indian Restaurant Near Me</a>
                <a className='resturant-container-main-items-ancchor' href=''>North Indian Restaurant Near Me</a>
                <a className='resturant-container-main-items-ancchor' href=''>Italian Restaurant Near Me</a>
            </div>
            <div className='resturant-container-main-items'>
                <a className='resturant-container-main-items-ancchor' href=''>Indian Restaurant Near Me</a>
                <a className='resturant-container-main-items-ancchor' href=''>Sea Food Restaurant Near Me</a>
                <a className='resturant-container-main-items-ancchor' href=''>Andhra Restaurant Near Me</a>
            </div>
            <div className='resturant-container-main-items'>
                <a className='resturant-container-main-items-ancchor' href=''>Kerala Restaurant Near Me</a>
                <a className='resturant-container-main-items-ancchor' href=''>Bengali Restaurant Near Me</a>
            <div>
                
                <button onClick={myFunction} id='button-id'>
                    <div> Show More</div>
                    <div><img className='arrow-down-1' src='/images/down-arrow-1.png'></img></div>
                </button>
                <div id="myDIV">
                    <div className='resturant-container-main'>
                        <div className='resturant-container-main-items'>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Banglore</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Jaipur</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Kolkata</a>
                        </div>
                        <div className='resturant-container-main-items'>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Pune</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Banglore</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Jaipur</a>
                        </div>
                        <div className='resturant-container-main-items'>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Mumbai</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Chennai</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Nagpur</a>
                        </div>
                        <div className='resturant-container-main-items'>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Delhi</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Chandigarh</a>
                            <a className='resturant-container-main-items-ancchor' href=''>Best Restaurants in Chandigarh</a>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>


    <h1 className='body-title-3'>Explore Every Restaurants Near Me</h1>
    <div className='resturant-container-mains'>
            <a className='resturant-container-main-items-ancchors' href=''>Explore Restaurants Near Me</a>
            <a className='resturant-container-main-items-ancchors' href=''>Top Rated Restaurants Near Me</a>
    </div>



    </div>
  )
}

export default Restaurant