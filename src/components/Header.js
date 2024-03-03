import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restaurantFood.jpg';

function Header() {
    return (
        <header className='header'>
              <section>
                {/* banner texts */}
                <div className='banner'>
                    <h2>Emerald Curry House</h2>
                    <h3>Cork</h3>
                    <p>We are a family owned Indian restaurant on traditional recipes served with a modern twist. </p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve table</button></Link>
                </div>
                {/* banner image */}
                <div className='banner-img'>
                    <img src={bannerImg} alt="banner" />
                </div>

              </section>
        </header>
    );
}

export default Header;