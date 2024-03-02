import React from 'react';
import Logo from '../images/Logo.png'

function Footer() {
    return (

       <footer>
        <section>
            <div className='company-info'>
                <img src={Logo} alt="logo" className='logo-small' />
                <p>We are a Family Indian restaurant, focused on traditional recipes served with a modern twist</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li>Address: 123 Cork, IE </li>
                    <li>Phone: +123 234 3445</li>
                    <li>Email: esmeraldcurry@resto.com</li>
                </ul>
            </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a> </li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>
        </section>
       </footer>
    );
}

export default Footer;