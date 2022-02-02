import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost:1992/react-contact-form/api/contact/index.php';

class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        mailSent: false,
        error: null
      }
    }

    handleFormSubmit = e => {
      e.preventDefault();
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
        .then(result => {
          this.setState({
            mailSent: result.data.sent
          })
        })
        .catch(error => this.setState({ error: error.message }));
         alert("Thank you for contacting me. I will get back to you shortly.");
       
    };

   render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
               <div class="box-container">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

               <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName"
                     value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail"
                     value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" 
                     value={this.state.subject} onChange={e => this.setState({ subject: e.target.value })}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"
                     value={this.state.message} onChange={e => this.setState({ message: e.target.value })}></textarea>
                  </div>

                  <div>
                     <button className="submit" value="Submit" onClick={e => this.handleFormSubmit(e)}>Submit</button>
                  </div>
					</fieldset>
				   </form>
            </div>
           </div>

   </section>
    );
  }
}

export default Contact;
