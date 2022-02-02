import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="five columns">
         <div class="photo_frame">
             <img class="photo" src="./images/profilepic.jpeg" />
          </div>
         </div>
         <div className="seven columns main-col">
            <div class="about-text">
            <h1>About Me</h1><br />
            <p class="text">{bio}</p>   
            <br />
            <button class="btn" href="https://drive.google.com/file/d/1KLGwoUn9cHL8Gvkp226xAXo9tx-Elwxf/view?usp=sharing">Download Resume</button>
            </div>
            </div>
         </div>

   </section>
    );
  }
}

export default About;
