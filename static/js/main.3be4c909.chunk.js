(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{51:function(e,n,t){"use strict";t.r(n);var i,r,a=t(2),o=t(29),c=t.n(o),s=t(33),l=t(9),d=t(15),m=t(5),p=t(14),h=t(6),b=t(21),j=t(1),u=h.b.div(i||(i=Object(m.a)(["\n  position: fixed;\n  z-index: 100;\n  padding: 1rem 0;\n  right: 5rem;\n  background: var(--gray-deep-dark);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    text-align: center;\n    li {\n      display: block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--black);\n      }\n    }\n    a {\n      display: block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-3);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n  }\n  .closeNavIcon {\n    display: none;\n  }\n\n  @media only screen and (max-width: 1080px) {\n    padding: 0;\n    left: 0;\n    right: 0;\n    position: fixed; /* Ensure the navbar stays fixed when scrolling */\n    top: 0; /* Position at the top of the screen */\n    .hide-item {\n      transform: translateY(calc(-150% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--gray-deep-dark);\n      padding: 2rem;\n      width: 100%;\n      left: 0;\n      right: 0;\n      top: 0;\n      border-radius: 0;\n      position: fixed; /* Keep the navItems fixed when open */\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        border-bottom: 1px solid var(--gray-2);\n        &:last-child {\n          border-bottom: none;\n        }\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function g(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(j.jsxs)(u,{children:[!t&&Object(j.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(j.jsx)(b.b,{})}),Object(j.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(j.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(j.jsx)(b.a,{})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.NavLink,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.NavLink,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.NavLink,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)(p.NavLink,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}var f,x=h.b.div(r||(r=Object(m.a)(["\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.3rem;\n  line-height: 2.2rem;\n  margin: 0 auto;\n  @media only screen and (max-width: 1080px) {\n    font-size: 2.2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    font-size: 1.8rem;\n    width: 90%;\n  }\n"])));function y(e){var n=e.children;return Object(j.jsx)(x,{children:Object(j.jsx)("p",{children:n})})}var v=h.b.div(f||(f=Object(m.a)(["\n  margin-top: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7rem 2em;\n    border-radius: 8px;\n    display: inline-block;\n    border: 2px solid var(--gray-3);\n    color: ",";\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(e){return e.outline?"transparent":"var(--gray-3)"}),(function(e){return e.outline?"white":"black"}));function w(e){var n=e.btnLink,t=e.btnText,i=e.outline,r=void 0!==i&&i;return Object(j.jsx)(v,{outline:r,children:Object(j.jsx)(p.Link,{className:"button",to:n,children:t})})}var k,O,_,I=t.p+"static/media/hero-home.369e8d56.png",S=h.b.div(k||(k=Object(m.a)(["\n  justify-content: center;\n  align-items: center;\n  font-size: 2.2rem;\n  line-height: 2.1rem;\n  margin: 15rem 40rem 0;\n  h1 {\n    margin-bottom 6rem;\n    justify-content: center;\n    align-items: center;\n    line-height: 4rem;\n  }\n  @media only screen and (max-width: 1080px) {\n    margin: 8rem 5rem 0;\n  }\n  @media only screen and (max-width: 768px){\n   h1 {\n    font-size: 2.8rem;\n    }\n  }\n"]))),N=h.b.div(O||(O=Object(m.a)(["\n  justify-content: center;\n  align-items: center;\n  width: 38rem;\n  margin: 0 auto;\n  img {\n    border-radius: 10px;\n    justify-content: center;\n    align-items: center;\n  }\n  @media only screen and (max-width: 768px) {\n    img {\n      width: 28rem;\n    }\n  }\n"])));function z(){return Object(j.jsxs)(S,{children:[Object(j.jsx)("h1",{children:"TuanAnh Tran Portfolio"}),Object(j.jsx)(N,{children:Object(j.jsx)("img",{src:I,alt:"hero"})}),Object(j.jsxs)(y,{children:["Welcome to my portfolio! ",Object(j.jsx)("br",{})," My name is TuanAnh (or can just call me Andrew). I am a passionate software developer with hands-on experience and deep expertise in software, website and game development, driven by a love for building and creating innovative solutions. I am committed to leveraging my skills in application development while continually refining my craft to deliver efficient, reliable, and secure software solutions."]}),Object(j.jsx)(w,{btnLink:"/projects",btnText:"See my works"})]})}var T,C=h.b.div(_||(_=Object(m.a)(["\n  .experienceItem__info {\n    margin-top: 1rem;\n    background-color: black;\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .experienceItem__title {\n    font-size: 2.25rem;\n    color: white;\n  }\n  .experienceItem__description {\n    font-size: 1.6rem;\n    line-height: 2.2rem;\n    color: var(--gray-1);\n    margin-top: 1rem;\n  }\n  .experienceItem__company {\n    font-size: 1.95rem;\n    color: var(--gray-1);\n    margin-bottom: 1rem;\n  }\n  .experienceItem__timestamp {\n    font-size: 1.85rem;\n    color: var(--gray-1);\n    margin-bottom: 1rem;\n  }\n"])));function L(e){var n=e.company,t=void 0===n?"Company Name":n,i=e.position,r=void 0===i?"Position Title":i,a=e.timestamp,o=void 0===a?"Timestamp":a,c=e.desc,s=void 0===c?"Description":c;return Object(j.jsx)(C,{children:Object(j.jsxs)("div",{className:"experienceItem__info",children:[Object(j.jsx)("p",{className:"experienceItem__timestamp",children:o}),Object(j.jsx)("p",{className:"experienceItem__company",children:t}),Object(j.jsx)("h3",{className:"experienceItem__title",children:r}),Object(j.jsx)("p",{className:"experienceItem__description",children:s})]})})}var P=h.b.div(T||(T=Object(m.a)(["\n  justify-content: center;\n  align-items: center;\n  font-size: 2.2rem;\n  line-height: 2.1rem;\n  margin: 15rem 40rem 0;\n  h1 {\n    margin-bottom 6rem;\n    justify-content: center;\n    align-items: center;\n    line-height: 4rem;\n  }\n  @media only screen and (max-width: 1080px) {\n    margin: 8rem 5rem 0;\n  }\n  @media only screen and (max-width: 768px){\n   h1 {\n    font-size: 2.8rem;\n    }\n  }\n"])));function M(){return Object(j.jsxs)(P,{children:[Object(j.jsx)("h1",{children:"Experiences"}),Object(j.jsx)(L,{}),Object(j.jsx)(y,{children:"Text"}),Object(j.jsx)(w,{btnLink:"/projects",btnText:"See my works"})]})}var R,D,B=t(56),A=t(54),G=t(55),E=t(53),H=t(57),U=t.p+"static/media/codinginthepark.f57fcc19.png",J=t.p+"static/media/epoch.e00695ea.png",K=t.p+"static/media/oldgovarsim.90421ed1.png",V=t.p+"static/media/gogah.420d33be.jpg",W=t.p+"static/media/advancechess.09efb779.PNG",F=[{id:Object(H.a)(),name:"Coding in the Park",company:"Queensland University of Technology",type:["Web"],skills:["HTML","CSS","JavaScript","PHP","MySQL"],desc:"A website of an education based internal project that focuses on S.T.E.M.(Science, Technology, Engineering and Mathematic), which gives people an altered learning experience using physical activities to catalyse learning. ",img:U,githubLink:"https://github.com/Sir-Apple/CodingInThePark"},{id:Object(H.a)(),name:"Epoch 2140",company:"Epoch",type:["Web","Game","Interactive"],skills:["HTML","CSS","JavaScript","Unity","C#"],desc:"Epoch2140 is a sport-style trading card game where players recruit, strategize, and lead their teams to victory, built with Unity and C#. (Currently in development). The landing page, made with HTML, CSS, and JavaScript, provides game details, while the 3D interactive page, also built with Unity and C#, showcases teams and cards.",img:J,webLink:"https://epoch2140.com/",gameyoutubeLink:"https://www.youtube.com/watch?v=WTUkFY_wgHg",softwareyoutubeLink:"https://www.youtube.com/watch?v=UkzMu5wFNSg"},{id:Object(H.a)(),name:"OGH AR Simulator",company:"Wicked Interactive StoryTelling",type:["Interactive"],skills:["Unity","C#"],desc:"This project is a tour-based experience and simulator application that places the player/user in a position in order to explore the QUT Old Government House in old-timer when it was in active use where the old Queensland Governors were still working and staying at which will be showing on their phone with the app installed. This interaction is made with Unity and C#.",img:K,githubLink:"https://github.com/ybott/IFB398-Prototype",downloadLink:"https://sadapple.itch.io/old-government-house-ar-simulator"},{id:Object(H.a)(),name:"Greater Powers of Gods and Heroes",company:"Darkstar Games",type:["Game"],skills:["Unity","C#"],desc:"In the game greater powers you, the player, will be able to lead a mighty army based on your high powered heavily armed magical skyship, and engage in massive fleet actions with not only epic ship to ship combat, but full real time boarding actions involving hundreds of enemies and allies battling all at once. The game is made with Unity and C#. (Currently in development) ",img:V,overviewLink:"https://darkstargames.net/greaterpowers/"},{id:Object(H.a)(),name:"Battle of Lords: Advance Chess",company:"Advance Studio",type:["Game"],skills:["Unity","C#"],desc:"This is a multi-player board game where each chess piece has its own special moves and abilities which is different from the traditional chess game. This game is made with Unity and C#. (Currently in development) ",img:W}],Q=t.p+"static/media/movieapp.5edc69f1.PNG",Y=t.p+"static/media/oldportfolio.fda3e371.PNG",q=t.p+"static/media/thehauntedbg.1766a5ed.jpg",X=[{id:Object(H.a)(),name:"Movie Trackr",type:["Web"],skills:["ReactJS","CSS","JavaScript"],desc:"This Movie Trackr App is made with ReactJS with the purpose of searching for movies and their details fetched from TMDB. The user will be able to search for the movie they like then save to their watchlist or watchedlist.",img:Q,webLink:"https://sir-apple.github.io/MovieTrackr/",githubLink:"https://github.com/Sir-Apple/MovieTrackr"},{id:Object(H.a)(),name:"Personal Portfolio (Old Version)",type:["Web"],skills:["HTML","CSS","JavaScript"],desc:"My previous version of my portfolio, made with HTML, CSS, and JavaScript",img:Y,webLink:"https://sir-apple-github-io.vercel.app/",githubLink:"https://github.com/Sir-Apple/Sir-Apple.github.io"},{id:Object(H.a)(),name:"The Haunted",type:["Interactive"],skills:["Unity","C#"],desc:"The Haunted is a short First-person horror and escape-room game. The game begins when the player is stuck inside a completely dark and blacked-out haunted house, the only light sources are candles and the head-mounted flashlight that the character bought with him. The player then is required to unlock doors and puzzles in order to escape from the haunted house as well as run away from the ghost, which interrupts the player.",img:q,downloadLink:"https://sadapple.itch.io/the-haunted"}],Z=t.p+"static/media/projectImg.771236e1.png",$=h.b.div(R||(R=Object(m.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    overflow: hidden;\n    border-radius: 12px;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    cursor: pointer;\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: black;\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.1rem;\n    color: white;\n  }\n  .projectItem__description {\n    font-size: 1.6rem;\n    line-height: 2.2rem;\n    color: var(--gray-1);\n    margin-top: 1rem;\n  }\n  .projectItem__skills,\n  .projectItem__type {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    margin-top: 1.5rem;\n  }\n  .projectItem__company {\n    font-size: 1.75rem;\n    color: var(--gray-1);\n    margin-bottom: 1rem;\n  }\n\n  .type__item {\n    font-size: 1.6rem;\n    color: var(--gray-1);\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .skill__item {\n    font-size: 1.25rem;\n    color: white;\n    padding: 0.5rem 1rem;\n    border: 2px solid white;\n    border-radius: 15px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n\n  @media only screen and (max-width: 1080px) {\n    .projectItem__img {\n      height: 290px;\n    }\n  }\n"])));function ee(e){var n=e.img,t=void 0===n?Z:n,i=e.title,r=void 0===i?"Project Name":i,a=e.company,o=void 0===a?"Company Name":a,c=e.types,s=void 0===c?["Project Type"]:c,l=e.skills,d=void 0===l?["Skills"]:l,m=e.onClick;return Object(j.jsxs)($,{children:[Object(j.jsx)("div",{className:"projectItem__img",role:"button",tabIndex:0,onClick:m,onKeyDown:function(e){"Enter"!==e.key&&" "!==e.key||m()},children:Object(j.jsx)("img",{src:t,alt:"project img"})}),Object(j.jsxs)("div",{className:"projectItem__info",children:[Object(j.jsx)("p",{className:"projectItem__company",children:o}),Object(j.jsx)("h3",{className:"projectItem__title",children:r}),Object(j.jsx)("div",{className:"projectItem__type",children:s.map((function(e,n){return Object(j.jsx)("span",{className:"type__item",children:e},n)}))}),Object(j.jsx)("div",{className:"projectItem__skills",children:d.map((function(e,n){return Object(j.jsx)("span",{className:"skill__item",children:e},n)}))})]})]})}var ne=h.b.div(D||(D=Object(m.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    overflow: hidden;\n    border-radius: 12px;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    cursor: pointer;\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: black;\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.1rem;\n    color: white;\n  }\n  .projectItem__description {\n    font-size: 1.6rem;\n    line-height: 2.2rem;\n    color: var(--gray-1);\n    margin-top: 1rem;\n  }\n  .projectItem__skills,\n  .projectItem__type {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1rem;\n    margin-top: 1.5rem;\n  }\n  .projectItem__company {\n    font-size: 1.75rem;\n    color: var(--gray-1);\n    margin-bottom: 1rem;\n  }\n\n  .type__item {\n    font-size: 1.6rem;\n    color: var(--gray-1);\n    display: inline-block;\n    white-space: nowrap;\n  }\n  .skill__item {\n    font-size: 1.25rem;\n    color: white;\n    padding: 0.5rem 1rem;\n    border: 2px solid white;\n    border-radius: 15px;\n    display: inline-block;\n    white-space: nowrap;\n  }\n\n  @media only screen and (max-width: 1080px) {\n    .projectItem__img {\n      height: 290px;\n    }\n  }\n"])));function te(e){var n=e.img,t=void 0===n?Z:n,i=e.title,r=void 0===i?"Project Name":i,a=e.types,o=void 0===a?["Project Type"]:a,c=e.skills,s=void 0===c?["Skills"]:c,l=e.onClick;return Object(j.jsxs)(ne,{children:[Object(j.jsx)("div",{className:"projectItem__img",role:"button",tabIndex:0,onClick:l,onKeyDown:function(e){"Enter"!==e.key&&" "!==e.key||l()},children:Object(j.jsx)("img",{src:t,alt:"project img"})}),Object(j.jsxs)("div",{className:"projectItem__info",children:[Object(j.jsx)("h3",{className:"projectItem__title",children:r}),Object(j.jsx)("div",{className:"projectItem__type",children:o.map((function(e,n){return Object(j.jsx)("span",{className:"type__item",children:e},n)}))}),Object(j.jsx)("div",{className:"projectItem__skills",children:s.map((function(e,n){return Object(j.jsx)("span",{className:"skill__item",children:e},n)}))})]})]})}var ie,re,ae,oe,ce,se,le,de;t(50);G.a.use([E.a]);var me=h.b.div(ie||(ie=Object(m.a)(["\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background-color: black;\n    z-index: 10;\n    margin-right: 5.5rem;\n    top: 2rem;\n    transform: translate(50%);\n    color: white;\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 1490px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"]))),pe=h.b.div(re||(re=Object(m.a)(["\n  justify-content: center;\n  align-items: center;\n  font-size: 2.2rem;\n  line-height: 2.1rem;\n  margin: 15rem 40rem 0;\n  h1 {\n    margin-bottom 6rem;\n    justify-content: center;\n    align-items: center;\n    line-height: 4rem;\n  }\n  @media only screen and (max-width: 1080px) {\n    margin: 8rem 5rem 0;\n  }\n  @media only screen and (max-width: 768px){\n   h1 {\n    font-size: 2.8rem;\n    }\n  }\n"]))),he=h.b.div(ae||(ae=Object(m.a)(["\n  display: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 100;\n"])),(function(e){return e.isOpen?"block":"none"})),be=h.b.img(oe||(oe=Object(m.a)(["\n  width: 350px;\n  height: 300px;\n  border-radius: 8px;\n  margin: 1rem 7.5% 1rem auto;\n  @media only screen and (max-width: 768px) {\n    width: 250px;\n  }\n"]))),je=h.b.div(ce||(ce=Object(m.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: black;\n  padding: 2rem;\n  border-radius: 10px;\n  width: 400px;\n  max-width: 800px;\n  .modal_skills {\n    display: flex;\n    gap: 0.5rem;\n    font-size: 2.1rem;\n    color: white;\n    margin-top: 1rem;\n  }\n  .modal_company {\n    font-size: 2rem;\n  }\n  .modal_title {\n    font-size: 2.5rem;\n    color: white;\n  }\n  .modal_desc {\n    font-size: 1.6rem;\n  }\n  @media only screen and (max-width: 768px) {\n    width: 310px;\n    .modal_skills {\n      font-size: 1.9rem;\n    }\n    .modal_company {\n      font-size: 1.8rem;\n    }\n    .modal_title {\n      font-size: 2.3rem;\n    }\n    .modal_desc {\n      font-size: 1.5rem;\n    }\n  }\n"]))),ue=h.b.button(se||(se=Object(m.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  font-size: 2.5rem;\n  cursor: pointer;\n  background-color: black;\n"]))),ge=h.b.div(le||(le=Object(m.a)(["\n  margin-top: 1.5rem;\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n"]))),fe=h.b.a(de||(de=Object(m.a)(["\n  padding: 0.5rem 1rem;\n  background: var(--deep-dark);\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 8px;\n  font-size: 1.5rem;\n  &:hover {\n    background: white;\n    color: var(--deep-dark);\n  }\n"])));function xe(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(null),o=Object(d.a)(r,2),c=o[0],s=o[1],l=function(e){s(e),i(!0)};return Object(j.jsxs)(me,{children:[Object(j.jsxs)(pe,{children:[Object(j.jsx)("h1",{children:"Commercial Projects"}),Object(j.jsx)("div",{className:"projects__allItems",children:Object(j.jsx)(B.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},1490:{slidesPerView:2},1920:{slidesPerView:3}},children:F.map((function(e,n){return n>=5?null:Object(j.jsx)(A.a,{children:Object(j.jsx)(ee,{title:e.name,img:e.img,company:e.company,types:e.type,skills:e.skills,desc:e.desc,onClick:function(){return l(e)}})},e.id)}))})})]}),Object(j.jsxs)(pe,{children:[Object(j.jsx)("h1",{children:"Personal Projects"}),Object(j.jsx)("div",{className:"projects__allItems",children:Object(j.jsx)(B.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},1490:{slidesPerView:2},1920:{slidesPerView:3}},children:X.map((function(e,n){return n>=3?null:Object(j.jsx)(A.a,{children:Object(j.jsx)(te,{title:e.name,img:e.img,types:e.type,skills:e.skills,desc:e.desc,onClick:function(){return l(e)}})},e.id)}))})})]}),c&&Object(j.jsx)(he,{isOpen:t,children:Object(j.jsxs)(je,{children:[Object(j.jsx)(ue,{onClick:function(){i(!1),s(null)},children:Object(j.jsx)(b.a,{})}),Object(j.jsx)("div",{className:"modal_company",children:c.company}),Object(j.jsx)("div",{className:"modal_title",children:c.name}),Object(j.jsx)(be,{src:c.img,alt:c.name}),Object(j.jsx)("div",{className:"modal_skills",children:c.skills.join(", ")}),Object(j.jsx)("p",{className:"modal_desc",children:c.desc}),Object(j.jsxs)(ge,{children:[c.webLink&&Object(j.jsx)(fe,{href:c.webLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Web Live"}),c.githubLink&&Object(j.jsx)(fe,{href:c.githubLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"GitHub"}),c.gameyoutubeLink&&Object(j.jsx)(fe,{href:c.gameyoutubeLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Game Demo"}),c.softwareyoutubeLink&&Object(j.jsx)(fe,{href:c.softwareyoutubeLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Interactive Demo"}),c.downloadLink&&Object(j.jsx)(fe,{href:c.downloadLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Download"}),c.overviewLink&&Object(j.jsx)(fe,{href:c.overviewLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Overview"})]})]})})]})}function ye(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Contact"})})}var ve,we,ke,Oe,_e=t(22),Ie=t.p+"static/media/hero-2.a49c0cf9.png",Se=["Software","FullStack","Games"];var Ne,ze=h.b.div(ve||(ve=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  background: var(--gray-deep-dark);\n  width: 30rem;\n  z-index: 99;\n  .hero__info {\n    text-align: center;\n    font-size: 2rem;\n    margin: 0 auto;\n  }\n\n  @media only screen and (max-width: 1080px) {\n    position: relative;\n    left: 25%;\n    width: 50%;\n  }\n"]))),Te=h.b.div(we||(we=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 15rem;\n  border: 1px solid white;\n  border-radius: 5px;\n"]))),Ce=h.b.div(ke||(ke=Object(m.a)(["\n  font-size: 2.2rem;\n  color: white;\n"]))),Le=h.b.div(Oe||(Oe=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  width: 12.5rem;\n  margin: 0 auto;\n  a {\n    color: white;\n    font-size: 2.5rem;\n    margin: 0 0.5rem;\n    transition: 0.3s ease;\n    &:hover {\n      color: var(--gray-2);\n    }\n  }\n"])));function Pe(){var e=Object(a.useState)(0),n=Object(d.a)(e,2),t=n[0],i=n[1],r=Object(a.useState)(Se[t]),o=Object(d.a)(r,2),c=o[0],s=o[1];return Object(a.useEffect)((function(){var e=setInterval((function(){var e=(t+1)%Se.length;i(e);var n=setInterval((function(){s(function(e){for(var n=e.split(""),t=n.length-1;t>0;t-=1){var i=Math.floor(Math.random()*(t+1)),r=[n[i],n[t]];n[t]=r[0],n[i]=r[1]}return n.join("")}(Se[e]))}),100);setTimeout((function(){clearInterval(n),s(Se[e])}),1500)}),2500);return function(){return clearInterval(e)}}),[t]),Object(j.jsxs)(ze,{children:[Object(j.jsx)(Te,{children:Object(j.jsx)("img",{src:Ie,alt:"hero"})}),Object(j.jsxs)("div",{className:"hero__info",children:[Object(j.jsx)("p",{children:"Name"}),Object(j.jsx)(Ce,{children:"TuanAnh Tran"}),Object(j.jsx)("p",{children:"Role"}),Object(j.jsxs)(Ce,{children:[c," Developer"]}),Object(j.jsx)("p",{children:"Socials"}),Object(j.jsxs)(Le,{children:[Object(j.jsx)("a",{href:"https://www.linkedin.com/in/anhh-trann/",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(_e.c,{})}),Object(j.jsx)("a",{href:"https://sadapple.itch.io/",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(_e.b,{})}),Object(j.jsx)("a",{href:"https://github.com/Sir-Apple",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(_e.a,{})}),Object(j.jsx)("a",{href:"https://www.youtube.com/@tuananhtran2944",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(_e.d,{})})]})]})]})}function Me(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.a,{basename:"/portfolio",children:[Object(j.jsx)(g,{}),Object(j.jsx)(Pe,{}),Object(j.jsxs)(l.Switch,{children:[Object(j.jsx)(l.Route,{path:"/about",children:Object(j.jsx)(M,{})}),Object(j.jsx)(l.Route,{path:"/projects",children:Object(j.jsx)(xe,{})}),Object(j.jsx)(l.Route,{path:"/contact",children:Object(j.jsx)(ye,{})}),Object(j.jsx)(l.Route,{path:"/",children:Object(j.jsx)(z,{})})]})]})})}var Re,De=Object(h.a)(Ne||(Ne=Object(m.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --gray-3: #6e6e6e;\n    --white : white;\n    --black: black;\n    --green: #30fe6c;\n    --dark-bg-2: #081215;\n    --deep-dark-2: #050d0a;\n    --gray-deep-dark: #111111;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Iceland Regular';\n    background-color: var(--gray-deep-dark);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Be=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Ae=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Ge=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Ee=t.p+"static/media/Iceland-Regular.7e45c1c0.ttf",He=t.p+"static/media/BigShouldersDisplay-Medium.faa156d4.ttf",Ue=t.p+"static/media/BigShouldersDisplay-Regular.bb81c7d9.ttf",Je=Object(h.a)(Re||(Re=Object(m.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Iceland Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'BigShouldersDisplay Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'BigShouldersDisplay Medium';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'Iceland Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'Iceland Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n"])),Be,Ae,Ge,Ee,Ue,He);c.a.render(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(De,{}),Object(j.jsx)(Je,{}),Object(j.jsx)(Me,{})]}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.3be4c909.chunk.js.map