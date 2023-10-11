import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var bio1 = this.props.data.bio_line1;
      var bio2 = this.props.data.bio_line2;
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
            <h1><span class="wave">👋</span> Hi There!</h1>
            <p class="text">{bio1}</p>
            <p class="text">{bio2}</p>      
            <br />
            <button href="https://drive.google.com/file/d/1KLGwoUn9cHL8Gvkp226xAXo9tx-Elwxf/view?usp=sharing" class="btn" >
            <a href="https://drive.google.com/file/d/1KLGwoUn9cHL8Gvkp226xAXo9tx-Elwxf/view?usp=sharing" >Download Resume</a></button>
            </div>
            </div>
         </div>

   </section>
    );
  }
}

export default About;
