import React from 'react';
import "./Feedbacks.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import user1 from "../../assets/user-1.jpeg";
import user2 from "../../assets/user-2.jpeg";
import user3 from "../../assets/user-3.jpeg";
import user4 from "../../assets/user-4.jpeg";
import user5 from "../../assets/user-5.jpeg";

const Feedbacks = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='feedbacks'>
      <div className="container">
        <h1 className="heading-1">
          Customer <span className="gradient-text">Feedbacks</span>
        </h1>
        <Slider {...settings} className='feedbacks-container'>
          {/* feed block start */}
          <div className="feed-block">
            <div className="profile">
              <img src={user1} alt="" />
            </div>
            <div className="details">
              <p className="muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita voluptatem quidem nostrum numquam
                qui nam quaerat possimus molestiae. Voluptatem a, aperiam quod obcaecati quaerat deserunt maxime minus
                dolor atque!
              </p>
            </div>
            <div className="bottom">
              <div className="flex-center stars-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className="name">Mustafa Hassan</h2>
              <p className="muted">CEO of Realist</p>
            </div>
          </div>
          {/* feed block end */}

          {/* Repeat for other feedbacks */}
          <div className="feed-block">
            <div className="profile">
              <img src={user2} alt="" />
            </div>
            <div className="details">
              <p className="muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita voluptatem quidem nostrum numquam
                qui nam quaerat possimus molestiae. Voluptatem a, aperiam quod obcaecati quaerat deserunt maxime minus
                dolor atque!
              </p>
            </div>
            <div className="bottom">
              <div className="flex-center stars-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className="name">Mustafa Hassan</h2>
              <p className="muted">CEO of Realist</p>
            </div>
          </div>
          {/* feed block end */}

          {/* Repeat for other feedbacks */}
          <div className="feed-block">
            <div className="profile">
              <img src={user3} alt="" />
            </div>
            <div className="details">
              <p className="muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita voluptatem quidem nostrum numquam
                qui nam quaerat possimus molestiae. Voluptatem a, aperiam quod obcaecati quaerat deserunt maxime minus
                dolor atque!
              </p>
            </div>
            <div className="bottom">
              <div className="flex-center stars-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className="name">Mustafa Hassan</h2>
              <p className="muted">CEO of Realist</p>
            </div>
          </div>
          {/* feed block end */}

          {/* Repeat for other feedbacks */}
          <div className="feed-block">
            <div className="profile">
              <img src={user4} alt="" />
            </div>
            <div className="details">
              <p className="muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita voluptatem quidem nostrum numquam
                qui nam quaerat possimus molestiae. Voluptatem a, aperiam quod obcaecati quaerat deserunt maxime minus
                dolor atque!
              </p>
            </div>
            <div className="bottom">
              <div className="flex-center stars-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className="name">Mustafa Hassan</h2>
              <p className="muted">CEO of Realist</p>
            </div>
          </div>
          {/* feed block end */}

          {/* Repeat for other feedbacks */}
          <div className="feed-block">
            <div className="profile">
              <img src={user5} alt="" />
            </div>
            <div className="details">
              <p className="muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita voluptatem quidem nostrum numquam
                qui nam quaerat possimus molestiae. Voluptatem a, aperiam quod obcaecati quaerat deserunt maxime minus
                dolor atque!
              </p>
            </div>
            <div className="bottom">
              <div className="flex-center stars-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h2 className="name">Mustafa Hassan</h2>
              <p className="muted">CEO of Realist</p>
            </div>
          </div>
          {/* feed block end */}
        </Slider>
      </div>
    </section>
  );
};

export default Feedbacks;
