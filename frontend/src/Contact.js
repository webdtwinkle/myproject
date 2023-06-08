// import React from 'react';
import React, { useRef } from "react";
import './Contactstyle.css';
  import ChatBot from 'react-simple-chatbot';
  //  import emailjs from "@emailjs/browser";
  import emailjs from 'emailjs-com';

 


  import {Segment} from 'semantic-ui-react';
 const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1em2qdl",
        "template_zenhdw7",
        form.current,
        "3u22cX9c8-hS4vCdA"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to EduHub",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Kindly ask your",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "React",

          label: "React",

          trigger: "React",

        },

        { value: "Angular", label: "Angular", trigger: "Angular" },

      ],

    },

    {

      id: "React",

      message:

        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,

    },

    {

      id: "Angular",

      message:

        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,

    },

  ]; 
 
  return (

    <div class="landing_page">
      
    <div class="responsive-container-block big-container">
       {/* <img class="bg-img" id="iq5bf" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png"></img> */} 
      <div class="responsive-container-block container">
        <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
          <div class="content-box">
            <p class="text-blk section-head">
              EduHub
            </p>
            <p class="text-blk section-subhead">
             You can get in touch with us any time.
            </p>
            <div class="icons-container">
              <a class="share-icon">
                <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"></img>
              </a>
              <a class="share-icon">
                <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"></img>
              </a>
              <a class="share-icon">
                <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"></img>
              </a>
              <a class="share-icon">
                <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"></img>
              </a>
            </div>
          </div>
        </div>
        <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one" id="i1zj">
          <form  ref={form} onSubmit={sendEmail} >
            <div class="container-block form-wrapper">
              <p class="text-blk contactus-head">
                <a class="link" href="">
                </a>
                Contact Us
              </p>
              <p class="text-blk contactus-subhead">
                We will get back to you in 24 hours
              </p>
              <div class="responsive-container-block">
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-7">
                  <input class="input" id="ijowk-7" name="FirstName" placeholder="First Name"></input>
                </div>
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i1ro7">
                  <input class="input" id="indfi-5" name="Last Name" placeholder="Last Name"></input>
                </div>
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial" id="ityct">
                  <input class="input" id="ipmgh-7" name="Email" placeholder="Email"></input>
                </div>
                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <input class="input" id="imgis-6" name="PhoneNumber" placeholder="Phone Number"></input>
                </div>
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-7">
                  <textarea aria-placeholder="Type message here" class="textinput" id="i5vyy-7" placeholder="Type message here"></textarea>
                </div>
              </div>
              <button class="submit-btn">
                Get quote
              </button>
                
            </div>
            
          </form>
          <Segment floated="left">   
      
      <ChatBot steps={steps}/>
         </Segment> 
        </div>
      </div>
    </div>
    
    
       
  </div>
  );
  };

    
 export default ContactForm;