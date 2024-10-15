(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{51:function(e,t,i){"use strict";i.r(t);var r=i(2),n=i(28),a=i.n(n),o=i(33),s=i(8),c=i(13),l=i(5),d=i(19),m=i(1);const p=l.b.div`
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
`;function j(e){let{children:t}=e;return Object(m.jsx)(g,{children:Object(m.jsx)("p",{children:t})})}const u=l.b.div`
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
`;function x(e){let{btnText:t,outline:i=!1,onClick:r=null}=e;return Object(m.jsx)(u,{outline:i,children:Object(m.jsx)(c.Link,{className:"button",onClick:r,children:t})})}var f=i.p+"static/media/hero-home.369e8d56.png";const y=l.b.div`
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
  .footer__col2 {
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
`;function k(){return Object(m.jsxs)(v,{children:[Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"footer__col1",children:[Object(m.jsx)("h1",{className:"footer__col1__title",children:"TuanAnh Tran"}),Object(m.jsx)(j,{children:"Software Developer | FullStack Developer | Games Developer"})]}),Object(m.jsx)("div",{className:"footer__col2",children:Object(m.jsx)(w,{heading:"Email",links:[{title:"tranquangtuananh2801@gmail.com",path:"mailto:tranquangtuananh2801@gmail.com"}]})})]}),Object(m.jsx)("div",{className:"copyright",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(j,{children:"\xa9 2024 TuanAnh Tran"})})})]})}const O=l.b.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 10rem;
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
`,_=l.b.div`
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
`;function I(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(O,{children:[Object(m.jsx)("h1",{children:"TuanAnh Tran Portfolio"}),Object(m.jsx)(_,{children:Object(m.jsx)("img",{src:f,alt:"hero"})}),Object(m.jsxs)(j,{children:["Welcome to my portfolio! ",Object(m.jsx)("br",{})," My name is TuanAnh (or can just call me Andrew). I am a passionate software developer with hands-on experience and deep expertise in software, website and game development, driven by a love for building and creating innovative solutions. I am committed to leveraging my skills in application development while continually refining my craft to deliver efficient, reliable, and secure software solutions."]}),Object(m.jsx)(x,{btnText:"My Resume",onClick:()=>{window.open(b,"_blank")}})]}),Object(m.jsx)(k,{})]})}var S=i(55),N=i(53),z=i(54),C=i(52);var T=[{id:1,position:"Software Developer (Part-time)",timestamp:"July 2023 - Present",org:"Advance Studio",location:"Brisbane, Queensland, Australia",desc:["Currently contributing remotely to a small studio, collaborating with a senior software engineer and international artists and designers (from Vietnam, Japan and Canada) on the mobile and desktop game Battle of Lords: Advance Chess.","Responsible for implementing complex chess movements and animations using advanced <b> Unity/C# </b> programming techniques fora seamless user experience.","Actively involved in design discussions and problem-solving sessions to enhance the chess gaming interface and contribute to the projects overall progress."]},{id:2,position:"Software Developer",timestamp:"April 2023 - October 2023",org:"Beyond Studio",location:"Hanoi, Vietnam (Remote)",desc:['Developed animations and features like coin tossing, card movements, and spawning for the <a href="https://www.youtube.com/watch?v=WTUkFY_wgHg" target="_blank"> Epoch2140 </a>\u2019s sport-style Trading Card game and created the game\u2019s <a href="https://www.youtube.com/watch?v=UkzMu5wFNSg" target="_blank"> Interactive Booth </a> with <b> Unity/C# </b>. Therefore, developed the <a href="https://epoch2140.com/" target="_blank"> Epoch 2140\u2019s landing page </a>  using <b> HTML/CSS </b> and <b> JavaScript </b>.','Developed RPG-style elements like a third-person controller, Ready Player Me for character selection, and a Pokemon-inspired horse-catching system using <b> Unity/C# </b> for the <a href="https://www.metahorseunity.io/#gameplay-1" target="_blank"> MetaHorse </a>s horse racing game.']},{id:3,position:"Software Developer (Internship)",timestamp:"September 2021 - March 2022",org:"Premier Ducts Pty Ltd",location:"Brisbane, Queensland, Australia",desc:["Designed and implemented the front-end and user experience for an internal application utilised by duct workers in the workshop.","Created application features, including creating new stations using <b>Unity Engine</b>, <b>C#</b>, and also <b>Xamarin</b>."]},{id:4,position:"Software Developer (Internship)",timestamp:"November 2017 - January 2018",org:"ACB - Asia Commercial Bank",location:"Ho Chi Minh City, Vietnam",desc:["Developed a small service system (customer paying bills process) with <b> Python</b>."]}];const L=l.b.div`
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
    font-size: 2.2rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    text-align: center;
  }
  .experienceItem__timestamp {
    font-size: 2.1rem;
    color: var(--gray-1);
    margin-bottom: 1rem;
    text-align: center;
  }
`;function P(e){let{company:t="Company Name",position:i="Position Title",timestamp:r="Timestamp",descr:n=["Description"]}=e;return Object(m.jsx)(L,{children:Object(m.jsxs)("div",{className:"experienceItem__info",children:[Object(m.jsx)("p",{className:"experienceItem__timestamp",children:r}),Object(m.jsx)("p",{className:"experienceItem__company",children:t}),Object(m.jsx)("h3",{className:"experienceItem__title",children:i}),Object(m.jsx)("div",{className:"experienceItem__description",children:n.map(((e,t)=>{return Object(m.jsx)("div",{className:"experience__item",children:(i=e,i.split(/(<b>.*?<\/b>|<a.*?<\/a>)/).map(((e,t)=>{if(e.startsWith("<b>")&&e.endsWith("</b>"))return Object(m.jsx)("strong",{children:e.replace(/<\/?b>/g,"")},t);if(e.startsWith("<a")&&e.endsWith("</a>")){const i=e.match(/href="(.*?)"/),r=e.match(/>(.*?)<\/a>/),n=e.match(/style="(.*?)"/),a=e.includes('target="_blank"')?"_blank":"_self";return Object(m.jsx)("a",{href:i?i[1]:"#",target:a,rel:"noopener noreferrer",style:{textDecoration:"underline",...n&&{color:n[1]}},children:Object(m.jsx)("strong",{children:r?r[1]:"link"})},t)}return e})))},t);var i}))})]})})}i(27);z.a.use([C.a]);const M=l.b.div`
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
`;function D(){return Object(m.jsx)(M,{children:Object(m.jsx)("div",{className:"projects__allItems",children:Object(m.jsx)(S.a,{spaceBetween:30,slidesPerView:1,navigation:!0,children:T.map(((e,t)=>{if(!(t>=5))return Object(m.jsx)(N.a,{children:Object(m.jsx)(P,{position:e.position,timestamp:e.timestamp,company:e.org,descr:e.desc})},e.id)}))})})})}const B=l.b.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  border: 1px solid white;
  border-radius: 8px;
  .title {
    font-size: 2.4rem;
    padding-bottom: 1rem;
    margin-left: 1rem;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 0 auto 3rem 2rem;
  }
  .item {
    background-color: black;
    padding: 5px;
    border: 1px solid white;
    border-radius: 8px;
    font-size: 2rem;
  }
  @media only screen and (max-width: 992px) {
    .items {
      margin-top: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
  }
`;function R(e){let{title:t="This is title",items:i=["HTML"]}=e;return Object(m.jsxs)(B,{children:[Object(m.jsx)("h1",{className:"title",children:t}),Object(m.jsx)("div",{className:"items",children:i.map(((e,t)=>Object(m.jsx)("div",{className:"item",children:Object(m.jsx)("p",{children:e})},t)))})]})}const A=l.b.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 10rem;
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
`;function E(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(A,{children:[Object(m.jsx)("h1",{children:"Experiences"}),Object(m.jsx)(D,{}),Object(m.jsx)("h1",{children:"Education"}),Object(m.jsx)("h3",{children:"Queensland University of Technology"}),Object(m.jsx)("h2",{children:"Bachelor of Information Technology & Games and Interactive Environments (2022)"}),Object(m.jsx)("h1",{children:"Skills"}),Object(m.jsx)(R,{title:"Languages and Programming Languages",items:["C#","JavaScript","TypeScript","HTML","CSS","C++","PHP","Python","Java"]}),Object(m.jsx)(R,{title:"Database Management Systems / Document",items:["MySQL","MongoDB","Microsoft SQL Server","PostgreSQL","NoSQL","SQLite"]}),Object(m.jsx)(R,{title:"Libraries and Tools",items:["ReactJS","TailwindCSS","NodeJS","ASP.NET Core","Xamarin","NextJS","Unity","Unreal Engine","WordPress"]})]}),Object(m.jsx)(k,{})]})}var H=i(56),U=i.p+"static/media/codinginthepark.f57fcc19.png",J=i.p+"static/media/epoch.e00695ea.png",G=i.p+"static/media/oldgovarsim.90421ed1.png",W=i.p+"static/media/gogah.420d33be.jpg",F=i.p+"static/media/advancechess.09efb779.PNG";var V=[{id:Object(H.a)(),name:"Coding in the Park",company:"Queensland University of Technology",type:["Web"],skills:["HTML","CSS","JavaScript","PHP","MySQL"],desc:"A website of an education based internal project that focuses on S.T.E.M.(Science, Technology, Engineering and Mathematic), which gives people an altered learning experience using physical activities to catalyse learning. ",img:U,githubLink:"https://github.com/Sir-Apple/CodingInThePark"},{id:Object(H.a)(),name:"Epoch 2140",company:"Epoch",type:["Web","Game","Interactive"],skills:["HTML","CSS","JavaScript","Unity","C#"],desc:"Epoch2140 is a sport-style trading card game where players recruit, strategize, and lead their teams to victory, built with Unity and C#. (Currently in development). The landing page, made with HTML, CSS, and JavaScript, provides game details, while the 3D interactive page, also built with Unity and C#, showcases teams and cards.",img:J,webLink:"https://epoch2140.com/",gameyoutubeLink:"https://www.youtube.com/watch?v=WTUkFY_wgHg",softwareyoutubeLink:"https://www.youtube.com/watch?v=UkzMu5wFNSg"},{id:Object(H.a)(),name:"OGH AR Simulator",company:"Wicked Interactive StoryTelling",type:["Interactive"],skills:["Unity","C#"],desc:"This project is a tour-based experience and simulator application that places the player/user in a position in order to explore the QUT Old Government House in old-timer when it was in active use where the old Queensland Governors were still working and staying at which will be showing on their phone with the app installed. This interaction is made with Unity and C#.",img:G,githubLink:"https://github.com/ybott/IFB398-Prototype",downloadLink:"https://sadapple.itch.io/old-government-house-ar-simulator"},{id:Object(H.a)(),name:"Greater Powers of Gods and Heroes",company:"Darkstar Games",type:["Game"],skills:["Unity","C#"],desc:"In the game greater powers you, the player, will be able to lead a mighty army based on your high powered heavily armed magical skyship, and engage in massive fleet actions with not only epic ship to ship combat, but full real time boarding actions involving hundreds of enemies and allies battling all at once. The game is made with Unity and C#. (Currently in development) ",img:W,overviewLink:"https://darkstargames.net/greaterpowers/"},{id:Object(H.a)(),name:"Battle of Lords: Advance Chess",company:"Advance Studio",type:["Game"],skills:["Unity","C#"],desc:"This is a multi-player board game where each chess piece has its own special moves and abilities which is different from the traditional chess game. This game is made with Unity and C#. (Currently in development) ",img:F}],Q=i.p+"static/media/movieapp.5edc69f1.PNG",$=i.p+"static/media/oldportfolio.fda3e371.PNG",K=i.p+"static/media/thehauntedbg.1766a5ed.jpg";var q=[{id:Object(H.a)(),name:"Movie Trackr",type:["Web"],skills:["ReactJS","HTML","CSS","JavaScript"],desc:"This Movie Trackr App is made with ReactJS with the purpose of searching for movies and their details fetched from TMDB. The user will be able to search for the movie they like then save to their watchlist or watchedlist.",img:Q,webLink:"https://sir-apple.github.io/MovieTrackr/",githubLink:"https://github.com/Sir-Apple/MovieTrackr"},{id:Object(H.a)(),name:"Personal Portfolio (Old Version)",type:["Web"],skills:["HTML","CSS","JavaScript"],desc:"My previous version of my portfolio, made with HTML, CSS, and JavaScript",img:$,webLink:"https://sir-apple-github-io.vercel.app/",githubLink:"https://github.com/Sir-Apple/Sir-Apple.github.io"},{id:Object(H.a)(),name:"The Haunted",type:["Interactive"],skills:["Unity","C#"],desc:"The Haunted is a short First-person horror and escape-room game. The game begins when the player is stuck inside a completely dark and blacked-out haunted house, the only light sources are candles and the head-mounted flashlight that the character bought with him. The player then is required to unlock doors and puzzles in order to escape from the haunted house as well as run away from the ghost, which interrupts the player.",img:K,downloadLink:"https://sadapple.itch.io/the-haunted"}],Y=i.p+"static/media/projectImg.771236e1.png";const X=l.b.div`
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
`;function Z(e){let{img:t=Y,title:i="Project Name",company:r="Company Name",types:n=["Project Type"],skills:a=["Skills"],onClick:o}=e;return Object(m.jsxs)(X,{children:[Object(m.jsx)("div",{className:"projectItem__img",role:"button",tabIndex:0,onClick:o,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||o()},children:Object(m.jsx)("img",{src:t,alt:"project img"})}),Object(m.jsxs)("div",{className:"projectItem__info",children:[Object(m.jsx)("p",{className:"projectItem__company",children:r}),Object(m.jsx)("h3",{className:"projectItem__title",children:i}),Object(m.jsx)("div",{className:"projectItem__type",children:n.map(((e,t)=>Object(m.jsx)("span",{className:"type__item",children:e},t)))}),Object(m.jsx)("div",{className:"projectItem__skills",children:a.map(((e,t)=>Object(m.jsx)("span",{className:"skill__item",children:e},t)))})]})]})}const ee=l.b.div`
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
`;function te(e){let{img:t=Y,title:i="Project Name",types:r=["Project Type"],skills:n=["Skills"],onClick:a}=e;return Object(m.jsxs)(ee,{children:[Object(m.jsx)("div",{className:"projectItem__img",role:"button",tabIndex:0,onClick:a,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||a()},children:Object(m.jsx)("img",{src:t,alt:"project img"})}),Object(m.jsxs)("div",{className:"projectItem__info",children:[Object(m.jsx)("h3",{className:"projectItem__title",children:i}),Object(m.jsx)("div",{className:"projectItem__type",children:r.map(((e,t)=>Object(m.jsx)("span",{className:"type__item",children:e},t)))}),Object(m.jsx)("div",{className:"projectItem__skills",children:n.map(((e,t)=>Object(m.jsx)("span",{className:"skill__item",children:e},t)))})]})]})}z.a.use([C.a]);const ie=l.b.div`
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
`,re=l.b.div`
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  line-height: 2.1rem;
  margin: 15rem 40rem 0;
  padding-bottom: 2rem;
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
`,ne=l.b.div`
  display: ${e=>{let{isOpen:t}=e;return t?"block":"none"}};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
`,ae=l.b.img`
  width: 350px;
  height: 300px;
  border-radius: 8px;
  margin: 1rem 7.5% 1rem auto;
  @media only screen and (max-width: 768px) {
    width: 250px;
  }
`,oe=l.b.div`
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
`,se=l.b.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 2.5rem;
  cursor: pointer;
  background-color: black;
`,ce=l.b.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`,le=l.b.a`
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
`;function de(){const[e,t]=Object(r.useState)(!1),[i,n]=Object(r.useState)(null),a=e=>{n(e),t(!0)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(ie,{children:[Object(m.jsxs)(re,{children:[Object(m.jsx)("h1",{children:"Commercial Projects"}),Object(m.jsx)("div",{className:"projects__allItems",children:Object(m.jsx)(S.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},1490:{slidesPerView:2},1920:{slidesPerView:3}},children:V.map(((e,t)=>t>=5?null:Object(m.jsx)(N.a,{children:Object(m.jsx)(Z,{title:e.name,img:e.img,company:e.company,types:e.type,skills:e.skills,desc:e.desc,onClick:()=>a(e)})},e.id)))})}),Object(m.jsx)("h1",{children:"Personal Projects"}),Object(m.jsx)("div",{className:"projects__allItems",children:Object(m.jsx)(S.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},1490:{slidesPerView:2},1920:{slidesPerView:3}},children:q.map(((e,t)=>t>=5?null:Object(m.jsx)(N.a,{children:Object(m.jsx)(te,{title:e.name,img:e.img,types:e.type,skills:e.skills,desc:e.desc,onClick:()=>a(e)})},e.id)))})})]}),i&&Object(m.jsx)(ne,{isOpen:e,children:Object(m.jsxs)(oe,{children:[Object(m.jsx)(se,{onClick:()=>{t(!1),n(null)},children:Object(m.jsx)(d.a,{})}),Object(m.jsx)("div",{className:"modal_company",children:i.company}),Object(m.jsx)("div",{className:"modal_title",children:i.name}),Object(m.jsx)(ae,{src:i.img,alt:i.name}),Object(m.jsx)("div",{className:"modal_skills",children:i.skills.join(", ")}),Object(m.jsx)("p",{className:"modal_desc",children:i.desc}),Object(m.jsxs)(ce,{children:[i.webLink&&Object(m.jsx)(le,{href:i.webLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Web Live"}),i.githubLink&&Object(m.jsx)(le,{href:i.githubLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"GitHub"}),i.gameyoutubeLink&&Object(m.jsx)(le,{href:i.gameyoutubeLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Game Demo"}),i.softwareyoutubeLink&&Object(m.jsx)(le,{href:i.softwareyoutubeLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Interactive Demo"}),i.downloadLink&&Object(m.jsx)(le,{href:i.downloadLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Download"}),i.overviewLink&&Object(m.jsx)(le,{href:i.overviewLink,target:"_blank",rel:"noopener noreferrer",className:"button",children:"Overview"})]})]})})]}),Object(m.jsx)(k,{})]})}var me=i(20),pe=i.p+"static/media/hero-2.a49c0cf9.png";const he=["Software","FullStack","Games"];const be=l.b.div`
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
`,ge=l.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  border: 1px solid white;
  border-radius: 5px;
`,je=l.b.div`
  font-size: 2.2rem;
  color: white;
`,ue=l.b.div`
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
`;function xe(){const[e,t]=Object(r.useState)(0),[i,n]=Object(r.useState)(he[e]);return Object(r.useEffect)((()=>{const i=setInterval((()=>{const i=(e+1)%he.length;t(i);const r=setInterval((()=>{n(function(e){const t=e.split("");for(let i=t.length-1;i>0;i-=1){const e=Math.floor(Math.random()*(i+1));[t[i],t[e]]=[t[e],t[i]]}return t.join("")}(he[i]))}),100);setTimeout((()=>{clearInterval(r),n(he[i])}),1500)}),2500);return()=>clearInterval(i)}),[e]),Object(m.jsxs)(be,{children:[Object(m.jsx)(ge,{children:Object(m.jsx)("img",{src:pe,alt:"hero"})}),Object(m.jsxs)("div",{className:"hero__info",children:[Object(m.jsx)("p",{children:"Name"}),Object(m.jsx)(je,{children:"TuanAnh Tran"}),Object(m.jsx)("p",{children:"Role"}),Object(m.jsxs)(je,{children:[i," Developer"]}),Object(m.jsx)("p",{children:"Socials"}),Object(m.jsxs)(ue,{children:[Object(m.jsx)("a",{href:"https://www.linkedin.com/in/anhh-trann/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(me.c,{})}),Object(m.jsx)("a",{href:"https://sadapple.itch.io/",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(me.b,{})}),Object(m.jsx)("a",{href:"https://github.com/Sir-Apple",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(me.a,{})}),Object(m.jsx)("a",{href:"https://www.youtube.com/@tuananhtran2944",target:"_blank",rel:"noopener noreferrer",children:Object(m.jsx)(me.d,{})})]})]})]})}var fe=i(32);function ye(){const{pathname:e}=Object(fe.useLocation)();return Object(r.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null}function we(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{basename:"/portfolio",children:[Object(m.jsx)(h,{}),Object(m.jsx)(ye,{}),Object(m.jsx)(xe,{}),Object(m.jsxs)(s.Switch,{children:[Object(m.jsx)(s.Route,{path:"/about",children:Object(m.jsx)(E,{})}),Object(m.jsx)(s.Route,{path:"/projects",children:Object(m.jsx)(de,{})}),Object(m.jsx)(s.Route,{path:"/",children:Object(m.jsx)(I,{})})]})]})})}var ve=l.a`
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
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`,ke=i.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Oe=i.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",_e=i.p+"static/media/Montserrat-Bold.079ca05d.ttf",Ie=i.p+"static/media/Iceland-Regular.7e45c1c0.ttf",Se=i.p+"static/media/BigShouldersDisplay-Medium.faa156d4.ttf",Ne=i.p+"static/media/BigShouldersDisplay-Regular.bb81c7d9.ttf";var ze=l.a`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${ke});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${Oe});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${_e});
    font-style: normal;
  }
  @font-face {
    font-family: 'Iceland Regular';
    src: url(${Ie});
    font-style: normal;
  }
  @font-face {
    font-family: 'BigShouldersDisplay Regular';
    src: url(${Ne});
    font-style: normal;
  }
  @font-face {
    font-family: 'BigShouldersDisplay Medium';
    src: url(${Se});
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
`;a.a.render(Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(ve,{}),Object(m.jsx)(ze,{}),Object(m.jsx)(we,{})]}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.927c9649.chunk.js.map