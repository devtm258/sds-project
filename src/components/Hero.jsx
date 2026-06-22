import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/SDSlogo.jpeg";


const Hero = () => {

  const logoRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();


  useEffect(() => {

    let ctx = gsap.context(() => {


      const tl = gsap.timeline();


      tl.from(logoRef.current, {

        opacity: 0,
        scale: 0,
        rotate: 180,

        duration: 1,

        ease: "back.out(1.7)"

      })


      .from(titleRef.current, {

        opacity: 0,

        y: 80,

        duration: 1,

        ease: "power3.out"


      }, "-=0.5")



      .from(subtitleRef.current, {

        opacity: 0,

        y: 30,

        duration: 0.8,

        ease: "power2.out"


      }, "-=0.4");



    });


    return () => ctx.revert();


  }, []);



  return (

    <div>


      <section 
        id="home" 
        className="noisy"
      >


        <div className="h-screen flex flex-col items-center justify-center">


          <div className="flex items-center gap-6">


            <div className="logo-box">


              <img

                ref={logoRef}

                src={logo}

                alt="Logo"

              />


            </div>



            <h1

              ref={titleRef}

              className="title"

            >

              Society for Data Science


            </h1>


          </div>




          <p

            ref={subtitleRef}

            className="subtitle"

          >

            The data you need now. A platform built for tomorrow.


          </p>




        </div>



      </section>



    </div>

  );

};


export default Hero;

