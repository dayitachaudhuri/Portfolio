(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),s=t.n(r),c=(t(17),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=t(7),p=t(10),E=t.n(p),h=(t(20),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description,this.props.data.address.city,this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));var t=function(e,a,t){this.toRotate=a,this.el=e,this.loopNum=0,this.period=parseInt(t,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return t.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,a=this.toRotate[e];this.isDeleting?this.txt=a.substring(0,this.txt.length-1):this.txt=a.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var t=this,n=300-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==a?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout(function(){t.tick()},n)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),a=0;a<e.length;a++){var n=e[a].getAttribute("data-rotate"),l=e[a].getAttribute("data-period");n&&new t(e[a],JSON.parse(n),l)}},l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e,"."),l.a.createElement("p",{class:"typewriter"},"I am a \xa0",l.a.createElement("span",{class:"txt-rotate","data-period":"2000","data-rotate":'[ "Learner.", "Programmer.", "Web Developer.", "Poet.", "Nerd.", "Amazing Person!" ]'})),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"social"},a))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"Designed with \u2764\ufe0f by Dayita Chaudhuri"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e=this.props.data.bio;this.props.data.address.street,this.props.data.address.city,this.props.data.address.state,this.props.data.address.zip,this.props.data.phone,this.props.data.email,this.props.data.resumedownload}return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"five columns"},l.a.createElement("div",{class:"photo_frame"},l.a.createElement("img",{class:"photo",src:"./images/profilepic.jpeg"}))),l.a.createElement("div",{className:"seven columns main-col"},l.a.createElement("div",{class:"about-text"},l.a.createElement("h1",null,"About Me"),l.a.createElement("br",null),l.a.createElement("p",{class:"text"},e),l.a.createElement("br",null),l.a.createElement("button",{class:"btn",href:"https://drive.google.com/file/d/1KLGwoUn9cHL8Gvkp226xAXo9tx-Elwxf/view?usp=sharing"},"Download Resume")))))}}]),a}(n.Component),g=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getRandomColor",value:function(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var a=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("br",null),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}),t=this.props.data.work.map(function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))}),n=this.props.data.skills.map(function(a){var t=e.getRandomColor(),n="bar-expand "+a.name.toLowerCase(),r=a.level;return l.a.createElement("li",{key:a.name},l.a.createElement("span",{style:{width:r,backgroundColor:t},className:n}),l.a.createElement("em",null,a.name))}),r=this.props.data.frameworks.map(function(e){return l.a.createElement("div",{key:e.name,class:"card"},l.a.createElement("img",{class:"icon",src:e.logo}),l.a.createElement("p",{class:"title"},e.name))}),s=this.props.data.tools.map(function(e){return l.a.createElement("div",{key:e.name,class:"card"},l.a.createElement("img",{class:"icon",src:e.logo}),l.a.createElement("p",{class:"title"},e.name))});return l.a.createElement("div",null,l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row topic"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row topic"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row topic"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},n)))),l.a.createElement("div",{className:"row topic"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Frameworks"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{class:"content"},r))),l.a.createElement("div",{className:"row topic"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Other Tools"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{class:"content"},s)))),l.a.createElement("section",{id:"download"},l.a.createElement("div",{class:"inner"},l.a.createElement("p",{class:"text"},l.a.createElement("span",{class:"bold"},"I am actively looking for summer internship opportunities."),l.a.createElement("br",null),"If you are hiring or are willing to collaborate with me on any project, please keep a copy of my latest resume for reference and feel free to contact me through my mentioned Contact Number or any of my Social Media Handles. "),l.a.createElement("img",{class:"resume-image",src:"./images/resume.png"}),l.a.createElement("a",{href:"https://drive.google.com/file/d/1KLGwoUn9cHL8Gvkp226xAXo9tx-Elwxf/view?usp=sharing",className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"\xa0 Download Resume"))))}}]),a}(n.Component),b=t(11),N=function(){var e=Object(n.useRef)();return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Are you interested n working with me, or do you just wanna meet up for some chitchat? I love meeting and working with new people. Hit me up through the form below."))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{class:"box-container"},l.a.createElement("form",{ref:e,onSubmit:function(a){a.preventDefault(),b.a.sendForm("service_jjred38","template_h1cl9jg",e.current,"user_uJ6LEsbA58YslH3c3C4ah").then(function(e){console.log(e.text)},function(e){console.log(e.text)}),a.target.reset()},id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},"Name ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"name",name:"name"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"email",name:"email"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"subject",name:"subject"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"message",name:"message"})),l.a.createElement("div",null,l.a.createElement("input",{class:"btn btn-info",type:"submit",value:"Send"})))))))},w=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)this.props.data.testimonials.map(function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))});return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},"COMING SOON !")))))}}]),a}(n.Component),y=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)this.props.data.projects.map(function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))});return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("h1",null,"COMING SOON ! "),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},l.a.createElement("div",{class:"flip-card-container"},l.a.createElement("div",{class:"flip-card"},l.a.createElement("div",{class:"card-front"},l.a.createElement("figure",null,l.a.createElement("div",{class:"img-bg"}),l.a.createElement("img",{src:"https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",alt:"Brohm Lake"}),l.a.createElement("figcaption",null,"Brohm Lake")),l.a.createElement("ul",null,l.a.createElement("li",null,"Detail 1"),l.a.createElement("li",null,"Detail 2"),l.a.createElement("li",null,"Detail 3"),l.a.createElement("li",null,"Detail 4"),l.a.createElement("li",null,"Detail 5"))),l.a.createElement("div",{class:"card-back"},l.a.createElement("figure",null,l.a.createElement("div",{class:"img-bg"}),l.a.createElement("img",{src:"https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",alt:"Brohm Lake"})),l.a.createElement("button",null,"Book"),l.a.createElement("div",{class:"design-container"},l.a.createElement("span",{class:"design design--1"}),l.a.createElement("span",{class:"design design--2"}),l.a.createElement("span",{class:"design design--3"}),l.a.createElement("span",{class:"design design--4"}),l.a.createElement("span",{class:"design design--5"}),l.a.createElement("span",{class:"design design--6"}),l.a.createElement("span",{class:"design design--7"}),l.a.createElement("span",{class:"design design--8"})))))))))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){E.a.ajax({url:"/Portfolio/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(g,{data:this.state.resumeData.resume}),l.a.createElement(y,{data:this.state.resumeData.portfolio}),l.a.createElement(w,{data:this.state.resumeData.testimonials}),l.a.createElement(N,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Portfolio","/service-worker.js");j?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):O(e)})}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.5230f361.chunk.js.map