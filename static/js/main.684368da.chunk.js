(this.webpackJsonpthemud=this.webpackJsonpthemud||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(13),l=n(14),c=n(5),r=n(16),o=n(15),s=n(0),i=n(17),m=n(22),u=n(12);var d=function(){return s.createElement("div",{className:"menu-toggler"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30"},s.createElement("path",{className:"menu-hamburger",stroke:"#E91E63",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})))},h=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).scrollToPageLanding=l.scrollToPageLanding.bind(Object(c.a)(l)),l}return Object(l.a)(n,[{key:"scrollToPageLanding",value:function(e){e.preventDefault(),document.querySelector(".page-landing").scrollIntoView({behavior:"smooth",block:"start"})}},{key:"render",value:function(){return s.createElement(m.a,{fixed:"top",className:"navbar-custom justify-content-between"+(this.props.isScrolling?" scrolling":""),variant:"dark"},s.createElement(m.a.Brand,{onClick:this.scrollToPageLanding},"THEMUD"),s.createElement(u.a,null,s.createElement(u.a.Link,{onClick:this.props.onHamburgerClick},s.createElement(d,null))))}}]),n}(s.Component),p=n(6),E=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).scrollToAbout=l.scrollToAbout.bind(Object(c.a)(l)),l.scrollToContact=l.scrollToContact.bind(Object(c.a)(l)),l}return Object(l.a)(n,[{key:"scrollToAbout",value:function(e){this.props.onMenuClose(e),document.querySelector(".about-container").scrollIntoView({behavior:"smooth",block:"start"})}},{key:"scrollToContact",value:function(e){this.props.onMenuClose(e),document.querySelector(".contact-container").scrollIntoView({behavior:"smooth",block:"nearest"})}},{key:"render",value:function(){return s.createElement("div",{className:"menu-content"+(this.props.isOpened?" opened":"")},s.createElement(p.a,{fluid:!0},s.createElement(u.a,{className:"flex-column text-center"},s.createElement("svg",{onClick:this.props.onMenuClose,width:"56px",height:"56px",viewBox:"0 0 16 16",className:"menu-close",fill:"#000",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{fillRule:"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})),s.createElement("div",{className:"nav-links-container"},s.createElement(u.a.Link,{onClick:this.scrollToAbout},s.createElement("h1",null,"About")),s.createElement(u.a.Link,{onClick:this.scrollToContact},s.createElement("h1",null,"Contact"))))))}}]),n}(s.Component),b=n(8),g=n(9);var C=function(){return s.createElement(p.a,{fluid:!0,className:"page-landing"},s.createElement(b.a,{className:"page-landing-row justify-content-center"},s.createElement(g.a,{lg:"8",sm:"6",xs:"12",md:"8"},s.createElement(p.a,{fluid:!0,className:"text-center"},s.createElement("p",{className:"name"},"Moath Zayadneh"),s.createElement("p",{className:"profession"},"Full-Stack Web Developer")))))};var v=function(){return s.createElement(p.a,{fluid:!0,className:"about-container"},s.createElement(b.a,{className:"justify-content-center"},s.createElement(g.a,{lg:"2",sm:"6",xs:"6",md:"4"},s.createElement("h1",{className:"text-center about-label"},"About me"),s.createElement("hr",{color:"#c20c53"}))),s.createElement(b.a,{className:"justify-content-center"},s.createElement(g.a,{lg:"6",sm:"10",xs:"10",md:"8"},s.createElement("p",{className:"lead about-content"},"I'm Moath Zayadneh, I go by the username ",s.createElement("span",null,"THEMUD")," online. I'm a full-stack web developer and a computer enthusiast that loves working in complex, advanced systems with the latest, cutting-edge technologies. I have developed and deployed many websites with fancy user interfaces."),s.createElement("p",{className:"lead about-content"},"I'm very ardent about topics like mobile development and especially artificial intelligence, which the future will rely on, and I'm really looking to dive into it."),s.createElement("p",{className:"lead about-content"},"I believe I have the ability to explain codes to people because I'm also a ",s.createElement("span",null,"Udemy")," instructor. I explained various topics on web development and wrapped my explanation with courses I uploaded on the platform."),s.createElement("p",{className:"lead about-content"},"One of my best projects is that I have written an operating system (OS) and a boot loader from scratch using Assembly and C."),s.createElement("p",{className:"lead about-content"},"Briefly, I have experience in ",s.createElement("span",null,"Python (Django)"),", ",s.createElement("span",null,"C++"),", ",s.createElement("span",null,"JavaScript (NodeJS, ExpressJS and ReactJS)"),", ",s.createElement("span",null,"PHP"),", ",s.createElement("span",null,"Lua"),", ",s.createElement("span",null,"MySQL"),", ",s.createElement("span",null,"MongoDB")," and a little bit of ",s.createElement("span",null,"C"),"."))))};var f=function(){return s.createElement(p.a,{fluid:!0,className:"contact-container"},s.createElement(b.a,{className:"justify-content-center"},s.createElement(g.a,{lg:"2",sm:"6",xs:"6",md:"4"},s.createElement("h1",{className:"text-center contact-label"},"Contact me"),s.createElement("hr",{color:"#c20c53"}))),s.createElement(b.a,{className:"justify-content-center"},s.createElement(g.a,{lg:"3",sm:"12",xs:"12",md:"8"},s.createElement("h3",{className:"contact-email text-center"},s.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{fillRule:"evenodd",d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"})),s.createElement("span",{style:{padding:5}},":")," moathzayadneh@gmail.com"))),s.createElement(b.a,{className:"justify-content-center"},s.createElement(g.a,{lg:"3",sm:"12",xs:"12",md:"8"},s.createElement("h3",{className:"contact-discord text-center"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 50 50",fill:"currentColor"},s.createElement("path",{d:"M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"})),s.createElement("span",{style:{padding:5}},":"),"Themud#2727"))))};n(35);function w(){return s.createElement("div",{className:"about-contact-space"})}var y=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={scrolling:!1,hamburgerOpen:!1},e.handleScroll=e.handleScroll.bind(Object(c.a)(e)),e.handleHamburgerClick=e.handleHamburgerClick.bind(Object(c.a)(e)),e.handleMenuClose=e.handleMenuClose.bind(Object(c.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){window.pageYOffset>50?this.state.scrolling||this.setState({scrolling:!0}):this.setState({scrolling:!1})}},{key:"handleHamburgerClick",value:function(e){e.preventDefault(),this.state.hamburgerOpen||this.setState({hamburgerOpen:!0})}},{key:"handleMenuClose",value:function(e){e.preventDefault(),this.state.hamburgerOpen&&this.setState({hamburgerOpen:!1})}},{key:"render",value:function(){return s.createElement("div",null,s.createElement(h,{isScrolling:this.state.scrolling,onHamburgerClick:this.handleHamburgerClick}),s.createElement(E,{isOpened:this.state.hamburgerOpen,onMenuClose:this.handleMenuClose}),s.createElement(C,null),s.createElement(v,null),s.createElement(w,null),s.createElement(f,null))}}]),n}(s.Component);i.render(s.createElement(y,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.684368da.chunk.js.map