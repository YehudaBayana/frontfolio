(this.webpackJsonpfrontfolio=this.webpackJsonpfrontfolio||[]).push([[0],{33:function(n,e,t){},46:function(n,e,t){},49:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var i,a=t(1),c=t.n(a),r=t(20),o=t.n(r),l=(t(33),t(46),t(28)),s=t(3),d=t(4),b=d.b.button(i||(i=Object(s.a)(["\n  padding: 10px 45px;\n  border: none;\n  border-radius: 50px;\n  font-size: 18px;\n  margin: ",";\n  background-color: ",";\n  transition: opacity 0.3s, transform 0.3s;\n  color: ",";\n  cursor: pointer;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transform: scale(0.9);\n  }\n  @media (max-width: 845px) {\n    font-size: 15px;\n    padding: 5px 25px;\n  }\n"])),(function(n){return n.margin}),(function(n){return n.background}),(function(n){return n.color})),x=(t(49),t(10)),p=t(0);var j,h,m,f,g,u,O,w,y,k,v,N,C,z,S,L,P,E,T,B,I,R,H,q,A,M,G,F=function(){function n(){document.getElementById("fullNav").style.height="0%"}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{id:"fullNav",className:"overlay",children:[Object(p.jsx)("span",{className:"closebtn",onClick:function(){return n()},children:"\xd7"}),Object(p.jsxs)("div",{className:"overlay-content",children:[Object(p.jsx)("a",{href:"https://tech-career-alternative.firebaseapp.com/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("img",{src:"/frontfolio/images/tech-career-logo.png",width:"200px",alt:""})}),Object(p.jsx)("a",{href:"https://mail.google.com/mail/u/0/#all?compose=VpCqJWHtMZtRzqgPsvKBNVsHctcxQXrXnKCcLZBwgXCTnhwJLWFtxglXHWkqmfGtmmXxHNb",target:"_blank",rel:"noreferrer",children:Object(p.jsx)(b,{background:"#4D774E",color:"white",margin:"30px 0",children:"bayanayuda@gmail.com"})}),Object(p.jsx)(x.b,{to:"/home",onClick:function(){return n()},children:"HOME"}),Object(p.jsx)(x.b,{to:"/skills",onClick:function(){return n()},children:"SKILLS"}),Object(p.jsx)(x.b,{to:"/portfolio",onClick:function(){return n()},children:"PORTFOLIO"}),Object(p.jsx)(x.b,{to:"/contact",onClick:function(){return n()},children:"CONTACT"})]})]}),Object(p.jsx)("span",{style:{fontSize:"30px",cursor:"pointer",color:"#f1b24a"},onClick:function(){document.getElementById("fullNav").style.height="100%"},children:"\u2630"})]})},J=d.b.div(j||(j=Object(s.a)(["\n  background-color: #164a41;\n  margin-left: 200px;\n  @media (max-width: 700px) {\n    margin-left: 0;\n  }\n"]))),X=d.b.nav(h||(h=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 0 50px;\n  max-width: 1330px;\n  margin: 0 auto;\n  @media (max-width: 700px) {\n    padding: 10px 25px;\n  }\n  @media (max-width: 845px) {\n    font-size: 15px;\n  }\n"]))),W=d.b.img(m||(m=Object(s.a)(["\n  width: 100%;\n"]))),Y=d.b.div(f||(f=Object(s.a)(["\n  width: 150px;\n  @media (max-width: 700px) {\n    width: 100px;\n  }\n  @media (max-width: 845px) {\n    width: 100px;\n  }\n"]))),_=function(){var n=Object(a.useState)(window.innerWidth),e=Object(l.a)(n,2),t=e[0],i=e[1],c=function(){i(window.innerWidth)};return Object(a.useEffect)((function(){console.log("hello"),window.addEventListener("resize",c)}),[]),Object(p.jsx)(J,{children:Object(p.jsxs)(X,{children:[Object(p.jsx)(Y,{children:Object(p.jsx)("a",{href:"https://tech-career-alternative.firebaseapp.com/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)(W,{src:"/frontfolio/images/tech-career-logo.png"})})}),t>460?Object(p.jsx)("a",{href:"https://mail.google.com/mail/u/0/#all?compose=VpCqJWHtMZtRzqgPsvKBNVsHctcxQXrXnKCcLZBwgXCTnhwJLWFtxglXHWkqmfGtmmXxHNb",target:"_blank",rel:"noreferrer",children:Object(p.jsx)(b,{color:"bedge",children:"bayanayuda@gmail.com"})}):Object(p.jsx)(F,{})]})})},V=d.b.div(g||(g=Object(s.a)(["\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #164a41;\n  position: fixed;\n  height: 100%;\n  bottom: 0;\n  overflow: auto;\n  @media (max-width: 700px) {\n    display: none;\n  }\n  & a:nth-child(1) {\n    margin-top: 120px;\n  }\n  & a {\n    display: block;\n    color: white;\n    padding: 16px;\n    text-decoration: none;\n    &:hover:not(.active) {\n      background-color: #4d774e;\n      color: white;\n    }\n    &.active {\n      background-color: #f1b24a;\n      color: black;\n    }\n  }\n"]))),D=function(){var n=Object(a.useState)("."),e=Object(l.a)(n,2),t=e[0],i=e[1],c=document.location.href.indexOf("/home")>-1?"active":"",r=document.location.href.indexOf("/skills")>-1?"active":"",o=document.location.href.indexOf("/portfolio")>-1?"active":"",s=document.location.href.indexOf("/contact")>-1?"active":"";function d(){i((function(n){return"."===n?",":"."}))}return Object(a.useEffect)((function(){d()}),[]),Object(p.jsxs)(V,{children:[Object(p.jsx)(x.b,{onClick:d,className:c,to:"/home",children:"Home"}),Object(p.jsx)(x.b,{onClick:d,className:r,to:"/skills",children:"Skills"}),Object(p.jsx)(x.b,{onClick:d,className:o,to:"/portfolio",children:"Portfolio"}),Object(p.jsx)(x.b,{onClick:d,className:s,to:"/contact",children:"Contact"}),t]})},K=d.b.div(u||(u=Object(s.a)(["\n  padding: 20px 0;\n  margin-left: 200px;\n  background-color: #164a41;\n  color: white;\n  margin-bottom: 0;\n  @media (max-width: 700px) {\n    margin-left: 0;\n  }\n"]))),Z=d.b.div(O||(O=Object(s.a)(["\n  text-align: center;\n  padding-bottom: 15px;\n  & > a {\n    font-size: 18px;\n    width: 40px;\n    height: 40px;\n    line-height: 40px;\n    display: inline-block;\n    text-align: center;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    margin: 0 8px;\n    color: inherit;\n    opacity: 0.75;\n    &:hover {\n      opacity: 0.9;\n    }\n  }\n"]))),Q=d.b.ul(w||(w=Object(s.a)(["\n  padding: 0;\n  list-style: none;\n  text-align: center;\n  font-size: 15px;\n  line-height: 1.6;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  & a {\n    color: inherit;\n    text-decoration: none;\n    opacity: 0.8;\n    &:hover {\n      opacity: 1;\n    }\n  }\n  @media (max-width: 430px) {\n    flex-flow: column wrap;\n  }\n"]))),U=d.b.li(y||(y=Object(s.a)(["\n  padding: 0 10px;\n"]))),$=d.b.p(k||(k=Object(s.a)(["\n  margin-top: 7px;\n  text-align: center;\n  font-size: 13px;\n  color: #dbdb45;\n  margin-bottom: 0;\n"]))),nn=function(){return Object(p.jsx)(K,{children:Object(p.jsxs)("footer",{children:[Object(p.jsxs)(Z,{children:[Object(p.jsx)("a",{href:"https://www.linkedin.com/in/yehuda-bayana",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("i",{className:"icon ion-social-linkedin"})}),Object(p.jsx)("a",{href:"https://github.com/YehudaBayana/frontfolio.git",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("i",{className:"icon ion-social-github"})}),Object(p.jsx)("a",{href:"https://twitter.com/Yehudabayana2",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("i",{className:"icon ion-social-twitter"})})]}),Object(p.jsxs)(Q,{children:[Object(p.jsx)(U,{children:Object(p.jsx)(x.b,{to:"/home",children:"Home"})}),Object(p.jsx)(U,{children:Object(p.jsx)(x.b,{to:"/skills",children:"Skills"})}),Object(p.jsx)(U,{children:Object(p.jsx)(x.b,{to:"/portfolio",children:"Portfolio"})}),Object(p.jsx)(U,{children:Object(p.jsx)(x.b,{to:"/contact",children:"Contact"})})]}),Object(p.jsx)($,{children:"Yuda Bayana \xa9 2021"})]})})},en=function(n){var e=n.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(_,{}),e,Object(p.jsx)(D,{}),Object(p.jsx)(nn,{})]})},tn=t(6),an=d.b.div(v||(v=Object(s.a)(["\n  width: calc(100%-200px);\n  margin-left: 200px;\n  height: 70vh;\n  background-image: url(/frontfolio/images/barca-landscape.jpg);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  &::before {\n    position: absolute;\n    content: '';\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    right: 0;\n    top: 0;\n    opacity: 0.6;\n  }\n  & p {\n    max-width: 600px;\n    margin: 10px auto;\n    font-size: 18px;\n    z-index: 1;\n    color: white;\n    text-align: center;\n  }\n  & h1 {\n    color: white;\n    z-index: 1;\n    margin-bottom: 20px;\n    margin-top: 148px;\n  }\n  & h3 {\n    color: #f1b24a;\n    font-weight: 700;\n    z-index: 1;\n  }\n  @media (max-width: 700px) {\n    margin-left: 0;\n    padding: 10px;\n    text-align: center;\n    p {\n      font-size: 15px;\n    }\n    h1 {\n      font-size: 27px;\n      margin-top: 80px;\n    }\n  }\n"]))),cn=d.b.div(N||(N=Object(s.a)(["\n  margin-left: 200px;\n  @media (max-width: 700px) {\n    margin-left: 0;\n    padding: 20px;\n  }\n  @media (max-width: 1155px) {\n    padding: 20px;\n  }\n"]))),rn=d.b.div(C||(C=Object(s.a)(["\n  max-width: 900px;\n  margin: 20px auto;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  align-items: center;\n  box-shadow: 1px 1px 5px lightgray;\n  padding: 20px;\n  background-color: #f1b24a;\n  color: white;\n  text-align: left;\n  & p {\n    width: 50%;\n    margin: 0 auto;\n    font-size: 17px;\n    color: black;\n  }\n  @media (max-width: 700px) {\n    flex-flow: column wrap;\n    p {\n      width: 100%;\n      font-size: 15px;\n      margin: 19px 0;\n    }\n  }\n"]))),on=d.b.div(z||(z=Object(s.a)(["\n  width: 300px;\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]))),ln=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(an,{children:[Object(p.jsx)("h1",{children:"yuda bayana presents"}),Object(p.jsx)("h3",{children:"web developer"}),Object(p.jsx)("p",{children:"Has experience in professional positions that required the ability to work independently and in a team, the ability to self-study and multiple investment. Has a high work ethic, a high sense of service and interpersonal communication."})]}),Object(p.jsxs)(cn,{children:[Object(p.jsxs)(rn,{children:[Object(p.jsx)(on,{children:Object(p.jsx)("img",{src:"/frontfolio/images/point-up.jpg",alt:"",width:"100%"})}),Object(p.jsx)("p",{children:"Here I am giving a lesson to my classmates about react hooks, in this particular picture I tetched about useRef hook. useRef is basically a hook that alow you to access to every single element in........to be continued.... it was fun to give that lesson and be able to teach someone new stuff"})]}),Object(p.jsxs)(rn,{children:[Object(p.jsx)("p",{children:"Here it's a picture of the National Service graduation certificate controversy. I did national service at the National Road Safety Authority, a kind of Knesset for the Road Guards Center. The job of the service members, to be in touch with the volunteers, to analyze the information, a kind of operational cyber."}),Object(p.jsx)(on,{children:Object(p.jsx)("img",{src:"/frontfolio/images/end-service.jpg",alt:"",width:"100%"})})]}),Object(p.jsxs)(rn,{children:[Object(p.jsx)(on,{children:Object(p.jsx)("img",{src:"/frontfolio/images/barzik.jpg",alt:"",width:"100%"})}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sequi unde iure impedit omnis reiciendis maxime, architecto quibusdam aperiam obcaecati est animi rerum deserunt! Voluptatibus expedita recusandae praesentium laborum, eum qui facere ipsa?"})]})]})]})},sn=d.b.div(S||(S=Object(s.a)(["\n  margin-left: 200px;\n  display: flex;\n  @media (max-width: 700px) {\n    margin-left: 0;\n    flex-direction: column;\n  }\n"]))),dn=d.b.div(L||(L=Object(s.a)(["\n  padding: 130px 30px;\n  flex: 1;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  & h2 {\n    color: gray;\n    margin-bottom: 25px;\n    text-align: center;\n  }\n  & h4 {\n    color: #164a41;\n    text-align: center;\n  }\n  & ul {\n    margin-left: 50px;\n    color: #6c757d;\n  }\n  @media (max-width: 700px) {\n    padding: 50px 20px;\n    h2 {\n      margin: 0 auto;\n      margin-bottom: 25px;\n    }\n  }\n"]))),bn=d.b.div(P||(P=Object(s.a)(["\n  padding: 30px;\n  flex: 1;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: flex-start;\n  position: relative;\n  &::before {\n    position: absolute;\n    content: '';\n    width: 10px;\n    height: 240px;\n    left: -30px;\n    top: 20%;\n    background-color: #f1b24a;\n  }\n  & h2 {\n    color: gray;\n    margin-bottom: 25px;\n    text-align: center;\n  }\n  & h4 {\n    color: #164a41;\n    text-align: center;\n  }\n  & ul {\n    margin-left: 50px;\n    color: #6c757d;\n  }\n  & span {\n    font-size: 40px;\n    color: #f1b24a;\n  }\n  @media (max-width: 700px) {\n    padding: 50px 20px;\n    &::before {\n      position: absolute;\n      content: '';\n      height: 10px;\n      width: 240px;\n      left: 19%;\n      top: 0;\n      background-color: #f1b24a;\n    }\n    h2 {\n      margin: 0 auto;\n      margin-bottom: 25px;\n    }\n  }\n"]))),xn=d.b.h2(E||(E=Object(s.a)(["\n  margin: 50px 0;\n  width: calc(100%-200px);\n  margin-left: 200px;\n  letter-spacing: 1.4rem;\n  font-weight: 800;\n  position: relative;\n  text-align: center;\n  &::before {\n    position: absolute;\n    content: '';\n    width: 100px;\n    height: 10px;\n    left: 47%;\n    top: 92px;\n    background-color: #f1b24a;\n  }\n  @media (max-width: 700px) {\n    margin-left: 0;\n    font-size: 24px;\n    letter-spacing: 1.2rem;\n    &::before {\n      height: 7px;\n      left: 37%;\n      top: 62px;\n    }\n  }\n"]))),pn=d.b.div(T||(T=Object(s.a)(["\n  @media (max-width: 700px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n  & i {\n    font-size: 50px;\n    color: #f1b24a;\n    margin: 20px 10px;\n  }\n"]))),jn=d.b.div(B||(B=Object(s.a)(["\n  margin-left: 200px;\n  text-align: left;\n  padding: 50px;\n  display: flex;\n  @media (max-width: 700px) {\n    margin-left: 0;\n    flex-direction: column-reverse;\n    padding: 10px;\n  }\n  & p {\n    padding: 10px;\n  }\n  h1 {\n    padding: 10px;\n    color: #6c757d;\n  }\n"]))),hn=d.b.div(I||(I=Object(s.a)(["\n  width: 50%;\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]))),mn=d.b.div(R||(R=Object(s.a)(["\n  width: 50%;\n  p {\n    max-width: 500px;\n  }\n  @media (max-width: 700px) {\n    width: 100%;\n  }\n"]))),fn=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(xn,{children:"MY SKILLS"}),Object(p.jsxs)(sn,{children:[Object(p.jsxs)(dn,{children:[Object(p.jsx)("h2",{children:"frontend skills"}),Object(p.jsx)("h4",{children:"CLIENT SIDE PROGRAMMING LANGUAGES"}),Object(p.jsxs)(pn,{children:[Object(p.jsx)("i",{className:"fab fa-react"}),Object(p.jsx)("i",{className:"fab fa-js-square"}),Object(p.jsx)("i",{className:"fab fa-html5"}),Object(p.jsx)("i",{className:"fab fa-css3-alt"}),Object(p.jsx)("i",{className:"fab fa-bootstrap"})]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"HTML"}),Object(p.jsx)("li",{children:"CSS"}),Object(p.jsx)("li",{children:"BOOTSTRAP"}),Object(p.jsx)("li",{children:"JAVASCRIPT"}),Object(p.jsx)("li",{children:"TYPESCRIPT"}),Object(p.jsx)("li",{children:"REACT"})]})]}),Object(p.jsxs)(bn,{children:[Object(p.jsx)("h2",{children:"backend skills"}),Object(p.jsx)("h4",{children:"SERVER SIDE PROGRAMMING LANGUAGES"}),Object(p.jsxs)(pn,{children:[Object(p.jsx)("i",{className:"fab fa-node"}),Object(p.jsx)("span",{children:"C"}),Object(p.jsx)("i",{className:"fas fa-hashtag"}),Object(p.jsx)("span",{children:Object(p.jsx)("strong",{children:".NET"})}),Object(p.jsx)("i",{className:"fas fa-database"})]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"NODE-JS"}),Object(p.jsx)("li",{children:"C#"}),Object(p.jsx)("li",{children:".NET ASP MVC"}),Object(p.jsx)("li",{children:"MONGODB"}),Object(p.jsx)("li",{children:"MYSQL"})]})]})]}),Object(p.jsxs)(jn,{children:[Object(p.jsxs)(mn,{children:[Object(p.jsx)("h1",{children:"my other skills"}),Object(p.jsx)("p",{children:"High responsibility, ability to self-learn, creativity, ability to work in a team. Has work ethic and versatile abilities, ability to analyze information and great patience for routine work."}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sed odit velit eligendi laboriosam rerum at, quam, quisquam saepe vitae fuga itaque?"})]}),Object(p.jsx)(hn,{children:Object(p.jsx)("img",{src:"/frontfolio/images/Prepares-survive.jpg",alt:"",width:"100%"})})]})]})},gn=t(76),un=t(84),On=t(78),wn=t(82),yn=t(80),kn=t(79),vn=t(83),Nn=t(81),Cn=[{title:"order app",imgPath:"/frontfolio/images/order-app-image.png",info:"Online Shopping at Bayanas for the best cell phones, electronics & more products. Promotions on clothing, electronics, sports and more. Check out all the deals. Download App. Join Online. Safe Payment.",link:"https://yehudabayana.github.io/my-order/#/",codeLink:"https://github.com/YehudaBayana/my-order.git"},{title:"challenge app",imgPath:"/frontfolio/images/challenge-app-image.png",info:"this app just build for the challenge and for practice, I took the challenge from frontendmentor.io. I just tried to improve and show off my UI skills",link:"https://yehudabayana.github.io/challenge-web/",codeLink:"https://github.com/YehudaBayana/challenge-web.git"},{title:"S.T.F.T.B",imgPath:"/frontfolio/images/login-app-image.png",info:"This project isn't done yet because I am planning to incorporate backend and database and we haven't learned that yet, anyway this project about to be with users that can listen to music and some users can get premium version of the app.",link:"https://yehudabayana.github.io/app-with-login/",codeLink:"https://github.com/YehudaBayana/app-with-login.git"}],zn=Object(gn.a)({root:{maxWidth:345},media:{height:160}});function Sn(){var n=zn();return Object(p.jsx)(p.Fragment,{children:Cn.map((function(e){return Object(p.jsxs)(un.a,{style:{marginBottom:"50px"},className:n.root,children:[Object(p.jsxs)(On.a,{children:[Object(p.jsx)(kn.a,{className:n.media,image:e.imgPath,title:"Contemplative Reptile"}),Object(p.jsxs)(yn.a,{children:[Object(p.jsx)(Nn.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(p.jsx)(Nn.a,{variant:"body2",color:"textSecondary",component:"p",children:e.info})]})]}),Object(p.jsxs)(wn.a,{children:[Object(p.jsx)(vn.a,{size:"large",color:"primary",children:Object(p.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:[" ","open app"]})}),Object(p.jsx)(vn.a,{size:"large",color:"primary",children:Object(p.jsx)("a",{href:e.codeLink,target:"_blank",rel:"noreferrer",children:"Source code"})})]})]})}))})}var Ln,Pn,En,Tn,Bn,In,Rn,Hn,qn,An,Mn,Gn,Fn=d.b.div(H||(H=Object(s.a)(["\n  margin-left: 200px;\n  padding: 20px 50px;\n  @media (max-width: 700px) {\n    margin-left: 0;\n    padding: 10px 0px;\n  }\n"]))),Jn=d.b.div(q||(q=Object(s.a)(["\n  max-width: 1330px;\n  margin: 0 auto;\n"]))),Xn=d.b.div(A||(A=Object(s.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),Wn=d.b.p(M||(M=Object(s.a)(["\n  text-align: center;\n  max-width: 600px;\n  margin: 50px auto;\n  padding: 0 10px;\n"]))),Yn=d.b.h2(G||(G=Object(s.a)(["\n  margin: 30px 0;\n  text-align: center;\n"]))),_n=function(){return Object(p.jsx)(Fn,{children:Object(p.jsxs)(Jn,{children:[Object(p.jsx)(Yn,{children:"Portfolio"}),Object(p.jsx)(Wn,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat repellendus cupiditate dignissimos repudiandae inventore!"}),Object(p.jsx)(Xn,{children:Object(p.jsx)(Sn,{})})]})})},Vn=d.b.div(Ln||(Ln=Object(s.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  padding: 55px;\n  @media (max-width: 1000px) {\n    grid-template-columns: 1fr;\n    padding: 0px;\n  }\n"]))),Dn=d.b.input(Pn||(Pn=Object(s.a)(["\n  padding: 10px;\n  margin: 10px 0;\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid gray;\n  &:focus {\n    outline: none;\n  }\n  ","\n"])),(function(n){return n.half?Object(d.a)(En||(En=Object(s.a)(["\n          width: 49%;\n        "]))):null})),Kn=d.b.form(Tn||(Tn=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 45px 15px;\n  background-color: white;\n"]))),Zn=d.b.h2(Bn||(Bn=Object(s.a)(["\n  width: 100%;\n"]))),Qn=d.b.textarea(In||(In=Object(s.a)(["\n  width: 100%;\n  height: 150px;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid gray;\n  font-size: 20px;\n  margin: 10px 0;\n  &:focus {\n    outline: none;\n  }\n"]))),Un=d.b.div(Rn||(Rn=Object(s.a)(["\n  background-color: #f1b24a;\n  color: black;\n  padding: 45px 23px;\n"]))),$n=d.b.div(Hn||(Hn=Object(s.a)(["\n  width: 49%;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0;\n"]))),ne=d.b.button(qn||(qn=Object(s.a)(["\n  border: none;\n  border-radius: 6px;\n  padding: 7px 35px;\n  font-size: 16px;\n  font-weight: 800;\n  background-color: #f1b24a;\n  color: black;\n  box-shadow: 1px 1px 15px lightgray;\n  transition: all 0.3s;\n  cursor: pointer;\n  &:hover {\n    opacity: 0.7;\n  }\n  ","\n"])),(function(n){return n.pink?Object(d.a)(An||(An=Object(s.a)(["\n          background-color: hsl(322, 100%, 66%);\n          color: white;\n          font-size: 13px;\n          padding: 14px 65px;\n        "]))):null})),ee=d.b.p(Mn||(Mn=Object(s.a)(["\n  margin: 10px 0;\n  margin-bottom: 50px;\n  line-height: 1.7rem;\n"]))),te=d.b.span(Gn||(Gn=Object(s.a)(["\n  font-size: 18px;\n  display: inline-block;\n  text-align: left;\n  margin-top: 10px;\n  @media (max-width: 700px) {\n    font-size: 16px;\n  }\n"]))),ie=function(){return Object(p.jsx)(Fn,{style:{backgroundColor:"#f1f1f1"},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(Vn,{children:[Object(p.jsxs)(Un,{children:[Object(p.jsx)("h2",{children:"get in touch"}),Object(p.jsx)(ee,{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis."}),Object(p.jsxs)(te,{children:[Object(p.jsx)("i",{className:"fas fa-map-marker-alt"}),"Beit-Shemes/Jerusalem"]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te,{children:[Object(p.jsx)("i",{className:"fas fa-phone-square-alt"}),"054-345-3426"]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te,{children:[Object(p.jsx)("i",{className:"fas fa-paper-plane"}),"example@example.com"]}),Object(p.jsx)("br",{}),Object(p.jsxs)(te,{children:[Object(p.jsx)("i",{className:"fas fa-globe-americas"}),"yudaBayana.com"]})]}),Object(p.jsxs)(Kn,{action:"https://formsubmit.co/324c7560ffd4fbb04171fd59b7bec95b",method:"POST",children:[Object(p.jsx)(Zn,{children:"Contact me"}),Object(p.jsxs)($n,{children:[Object(p.jsx)("label",{children:"first name"}),Object(p.jsx)(Dn,{type:"text",name:"firstName",placeholder:"first name"})]}),Object(p.jsxs)($n,{children:[Object(p.jsx)("label",{children:"last name"}),Object(p.jsx)(Dn,{type:"text",name:"lastName",placeholder:"last name"})]}),Object(p.jsx)("label",{children:"email"}),Object(p.jsx)(Dn,{type:"email",name:"email",placeholder:"example@example.com"}),Object(p.jsx)("label",{children:"leave a message"}),Object(p.jsx)(Qn,{name:"message",placeholder:"message"}),Object(p.jsx)("button",{children:Object(p.jsx)(ne,{type:"submit",children:"send "})})]})]})})})},ae=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(tn.d,{children:[Object(p.jsx)(tn.b,{path:"/home",children:Object(p.jsx)(ln,{})}),Object(p.jsx)(tn.b,{path:"/skills",children:Object(p.jsx)(fn,{})}),Object(p.jsx)(tn.b,{path:"/portfolio",children:Object(p.jsx)(_n,{})}),Object(p.jsx)(tn.b,{path:"/contact",children:Object(p.jsx)(ie,{})}),Object(p.jsx)(tn.a,{to:"/home"})]})})};function ce(){var n=Object(tn.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var re=function(){return Object(p.jsxs)(x.a,{children:[Object(p.jsx)(ce,{}),Object(p.jsx)(en,{children:Object(p.jsx)(ae,{})})]})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(re,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8139c396.chunk.js.map