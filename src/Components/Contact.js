import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
   const form = useRef();
 
   const sendEmail = (e) => {
     e.preventDefault();
 
     emailjs.sendForm('service_jjred38', 'template_h1cl9jg', form.current, 'user_uJ6LEsbA58YslH3c3C4ah')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });

      e.target.reset();
   };
 
   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">
                  Are you interested n working with me, or do you just wanna meet up for some chitchat? 
                  I love meeting and working with new people. Hit me up through the form below.
                  </p>

            </div>

         </div>

         <div className="row">
               <div class="box-container">

               <form ref={form} onSubmit={sendEmail} id="contactForm" name="contactForm">
					<fieldset>

               <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="name" name="name"/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="email" name="email"/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="subject" name="subject"/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="message" name="message"></textarea>
                  </div>

                  <div>
                  <input class="btn btn-info" type="submit" value="Send" />
                  </div>
                  
               </fieldset>
               
				   </form>
            </div>
           </div>

   </section>
    );
  };

export default Contact;
