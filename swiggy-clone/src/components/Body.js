import React from 'react'

function Body() {
  const carousel = document.querySelector(".carousel");
  const arrowIcons = document.querySelectorAll(".arrow i");
  
arrowIcons.forEach(icon =>{
  icon.addEventListener("click",() =>{
    console.log(icon);
  });
});

  const dragging = (e) => {
    carousel.scrollLeft = e.pageX;
  }

  
  carousel.addEventListener("mousemove", dragging);
  


  return (
    <div className='body-container'>
      <h1 className='body-title'>Dharshini, what's on your mind?</h1>
      <div class="wrapper">
        <div class="arrow">
            <i class="arrow-left">&#8592;</i>
            <i class="arrow-right">&#8594;</i>
        </div>
        <div class="carousel">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Gulab_Jamun.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png" alt=""/>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
        </div>
    </div>
       <hr className='horizontal-tag1'></hr>
      <h1 className='body-title-2'>Restaurants with online food delivery in Coimbatore</h1>
       <div className='body-button'>
          <a className='body-button-a' href=''>Filter</a>
          <a className='body-button-a' href=''>Sort By</a>
          <a className='body-button-a' href=''>Fast Delivery</a>
          <a className='body-button-a' href=''>Ratings 40+</a>
          <a className='body-button-a' href=''>Pure Veg</a>
          <a className='body-button-a' href=''>Order</a>
          <a className='body-button-a' href=''>Rs.300-Rs.600</a>
          <a className='body-button-a' href=''>Less then Rs.300</a>
       </div>
    </div>
  )
}

export default Body