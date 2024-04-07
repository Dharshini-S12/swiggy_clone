import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", 
        background: "grey",
        fontSize:"47px",
        marginTop:"-130px", 
        marginLeft:"980px", 
        borderRadius:"1rem",
        backgroundColor:"url('/images/1.jpg')",
      }}
        onClick={onClick}
      />
    );
  };
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", 
        background: "grey",
        fontSize:"47px",
        marginTop:"-130px", 
        marginRight:"100px",
        borderRadius:"1rem"
      }}
        onClick={onClick}
      />
    );
  };

function Foodcards() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 7,
        slidesToScroll: 3,
        prevArrow: <PrevArrow />, 
        nextArrow: <NextArrow />, 
      };  
  return (
    <div className='body-container'>
        <h1 className='body-title'>Dharshini, what's on your mind?</h1>
      <div className="a">
      <div className="b">
      <Slider {...settings}>
        {data1.map((d1) => (
          <div className="">
            <div className="items">
              <a href='' className='anchorfood'><img src={d1.img} alt='' className="pic"/></a>
            </div>
            
          </div>
        ))}
        </Slider>
      </div> 
        
    </div>
    </div>
  )
}
const data1 = [
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029849/PC_Creative%20refresh/3D_bau/banners_new/Omelette.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pongal.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667630/PC_Creative%20refresh/Desserts_2.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Uttapam.png',
    },
    {
      img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Idiyappam.png',
    },
    ]

export default Foodcards