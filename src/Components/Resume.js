import React, { Component } from 'react';

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <br/>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    const frameworks = this.props.data.frameworks.map(function (frameworks) {
      
      return (
        <div key={frameworks.name} class="card">
        <img class="icon" src={frameworks.logo} />
        <p class="title">{frameworks.name}</p>
        </div>
      );
    });

    const tools = this.props.data.tools.map(function (tools) {
      
      return (
        <div key={tools.name} class="card">
        <img class="icon" src={tools.logo} />
        <p class="title">{tools.name}</p>
        </div>
      );
    });

    return (
      <div>
      <section id="resume">

      <div className="row topic">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>
         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row topic">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>
         <div className="nine columns main-col">
          {work}
        </div>
    </div>


      <div className="row topic">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>

      <div className="row topic">
         <div className="three columns header-col">
            <h1><span>Frameworks</span></h1>
         </div>
         <div className="nine columns main-col">
        <div class="content">
        {frameworks}
        </div>
			  </div>
      </div>

      <div className="row topic">
      <div className="three columns header-col">
      <h1><span>Other Tools</span></h1>
      </div>
      <div className="nine columns main-col">
      <div class="content">
      {tools}
      </div>
      </div>

      </div>
  </section>


    <section id="download">
      <div class="inner">
      <p class="text"><span class="bold">I am actively looking for summer internship opportunities.</span><br />
      If you are hiring or are willing to collaborate with me on any project, please keep a copy of my latest resume for reference and feel free to contact me through my mentioned Contact Number 
      or any of my Social Media Handles. </p>
      <img class="resume-image" src="./images/resume.png" />
        <a href="https://drive.google.com/file/d/1KLGwoUn9cHL8Gvkp226xAXo9tx-Elwxf/view?usp=sharing" className="button"><i className="fa fa-download"></i>&nbsp; Download Resume</a>
      </div>
    </section>

   </div>

    );
  }
}

export default Resume;
