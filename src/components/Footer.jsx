import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {

  return (

    <footer 
      id="contact"
      className="footer"
    >

      <div className="footer-content">


        


        <p>
          Connect with us
        </p>



        <div className="social-links">


          <a
            href="https://www.linkedin.com/company/society-for-data-science-bit-mesra/?originalSubdomain=in"
            target="_blank"
            
          >
           <FaLinkedin />
          </a>



          <a
            href="https://www.instagram.com/sds.bitm/"
            target="_blank"
            rel="noreferrer"
          >
             <FaInstagram />
          </a>



        </div>



      </div>


    </footer>

  );

};


export default Footer;