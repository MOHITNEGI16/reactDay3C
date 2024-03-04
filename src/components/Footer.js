// import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div id="footer_container">
        <div id="footerLogo">
          <img
            src="https://i.pinimg.com/564x/01/e1/ed/01e1ede97d3c51d98c6c151a97bd8468.jpg"
            alt="logo_of_footer"
          />
          <h2>logoipsum</h2>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Incidunt consequuntur amet culpa cum itaque neque.
        </p>

        <ul id="footer_link">
          <li>
            <a href={"https://geekfood.vercel.app/"}>About</a>
          </li>
          <li>
            <a href={"https://geekfood.vercel.app/"}>Careers</a>
          </li>
          <li>
            <a href={"https://geekfood.vercel.app/"}>History</a>
          </li>
          <li>
            <a href={"https://geekfood.vercel.app/"}>Services</a>
          </li>
          <li>
            <a href={"https://geekfood.vercel.app/"}>Projects</a>
          </li>
          <li>
            <a href={"https://geekfood.vercel.app/"}>Blog</a>
          </li>
        </ul>

        <div id="footer_social_icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-solid fa-basketball"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
