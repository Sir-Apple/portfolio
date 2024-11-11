(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{51:function(e,t,i){"use strict";i.r(t);var r=i(2),a=i(28),n=i.n(a),o=i(33),s=i(8),c=i(13),l=i(5),d=i(23),m=i(1);const p=l.b.div`
  position: fixed;
  z-index: 100;
  padding: 1rem 0;
  right: 5rem;
  background: var(--gray-deep-dark);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    li {
      display: block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--black);
      }
    }
    a {
      display: block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-3);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 1080px) {
    padding: 0;
    left: 0;
    right: 0;
    position: fixed; /* Ensure the navbar stays fixed when scrolling */
    top: 0; /* Position at the top of the screen */
    .hide-item {
      transform: translateY(calc(-150% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--gray-deep-dark);
      padding: 2rem;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      border-radius: 0;
      position: fixed; /* Keep the navItems fixed when open */
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        border-bottom: 1px solid var(--gray-2);
        &:last-child {
          border-bottom: none;
        }
        margin-bottom: 1rem;
      }
    }
  }
`;function h(){const[e,t]=Object(r.useState)(!1);return Object(m.jsxs)(p,{children:[!e&&Object(m.jsx)("div",{className:"mobile-menu-icon",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:Object(m.jsx)(d.b,{})}),Object(m.jsxs)("ul",{className:e?"navItems":"navItems hide-item",children:[Object(m.jsx)("div",{className:"closeNavIcon",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:Object(m.jsx)(d.a,{})}),Object(m.jsx)("li",{children:Object(m.jsx)(c.NavLink,{to:"/",exact:!0,onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(c.NavLink,{to:"/about",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)(c.NavLink,{to:"/projects",onClick:()=>t(!e),role:"button",onKeyDown:()=>t(!e),tabIndex:0,children:"Projects"})})]})]})}var b=i.p+"static/media/-Resume-.0dc89241.pdf";const g=l.b.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 2.3rem;
  line-height: 2.2rem;
  margin: 0 auto;
  @media only screen and (max-width: 1080px) {
    font-size: 2.2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
    width: 90%;
  }
`;function j(e){let{children:t}=e;return Object(m.jsx)(g,{children:Object(m.jsx)("p",{children:t})})}const x=l.b.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .button {
    font-size: 2.2rem;
    background-color: ${e=>e.outline?"transparent":"var(--gray-3)"};
    padding: 0.7rem 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-3);
    color: ${e=>e.outline?"white":"black"};
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;function u(e){let{btnText:t,outline:i=!1,onClick:r=null}=e;return Object(m.jsx)(x,{outline:i,children:Object(m.jsx)(c.Link,{className:"button",onClick:r,children:t})})}var f=i.p+"static/media/hero-home.369e8d56.png";const y=l.b.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 2.2rem;
  }
`;function w(e){let{heading:t="col heading",links:i=[{type:"Links",title:"LinkedIn"},{type:"Links",title:"itch.io"}]}=e;return Object(m.jsxs)(y,{children:[Object(m.jsx)("h1",{className:"heading",children:t}),Object(m.jsx)("ul",{children:i.map(((e,t)=>Object(m.jsx)("li",{children:"Link"===e.type?Object(m.jsx)(c.Link,{to:e.path,children:e.title}):Object(m.jsx)("a",{href:e.path,target:"_blank",rel:"noreferrer",children:e.title})},t)))})]})}const v=l.b.div`
  padding-top: 5rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.8rem;
    color: white;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--deep-dark);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 1080px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;function k(){return Object(m.jsxs)(v,{children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"footer__col1",children:[Object(m.jsx)("h1",{className:"footer__col1__title",children:"TuanAnh Tran"}),Object(m.jsx)(j,{children:"Software Developer | FullStack Developer | Games Developer"})]}),Object(m.jsx)("div",{className:"footer__col2",children:Object(m.jsx)(w,{heading:"Reach me out",links:[{title:"tranquangtuananh2801@gmail.com",path:"mailto:tranquangtuananh2801@gmail.com"}]})}),Object(m.jsx)("div",{className:"footer__col3",children:Object(m.jsx)(w,{heading:"Built with ReactJS",links:[{title:"GitHub",path:"https://github.com/Sir-Apple/portfolio"}]})})]}),Object(m.jsx)("div",{className:"copyright",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(j,{children:"\xa9 2024 TuanAnh Tran"})})})]})}const O=l.c`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,_=l.b.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 10rem;
  opacity: 0;
  animation: ${O} 1.5s ease forwards;

  h1 {
    margin-bottom 6rem;
    justify-content: center;
    align-items: center;
    line-height: 4rem;
    color: white;
  }
  @media only screen and (max-width: 1080px) {
    margin: 8rem 5rem 0;
  }
  @media only screen and (max-width: 768px){
   h1 {
    font-size: 2.8rem;
    }
  }
`,I=l.b.div`
  justify-content: center;
  align-items: center;
  width: 38rem;
  margin: 0 auto;
  img {
    border-radius: 10px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    width: 28rem;
  }
  @media only screen and (max-width: 768px) {
    img {
      width: 28rem;
    }
  }
`;function S(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(_,{children:[Object(m.jsx)("h1",{children:"TuanAnh Tran Portfolio"}),Object(m.jsx)(I,{children:Object(m.jsx)("img",{src:f,alt:"hero"})}),Object(m.jsxs)(j,{children:["Welcome to my portfolio! ",Object(m.jsx)("br",{})," My name is TuanAnh (or can just call me Andrew). I am a passionate software developer with hands-on experience and deep expertise in software, website and game development, driven by a love for building and creating innovative solutions. I am committed to leveraging my skills in application development while continually refining my craft to deliver efficient, reliable, and secure software solutions."]}),Object(m.jsx)(u,{btnText:"My Resume",onClick:()=>{window.open(b,"_blank")}})]}),Object(m.jsx)(k,{})]})}var N=i(55),C=i(53),z=i(54),T=i(52);var L=[{id:1,position:"Software Developer (Part-time)",timestamp:"July 2023 - Present",org:"Advance Studio",location:"Brisbane, Queensland, Australia",skills:"Unity, C#",desc:["Currently contributing remotely to a small studio, collaborating with a senior software engineer and international artists and designers (from Vietnam, Japan and Canada) on the mobile and desktop game Battle of Lords: Advance Chess.","Responsible for implementing complex chess movements and animations using <b> Unity/C# </b> programming techniques.","Actively involved in design discussions and problem-solving sessions to enhance the chess gaming interface and contribute to the projects overall progress."]},{id:2,position:"Software Developer",timestamp:"April 2023 - October 2023",org:"Beyond Studio",location:"Hanoi, Vietnam (Remote)",skills:"HTML, CSS, JavaScript, Unity, C#",desc:['Developed animations and features like coin tossing, card movements, and spawning for the <a href="https://www.youtube.com/watch?v=WTUkFY_wgHg" target="_blank"> Epoch2140 </a>\u2019s sport-style Trading Card game and created the game\u2019s <a href="https://www.youtube.com/watch?v=UkzMu5wFNSg" target="_blank"> Interactive Booth </a> with <b> Unity/C# </b>. Therefore, developed the <a href="https://epoch2140.com/" target="_blank"> Epoch 2140\u2019s landing page </a>  using <b> HTML/CSS </b> and <b> JavaScript </b>.','Developed RPG-style elements like a third-person controller, Ready Player Me for character selection, and a Pokemon-inspired horse-catching system using <b> Unity/C# </b> for the <a href="https://www.metahorseunity.io/#gameplay-1" target="_blank"> MetaHorse </a>s horse racing game.']},{id:3,position:"Software Developer (Internship)",timestamp:"September 2021 - March 2022",org:"Premier Ducts Pty Ltd",location:"Brisbane, Queensland, Australia",skills:"Unity, C#, Xamarin",desc:["Designed and implemented the front-end and user experience for an internal application utilised by duct workers in the workshop.","Created application features, including creating new stations using <b>Unity Engine</b>, <b>C#</b>, and also <b>Xamarin</b>."]},{id:4,position:"Software Developer (Internship)",timestamp:"November 2017 - January 2018",org:"ACB - Asia Commercial Bank",location:"Ho Chi Minh City, Vietnam",skills:"Python",desc:["Developed a small service system (customer paying bills process) with <b> Python</b>."]}];const P=l.b.div`
  .experienceItem__info {
    margin-top: 1rem;
    background-color: black;
    padding: 1rem;
    border-radius: 12px;
    width: 100%;
  }
  .experienceItem__title {
    font-size: 2.25rem;
    color: white;
    text-align: center;
  }
  .experienceItem__description {
    font-size: 2rem;
    line-height: 2.2rem;
    color: var(--gray-1);
    margin-top: 1rem;
    text-align: center;
  }
  .experienceItem__company {
    font-size: 2.5rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    text-align: center;
  }
  .experienceItem__timestamp,
  .experienceItem__skills {
    font-size: 2rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    text-align: center;
  }
  .experienceItem__location {
    font-size: 2.3rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    text-align: center;
  }
`;function M(e){let{company:t="Company Name",position:i="Position Title",timestamp:r="Timestamp",location:a="Location",skills:n="Skills",descr:o=["Description"]}=e;return Object(m.jsx)(P,{children:Object(m.jsxs)("div",{className:"experienceItem__info",children:[Object(m.jsx)("p",{className:"experienceItem__timestamp",children:r}),Object(m.jsx)("p",{className:"experienceItem__company",children:t}),Object(m.jsx)("p",{className:"experienceItem__location",children:a}),Object(m.jsx)("h3",{className:"experienceItem__title",children:i}),Object(m.jsxs)("p",{className:"experienceItem__skills",children:["Skills: ",n]}),Object(m.jsx)("div",{className:"experienceItem__description",children:o.map(((e,t)=>{return Object(m.jsx)("div",{className:"experience__item",children:(i=e,i.split(/(<b>.*?<\/b>|<a.*?<\/a>)/).map(((e,t)=>{if(e.startsWith("<b>")&&e.endsWith("</b>"))return Object(m.jsx)("strong",{children:e.replace(/<\/?b>/g,"")},t);if(e.startsWith("<a")&&e.endsWith("</a>")){const i=e.match(/href="(.*?)"/),r=e.match(/>(.*?)<\/a>/),a=e.match(/style="(.*?)"/),n=e.includes('target="_blank"')?"_blank":"_self";return Object(m.jsx)("a",{href:i?i[1]:"#",target:n,rel:"noopener noreferrer",style:{textDecoration:"underline",...a&&{color:a[1]}},children:Object(m.jsx)("strong",{children:r?r[1]:"link"})},t)}return e})))},t);var i}))})]})})}i(27);z.a.use([T.a]);const D=l.b.div`
  .experiences__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    padding-bottom: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: black;
    z-index: 10;
    margin-right: 6rem;
    top: 2rem;
    transform: translate(50%);
    color: white;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1490px) {
    .experiences__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;function B(){return Object(m.jsx)(D,{children:Object(m.jsx)("div",{className:"projects__allItems",children:Object(m.jsx)(N.a,{spaceBetween:30,slidesPerView:1,navigation:!0,children:L.map(((e,t)=>{if(!(t>=5))return Object(m.jsx)(C.a,{children:Object(m.jsx)(M,{position:e.position,timestamp:e.timestamp,location:e.location,company:e.org,skills:e.skills,descr:e.desc})},e.id)}))})})})}const R=l.b.div`
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  border: 1px solid white;
  border-radius: 8px;
  .title {
    font-size: 2rem;
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin: -30px auto 1rem 2rem;
  }
  .item {
    padding: 5px;
    border-radius: 8px;
    font-size: 2rem;
    width: 5.2rem;
  }
  @media only screen and (max-width: 992px) {
    .items {
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      font-size: 1.8rem;
    }
  }
`;function A(e){let{title:t="This is title",items:i=["HTML"]}=e;return Object(m.jsxs)(R,{children:[Object(m.jsx)("h1",{className:"title",children:t}),Object(m.jsx)("div",{className:"items",children:i.map(((e,t)=>Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("p",{children:e})},t)))})]})}var U=i.p+"static/media/c-sharp.04d9d2bb.svg",H=i.p+"static/media/javascript.00f3e5cf.svg",E=i.p+"static/media/typescript.a6305a73.svg",G=i.p+"static/media/html.f318c8b1.svg",J=i.p+"static/media/css.4e47c312.svg",F=i.p+"static/media/cplusplus.a776a608.svg",W=i.p+"static/media/php.1619ffb7.svg",V=i.p+"static/media/python.e6d7dc73.svg",$=i.p+"static/media/java.2c5d38ea.svg",Q=i.p+"static/media/mysql.767664a0.svg",K=i.p+"static/media/mongodb.1aca075d.svg",q=i.p+"static/media/microsoft-sql-server.52090d74.svg",X=i.p+"static/media/postgresql.ae92b576.svg",Y=i.p+"static/media/react.e68b35f4.svg",Z=i.p+"static/media/tailwind-css.315d0ac2.svg",ee=i.p+"static/media/nodejs.4f3c72c1.svg",te=i.p+"static/media/aspnet.97f78a48.svg",ie=i.p+"static/media/xamarin.d6f00d86.svg",re=i.p+"static/media/nextjs.1b2b52c0.svg",ae=i.p+"static/media/unity.86fd144b.svg",ne=i.p+"static/media/unreal-engine.c1aa856c.svg",oe=i.p+"static/media/wordpress.203c28df.svg";const se=l.c`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ce=l.b.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 10rem;
  opacity: 0;
  animation: ${se} 1.5s ease forwards;

  h1 {
    margin-bottom: 6rem;
    justify-content: center;
    align-items: center;
    line-height: 4rem;
    color: white;
  }
  h2 {
    margin-bottom: 6rem;
    line-height: 3rem;
  }
  h3 {
    margin-bottom: 3rem;
    line-height: 3rem;
  }

  @media only screen and (max-width: 1080px) {
    margin: 8rem 5rem 0;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2.1rem;
    }
  }
`;function le(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(ce,{children:[Object(m.jsx)("h1",{children:"Experiences"}),Object(m.jsx)(B,{}),Object(m.jsx)("h1",{children:"Education"}),Object(m.jsx)("h3",{children:"Queensland University of Technology"}),Object(m.jsx)("h2",{children:"Bachelor of Information Technology & Games and Interactive Environments"}),Object(m.jsx)("h1",{children:"Skills"}),Object(m.jsx)(A,{title:"Languages and Programming Languages",items:[Object(m.jsx)("img",{src:U,alt:"C#"}),Object(m.jsx)("img",{src:H,alt:"JavaScript"}),Object(m.jsx)("img",{src:E,alt:"TypeScript"}),Object(m.jsx)("img",{src:G,alt:"HTML"}),Object(m.jsx)("img",{src:J,alt:"CSS"}),Object(m.jsx)("img",{src:F,alt:"CPlusCplus"}),Object(m.jsx)("img",{src:W,alt:"PHP"}),Object(m.jsx)("img",{src:V,alt:"Python"}),Object(m.jsx)("img",{src:$,alt:"Java"})]}),Object(m.jsx)(A,{title:"Database Management Systems / Document",items:[Object(m.jsx)("img",{src:Q,alt:"MySQL"}),Object(m.jsx)("img",{src:K,alt:"MongoDB"}),Object(m.jsx)("img",{src:q,alt:"MicrosoftSQL"}),Object(m.jsx)("img",{src:X,alt:"PostgreSQL"})]}),Object(m.jsx)(A,{title:"Libraries / Frameworks and Tools",items:[Object(m.jsx)("img",{src:Y,alt:"React"}),Object(m.jsx)("img",{src:Z,alt:"TailwindCSS"}),Object(m.jsx)("img",{src:ee,alt:"NodeJS"}),Object(m.jsx)("img",{src:te,alt:"ASPNet"}),Object(m.jsx)("img",{src:ie,alt:"Xamarin"}),Object(m.jsx)("img",{src:re,alt:"NextJS"}),Object(m.jsx)("img",{src:ae,alt:"Unity"}),Object(m.jsx)("img",{src:ne,alt:"Unreal Engine"}),Object(m.jsx)("img",{src:oe,alt:"Wordpress"})]})]}),Object(m.jsx)(k,{})]})}var de=i(56),me=i.p+"static/media/codinginthepark.f57fcc19.png",pe=i.p+"static/media/epoch.e00695ea.png",he=i.p+"static/media/oldgovarsim.90421ed1.png",be=i.p+"static/media/gogah.420d33be.jpg",ge=i.p+"static/media/advancechess.09efb779.PNG";var je=[{id:Object(de.a)(),name:"Coding in the Park",company:"Queensland University of Technology",type:["Web"],skills:["HTML","CSS","JavaScript","PHP","MySQL"],desc:"A website of an education based internal project that focuses on S.T.E.M.(Science, Technology, Engineering and Mathematic), which gives people an altered learning experience using physical activities to catalyse learning. ",img:me,githubLink:"https://github.com/Sir-Apple/CodingInThePark"},{id:Object(de.a)(),name:"Epoch 2140",company:"Epoch",type:["Web","Game","Interaction"],skills:["HTML","CSS","JavaScript","Unity","C#"],desc:"Epoch2140 is a sport-style trading card game where players recruit, strategize, and lead their teams to victory, built with Unity and C#. (Currently in development). The landing page, made with HTML, CSS, and JavaScript, provides game details, while the 3D interaction page, also built with Unity and C#, showcases teams and cards.",img:pe,webLink:"https://epoch2140.com/",gameyoutubeLink:"https://www.youtube.com/watch?v=WTUkFY_wgHg",softwareyoutubeLink:"https://www.youtube.com/watch?v=UkzMu5wFNSg"},{id:Object(de.a)(),name:"OGH AR Simulator",company:"Wicked Interactive StoryTelling",type:["Interaction"],skills:["Unity","C#"],desc:"This interaction program is a tour-based experience and simulator application that places the player/user in a position in order to explore the QUT Old Government House in old-timer when it was in active use where the old Queensland Governors were still working and staying at which will be showing on their phone with the app installed. This interaction is made with Unity and C#.",img:he,githubLink:"https://github.com/ybott/IFB398-Prototype",downloadLink:"https://sadapple.itch.io/old-government-house-ar-simulator"},{id:Object(de.a)(),name:"Greater Powers of Gods and Heroes",company:"Darkstar Games",type:["Game"],skills:["Unity","C#"],desc:"In the game greater powers you, the player, will be able to lead a mighty army based on your high powered heavily armed magical skyship, and engage in massive fleet actions with not only epic ship to ship combat, but full real time boarding actions involving hundreds of enemies and allies battling all at once. The game is made with Unity and C#. (Currently in development) ",img:be,overviewLink:"https://darkstargames.net/greaterpowers/"},{id:Object(de.a)(),name:"Battle of Lords: Advance Chess",company:"Advance Studio",type:["Game"],skills:["Unity","C#"],desc:"This is a multi-player board game where each chess piece has its own special moves and abilities which is different from the traditional chess game. This game is made with Unity and C#. (Currently in development) ",img:ge}],xe=i.p+"static/media/movieapp.5edc69f1.PNG",ue=i.p+"static/media/oldportfolio.fda3e371.PNG",fe=i.p+"static/media/thehauntedbg.1766a5ed.jpg";var ye=[{id:Object(de.a)(),name:"Movie Trackr",type:["Web"],skills:["ReactJS","HTML","CSS","JavaScript"],desc:"This Mini Movie Trackr App is made with ReactJS with the purpose of searching for movies and their details fetched from TMDB. The user will be able to search for the movie they like then save to their watchlist or watchedlist.",img:xe,webLink:"https://sir-apple.github.io/MovieTrackr/",githubLink:"https://github.com/Sir-Apple/MovieTrackr"},{id:Object(de.a)(),name:"Personal Portfolio (Old Version)",type:["Web"],skills:["HTML","CSS","JavaScript"],desc:"My previous version of my portfolio, made with HTML, CSS, and JavaScript",img:ue,webLink:"https://sir-apple-github-io.vercel.app/",githubLink:"https://github.com/Sir-Apple/Sir-Apple.github.io"},{id:Object(de.a)(),name:"The Haunted",type:["Game"],skills:["Unity","C#"],desc:"The Haunted is a short First-person horror and escape-room game. The game begins when the player is stuck inside a completely dark and blacked-out haunted house, the only light sources are candles and the head-mounted flashlight that the character bought with him. The player then is required to unlock doors and puzzles in order to escape from the haunted house as well as run away from the ghost, which interrupts the player.",img:fe,downloadLink:"https://sadapple.itch.io/the-haunted"}],we=i.p+"static/media/projectImg.771236e1.png";const ve=l.b.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    cursor: pointer;
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: black;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.1rem;
    color: white;
  }
  .projectItem__description {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: var(--gray-1);
    margin-top: 1rem;
  }
  .projectItem__skills,
  .projectItem__type {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .projectItem__company {
    font-size: 1.75rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
  }

  .type__item {
    font-size: 1.6rem;
    color: var(--gray-1);
    display: inline-block;
    white-space: nowrap;
  }
  .skill__item {
    font-size: 1.25rem;
    color: white;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 15px;
    display: inline-block;
    white-space: nowrap;
  }

  @media only screen and (max-width: 1080px) {
    .projectItem__img {
      height: 290px;
    }
  }
`;function ke(e){let{img:t=we,title:i="Project Name",company:r="Company Name",types:a=["Project Type"],skills:n=["Skills"],onClick:o}=e;return Object(m.jsxs)(ve,{children:[Object(m.jsx)("div",{className:"projectItem__img",role:"button",tabIndex:0,onClick:o,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||o()},children:Object(m.jsx)("img",{src:t,alt:"project img"})}),Object(m.jsxs)("div",{className:"projectItem__info",children:[Object(m.jsx)("p",{className:"projectItem__company",children:r}),Object(m.jsx)("h3",{className:"projectItem__title",children:i}),Object(m.jsx)("div",{className:"projectItem__type",children:a.map(((e,t)=>Object(m.jsx)("span",{className:"type__item",children:e},t)))}),Object(m.jsx)("div",{className:"projectItem__skills",children:n.map(((e,t)=>Object(m.jsx)("span",{className:"skill__item",children:e},t)))})]})]})}const Oe=l.b.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    cursor: pointer;
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: black;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.1rem;
    color: white;
  }
  .projectItem__description {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: var(--gray-1);
    margin-top: 1rem;
  }
  .projectItem__skills,
  .projectItem__type {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .projectItem__company {
    font-size: 1.75rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
  }

  .type__item {
    font-size: 1.6rem;
    color: var(--gray-1);
    display: inline-block;
    white-space: nowrap;
  }
  .skill__item {
    font-size: 1.25rem;
    color: white;
    padding: 0.5rem 1rem;
    border: 2px solid white;
    border-radius: 15px;
    display: inline-block;
    white-space: nowrap;
  }

  @media only screen and (max-width: 1080px) {
    .projectItem__img {
      height: 290px;
    }
  }
`;function _e(e){let{img:t=we,title:i="Project Name",types:r=["Project Type"],skills:a=["Skills"],onClick:n}=e;return Object(m.jsxs)(Oe,{children:[Object(m.jsx)("div",{className:"projectItem__img",role:"button",tabIndex:0,onClick:n,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||n()},children:Object(m.jsx)("img",{src:t,alt:"project img"})}),Object(m.jsxs)("div",{className:"projectItem__info",children:[Object(m.jsx)("h3",{className:"projectItem__title",children:i}),Object(m.jsx)("div",{className:"projectItem__type",children:r.map(((e,t)=>Object(m.jsx)("span",{className:"type__item",children:e},t)))}),Object(m.jsx)("div",{className:"projectItem__skills",children:a.map(((e,t)=>Object(m.jsx)("span",{className:"skill__item",children:e},t)))})]})]})}z.a.use([T.a]);const Ie=l.b.div`
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    padding-bottom: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: black;
    z-index: 10;
    margin-right: 5.5rem;
    top: 2rem;
    transform: translate(50%);
    color: white;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1490px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`,Se=l.c`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Ne=l.b.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 2rem;
  opacity: 0;
  animation: ${Se} 1.5s ease forwards;

  h1 {
    justify-content: center;
    align-items: center;
    line-height: 4rem;
    color: white;
  }
  @media only screen and (max-width: 1080px) {
    margin: 8rem 5rem 0;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }
  }
`,Ce=l.b.div`
  display: ${e=>{let{isOpen:t}=e;return t?"block":"none"}};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`,ze=l.b.img`
  width: 350px;
  height: 300px;
  border-radius: 8px;
  margin: 1rem 7.5% 1rem auto;
  @media only screen and (max-width: 768px) {
    width: 250px;
  }
`,Te=l.b.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  max-width: 800px;
  .modal_skills {
    display: flex;
    gap: 0.5rem;
    font-size: 2.1rem;
    color: white;
    margin-top: 1rem;
  }
  .modal_company {
    font-size: 2rem;
  }
  .modal_title {
    font-size: 2.5rem;
    color: white;
  }
  .modal_desc {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: 768px) {
    width: 310px;
    .modal_skills {
      font-size: 1.9rem;
    }
    .modal_company {
      font-size: 1.8rem;
    }
    .modal_title {
      font-size: 2.3rem;
    }
    .modal_desc {
      font-size: 1.5rem;
    }
  }
`,Le=l.b.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
  background-color: black;
`,Pe=l.b.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`,Me=l.b.a`
  padding: 0.5rem 1rem;
  background: var(--deep-dark);
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.5rem;
  &:hover {
    background: white;
    color: var(--deep-dark);
  }
`;function De(){const[e,t]=Object(r.useState)(!1),[i,a]=Object(r.useState)(null),n=e=>{a(e),t(!0)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(Ie,{children:[Object(m.jsxs)(Ne,{children:[Object(m.jsx)("h1",{children:"Commercial Projects"}),Object(m.jsx)("div",{className:"projects__allItems",children:Object(m.jsx)(N.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},1490:{slidesPerView:2},1920:{slidesPerView:3}},children:je.map(((e,t)=>t>=5?null:Object(m.jsx)(C.a,{children:Object(m.jsx)(ke,{title:e.name,img:e.img,company:e.company,types:e.type,skills:e.skills,desc:e.desc,onClick:()=>n(e)})},e.id)))})}),Object(m.jsx)("h1",{children:"Personal Projects"}),Object(m.jsx)("div",{className:"projects__allItems",children:Object(m.jsx)(N.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},1490:{slidesPerView:2},1920:{slidesPerView:3}},children:ye.map(((e,t)=>t>=5?null:Object(m.jsx)(C.a,{children:Object(m.jsx)(_e,{title:e.name,img:e.img,types:e.type,skills:e.skills,desc:e.desc,onClick:()=>n(e)})},e.id)))})})]}),i&&Object(m.jsx)(Ce,{isOpen:e,children:Object(m.jsxs)(Te,{children:[Object(m.jsx)(Le,{onClick:()=>{t(!1),a(null)},children:"X"}),Object(m.jsx)("div",{className:"modal_company",children:i.company}),Object(m.jsx)("div",{className:"modal_title",children:i.name}),Object(m.jsx)(ze,{src:i.img,alt:i.name}),Object(m.jsx)("div",{className:"modal_skills",children:i.skills.join(", ")}),Object(m.jsx)("p",{className:"modal_desc",children:i.desc}),Object(m.jsxs)(Pe,{children:[i.webLink&&Object(m.jsx)(Me,{href:i.webLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Web Live"}),i.githubLink&&Object(m.jsx)(Me,{href:i.githubLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"GitHub"}),i.gameyoutubeLink&&Object(m.jsx)(Me,{href:i.gameyoutubeLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Game Updates"}),i.softwareyoutubeLink&&Object(m.jsx)(Me,{href:i.softwareyoutubeLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Interaction"}),i.downloadLink&&Object(m.jsx)(Me,{href:i.downloadLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Download"}),i.overviewLink&&Object(m.jsx)(Me,{href:i.overviewLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Overview"})]})]})})]}),Object(m.jsx)(k,{})]})}var Be=i(19),Re=i.p+"static/media/hero-2.a49c0cf9.png";const Ae=["Software","FullStack","Games"];const Ue=l.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: var(--gray-deep-dark);
  width: 30rem;
  z-index: 99;
  .hero__info {
    text-align: center;
    font-size: 2rem;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1080px) {
    position: relative;
    left: 25%;
    width: 50%;
  }
`,He=l.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  border: 1px solid white;
  border-radius: 5px;
`,Ee=l.b.div`
  font-size: 2.2rem;
  color: white;
`,Ge=l.b.div`
  display: flex;
  justify-content: center;
  width: 12.5rem;
  margin: 0 auto;
  a {
    color: white;
    font-size: 2.5rem;
    margin: 0 0.5rem;
    transition: 0.3s ease;
    &:hover {
      color: var(--gray-2);
    }
  }
`;function Je(){const[e,t]=Object(r.useState)(0),[i,a]=Object(r.useState)(Ae[e]);return Object(r.useEffect)((()=>{const i=setInterval((()=>{const i=(e+1)%Ae.length;t(i);const r=setInterval((()=>{a(function(e){const t=e.split("");for(let i=t.length-1;i>0;i-=1){const e=Math.floor(Math.random()*(i+1));[t[i],t[e]]=[t[e],t[i]]}return t.join("")}(Ae[i]))}),100);setTimeout((()=>{clearInterval(r),a(Ae[i])}),1500)}),2500);return()=>clearInterval(i)}),[e]),Object(m.jsxs)(Ue,{children:[Object(m.jsx)(He,{children:Object(m.jsx)("img",{src:Re,alt:"hero"})}),Object(m.jsxs)("div",{className:"hero__info",children:[Object(m.jsx)("p",{children:"Name"}),Object(m.jsx)(Ee,{children:"TuanAnh Tran"}),Object(m.jsx)("p",{children:"Role"}),Object(m.jsxs)(Ee,{children:[i," Developer"]}),Object(m.jsx)("p",{children:"Socials"}),Object(m.jsxs)(Ge,{children:[Object(m.jsx)("a",{href:"https://www.linkedin.com/in/anhh-trann/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(Be.c,{})}),Object(m.jsx)("a",{href:"https://sadapple.itch.io/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(Be.b,{})}),Object(m.jsx)("a",{href:"https://github.com/Sir-Apple",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(Be.a,{})}),Object(m.jsx)("a",{href:"https://www.youtube.com/@tuananhtran2944",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(Be.d,{})})]})]})]})}var Fe=i(32);function We(){const{pathname:e}=Object(Fe.useLocation)();return Object(r.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}function Ve(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{basename:"/portfolio",children:[Object(m.jsx)(h,{}),Object(m.jsx)(We,{}),Object(m.jsx)(Je,{}),Object(m.jsxs)(s.Switch,{children:[Object(m.jsx)(s.Route,{path:"/about",children:Object(m.jsx)(le,{})}),Object(m.jsx)(s.Route,{path:"/projects",children:Object(m.jsx)(De,{})}),Object(m.jsx)(s.Route,{path:"/",children:Object(m.jsx)(S,{})})]})]})})}var $e=l.a`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --gray-3: #6e6e6e;
    --white : white;
    --black: black;
    --green: #30fe6c;
    --dark-bg-2: #081215;
    --deep-dark-2: #050d0a;
    --gray-deep-dark: #111111;
  }
  html{
    font-size: 10px;
    font-family: 'Iceland Regular';
    background-color: var(--gray-deep-dark);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--gray-deep-dark);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`,Qe=i.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Ke=i.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",qe=i.p+"static/media/Montserrat-Bold.079ca05d.ttf",Xe=i.p+"static/media/Iceland-Regular.7e45c1c0.ttf",Ye=i.p+"static/media/BigShouldersDisplay-Medium.faa156d4.ttf",Ze=i.p+"static/media/BigShouldersDisplay-Regular.bb81c7d9.ttf";var et=l.a`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${Qe});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${Ke});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${qe});
    font-style: normal;
  }
  @font-face {
    font-family: 'Iceland Regular';
    src: url(${Xe});
    font-style: normal;
  }
  @font-face {
    font-family: 'BigShouldersDisplay Regular';
    src: url(${Ze});
    font-style: normal;
  }
  @font-face {
    font-family: 'BigShouldersDisplay Medium';
    src: url(${Ye});
    font-style: normal;
  }
  html{
    font-family: 'Iceland Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Iceland Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;n.a.render(Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)($e,{}),Object(m.jsx)(et,{}),Object(m.jsx)(Ve,{})]}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.9e9f84fb.chunk.js.map