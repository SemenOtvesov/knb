(()=>{"use strict";var e,t,n,a={152:(e,t,n)=>{var a=n(294),l=n(745),i=n(335),r=n(989);const o=()=>{const e=Math.max(document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth),[t,n]=(0,a.useState)(e||769),l={isMicroMobile:t<=320,isMobile:t<=510,isTab:t>510&&t<821,isLaptop:t>820&&t<1440,isDesktop:t>=1440};return(0,a.useEffect)((()=>{s(n,new Event(""));const e=s.bind(void 0,n);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,a.useEffect)((()=>{l.isMicroMobile=t<=320,l.isMobile=t<=510,l.isTab=t>510&&t<821,l.isLaptop=t>820&&t<1440,l.isDesktop=t>=1440}),[t]),l};function s(e,t){e(Math.max(document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth))}const c=n.p+"64e8e467baaff01af06a.svg",d=n.p+"2b471a5b639f937de761.svg";var m=n(998);const u=m.v9;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}const f=e=>{let{src:t,...n}=e;return a.createElement("div",p({},n,{style:{position:"relative",...n.style}}),a.createElement("img",{style:{position:"absolute",top:"-50%",left:"-50%",transform:"scale(0.5)",width:"200%",height:"200%"},src:t}))},g=()=>{const e=(0,i.TH)(),{Container:t,Avatar:n,Name:l,AvatarBox:s,BalanceBox:m,BalanceText:p,BalanceValue:g,BalanceIcon:v,WalletIcon:h,BalanceIconBox:y}=(()=>{const e=o();return{Container:r.Z.div({height:"10vh",width:"100vw",position:"sticky",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 1em",minHeight:"5em",zIndex:100,color:"#fff"}),Avatar:r.Z.img({width:"13vw",height:"13vw",borderRadius:"50%",backgroundColor:""}),Name:r.Z.div({color:"",fontSize:"1em",fontWeight:700}),AvatarBox:r.Z.div({display:"flex",alignItems:"center",gap:"1em"}),BalanceBox:r.Z.div({display:"flex",alignItems:"center",gap:8}),BalanceText:r.Z.div({fontWeight:600,fontSize:"1.25em"}),BalanceValue:r.Z.div({display:"flex",alignItems:"center",justifyItems:"center",justifyContent:"center",gap:"0.5em"}),BalanceIcon:r.Z.img({width:"2em"}),WalletIcon:r.Z.img({width:"1.565em"}),BalanceIconBox:r.Z.div({position:"relative"}),size:e}})(),b=u((e=>e.userState.user));return e.pathname.includes("game")||e.pathname.includes("reiting")?a.createElement(a.Fragment,null):a.createElement(t,null,a.createElement(s,null,a.createElement(n,{src:`https://t.me/i/userpic/160/${null==b?void 0:b.userInfo.username}.jpg`}),a.createElement(l,null,b?b.userInfo.username:""),a.createElement(f,{style:{width:"1.565em",height:"1.565em"},src:d})),a.createElement(m,null,a.createElement(p,null,(null==b?void 0:b.userInfo.wins)||0),a.createElement(g,null,b?b.coins:"",a.createElement(y,null,a.createElement(v,{alt:"",src:c})))))};var v=n(655);const h=(0,a.memo)((()=>{const{Container:e,Item:t,ItemText:n,Icon:l}=(()=>{const e=o();return{Container:r.Z.div({position:"sticky",bottom:"1vh",left:"0",margin:"0 5vw",height:"14em",maxHeight:"14em",width:"90vw",minHeight:"5em",display:"flex",justifyContent:"space-between",padding:"1em 2em",borderRadius:20,backgroundColor:"","-webkit-tap-highlight-color":"transparent",color:"#fff"}),Item:(0,r.Z)(v.OL)({display:"flex",flexDirection:"column","&.active":{div:{color:"#FF378D"}}}),ItemText:r.Z.div({fontSize:"1em",fontWeight:600,textAlign:"center",color:"#fff"}),Icon:r.Z.div({fontSize:"3.5em",color:"#fff"}),size:e}})();return a.createElement(e,null,a.createElement(t,{to:"/"},a.createElement(l,{className:"icon-game icon"}),a.createElement(n,null,"Игра")),a.createElement(t,{to:"/raiting"},a.createElement(l,{className:"icon-rait icon"}),a.createElement(n,null,"Рейтинг")))}),(()=>!0)),y="http://localhost:3000",b="http://t.me/spor_game_bot/spors?startapp=";var E=n(168);const w=(0,E.oM)({name:"allertState",initialState:{allert:""},reducers:{setAllert:(e,t)=>{let{payload:n}=t;e.allert=n}}}),{setAllert:x}=w.actions,I=w,B=()=>{const e=u((e=>e.allertState.allert));return a.createElement("div",{id:"allertCopy",className:"copyAllert",style:{borderRadius:20,padding:"5px 15px",color:"#fff",backgroundColor:"#969696",position:"fixed",top:"90vh",left:"50%",minWidth:"15em",width:"fit-content",maxWidth:"90vw",textAlign:"center",whiteSpace:"nowrap",transform:"translate(-50%, -50%)",opacity:0,pointerEvents:"none",transition:"0.3s",zIndex:1e3}},e)};const C=()=>((0,a.useEffect)((()=>{const e=setInterval((()=>{window.Telegram.WebApp.expand();S()?document.documentElement.style.setProperty("--ios-padding","110px"):document.documentElement.style.setProperty("--ios-padding","0px")}),500);return()=>{clearInterval(e)}}),[]),a.createElement(a.Fragment,null));function S(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}const Z=()=>(0,m.I0)(),R=()=>{const e=(0,i.s0)(),t=(0,i.TH)();return(0,a.useEffect)((()=>{"/"==t.pathname?window.Telegram.WebApp.BackButton.hide():(window.Telegram.WebApp.BackButton.show(),window.Telegram.WebApp.BackButton.onClick((()=>{e("/")})))}),[t.pathname]),a.createElement(a.Fragment,null)},T=(0,a.createContext)({}),k=()=>{const e=(0,i.TH)(),t=(Z(),e.pathname.includes("admin"));return a.createElement(T.Provider,{value:"val"},!t&&a.createElement(g,null),!t&&a.createElement(B,null),a.createElement(R,null),a.createElement(C,null),a.createElement("div",{style:e.pathname.includes("admin")?{}:{pointerEvents:"none"}},a.createElement(i.j3,null)),!t&&a.createElement(h,null))},W={avatarGray:"#"},j=()=>W,O=(0,E.oM)({name:"userState",initialState:{user:null,token:"",game:null,gameType:null},reducers:{setUser:(e,t)=>{let{payload:n}=t;e.user=n},setGame:(e,t)=>{let{payload:n}=t;e.game=n},setGameType:(e,t)=>{let{payload:n}=t;e.gameType=n}}}),{setUser:F,setGame:A,setGameType:D}=O.actions,P=O;var z=n(861);const L=()=>{const e=Z(),t=(0,i.s0)(),{Container:n,Preview:l,ButtinBox:s,ButtonOne:d,Loader:m}=(()=>{const e=o(),{}=j();return S(),{Container:r.Z.div({position:"sticky",top:"10vh",left:"0",height:"calc(90vh - (5em + 1vh))",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",gap:"3vh",color:"#fff",padding:"3em 1em"}),Preview:r.Z.div({fontFamily:"Game Of Squids",fontSize:"2.5em",lineHeight:"1.25em",width:"100%"}),ButtinBox:r.Z.div({fontFamily:"Game Of Squids",display:"flex",flexDirection:"column",gap:"1em",width:" 100%"}),ButtonOne:r.Z.button({backgroundColor:"#000",color:"#fff",fontSize:"1.25em",width:"100%",borderRadius:20,padding:"1rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5em",pointerEvents:"all"}),Loader:r.Z.div({position:"fixed",top:"50%",left:"50%",width:"50vw",transform:"translate(-50%, -50%)",backgroundColor:"#00000080",padding:"2em",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"1em",borderRadius:20}),size:e}})(),p=u((e=>e.userState.gameType));return a.createElement(n,{className:"scrollbar_hidden"},a.createElement(l,null,"Камень",a.createElement("br",null),"Ножницы",a.createElement("br",null),"Бумага"),a.createElement(s,null,a.createElement(d,{onClick:()=>{(async(e,t)=>{e(D("pending"));const n=window.Telegram.WebApp,a=await z.Z.get(y+"/rps/startgame",{headers:{initdata:`${n.initData}`}}).then((t=>(e(D(null)),t))).catch((t=>(e(D(null)),t))),l=+new Date(a.data.gameId.Start);l-+new Date<0?(t("/game"),e(A(a.data))):setTimeout((()=>{t("/game"),e(A(a.data))}),l-+new Date),a.data})(e,t)},style:{fontSize:"2.5em"}},"Играть"),a.createElement(d,{onClick:()=>{!function(e){const t=window.Telegram.WebApp.initDataUnsafe.user.id;navigator.clipboard.writeText(`${b}${t}`),function(e,t){const n=document.getElementById("allertCopy"),a=window.Telegram.WebApp.initDataUnsafe.user.id;navigator.clipboard.writeText(`${b}${a}`),null==n||n.classList.add("active"),e(x(t)),setTimeout((()=>{null==n||n.classList.remove("active"),e(x(""))}),1500)}(e,"Ссылка была скопирована!")}(e)}},"Пригласи друга ",a.createElement("div",{style:{fontWeight:600,fontFamily:"SFPro"}},"+50"),a.createElement(f,{style:{width:"2em",height:"2em"},src:c}))),"pending"==p&&a.createElement(m,null,a.createElement("div",{className:"loader"}),a.createElement("div",{className:""},"Ожидание игрока...")))};const N=()=>{Z();const{Container:e,Title:t,TextBox:n,Text:l,TextPlug:i,Raiting:s,RaitingItem:d,RaitingItemLeft:m,RaitingItemAvatar:u,RaitingItemText:p,RaitingItemRight:f,RaitingItemCount:g,BalanceIcon:v}=(()=>{const e=o(),{}=j();return S(),{Container:r.Z.div({position:"sticky",top:"10vh",left:"0",height:"calc(90vh - (5em + 1vh))",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",gap:"3vh",color:"#fff",padding:"3em 1em"}),Title:r.Z.div({fontFamily:"Game Of Squids",fontSize:"1.5em",width:"100%"}),TextBox:r.Z.div({display:"flex",gap:"0.5em",padding:"0.5em",backgroundColor:"#D9D9D94D",borderRadius:30,width:"100%",justifyContent:"space-between",alignItems:"center"}),Text:r.Z.div({}),TextPlug:r.Z.div({backgroundColor:"#FF378D",borderRadius:20,padding:"0.25em"}),Raiting:r.Z.div({width:"100%"}),RaitingItem:r.Z.div({display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}),RaitingItemLeft:r.Z.div({display:"flex",alignItems:"center",gap:"0.5em"}),RaitingItemAvatar:r.Z.img({width:"2em",height:"2em",borderRadius:"50%",backgroundColor:""}),RaitingItemText:r.Z.div({fontWeight:600}),RaitingItemRight:r.Z.div({display:"flex",alignItems:"center",gap:"0.25em"}),RaitingItemCount:r.Z.div({fontWeight:600}),BalanceIcon:r.Z.img({width:"2em"}),size:e}})();return a.createElement(e,{className:"scrollbar_hidden"},a.createElement(t,null,"Рейтинг побед"),a.createElement(n,null,a.createElement(l,null,"Каждый день лидер рейтинга получает"),a.createElement(i,null,"100$")),a.createElement(s,null,a.createElement(d,null,a.createElement(m,null,a.createElement(u,{src:"https://t.me/i/userpic/160/paultonnn.jpg"}),a.createElement(p,null,"Mike")),a.createElement(f,null,a.createElement(g,null,"151"),a.createElement(v,{alt:"",src:c})))))},M=()=>{const e=o(),{}=j();S();return{Container:r.Z.div({position:"sticky",top:"5vh",left:"0",height:"calc(90vh - 1em)",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",gap:"3vh",color:"#fff",padding:"2em 1em"}),Avatar:r.Z.img({width:"13vw",height:"13vw",borderRadius:"50%",backgroundColor:""}),BalanceIcon:r.Z.img({width:"2em"}),Top:r.Z.div({display:"flex",flexDirection:"column",gap:"1em",alignItems:"center",justifyContent:"center"}),PlayerName:r.Z.div({fontSize:"1.15em"}),Counter:r.Z.div({backgroundColor:"#FF378D",width:"4em",height:"4em",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",div:{width:"2em",height:"2em",borderRadius:"50%",backgroundColor:"#FC82B7",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5em",fontWeight:600}}),Rewards:r.Z.div({display:"flex",alignItems:"center",gap:"0.5em",fontSize:"1.15em"}),Bottom:r.Z.div({display:"flex",justifyContent:"space-between",width:"100%",position:"relative"}),BottomButton:r.Z.img({pointerEvents:"all",borderRadius:"50%"}),BottonButtonBox:r.Z.div({pointerEvents:"all",transition:"0.3s",position:"relative","&:nth-child(2)":{transform:"translate(0,-50%)"},"&.hidden":{transform:"translate(0,200%)"}}),BottomButtonShadow:r.Z.div({zIndex:1,pointerEvents:"all",position:"absolute",width:"90%",height:"90%",top:"50%",left:"50%",transform:"translate(-50%, -50%)",borderRadius:"50%",transition:"0.3s",":hover":{boxShadow:"0 0 10px 5px #FFFFFF"},"&.active":{boxShadow:"0 0 10px 5px #FFFFFF"},"&.activeRed":{boxShadow:"0 0 10px 5px #FF0000B2"},"&.activeGreen":{boxShadow:"0 0 10px 5px #00FF15B2"}}),Opponent:r.Z.div({transition:"0.3s",display:"flex",justifyContent:"center",width:"100%",position:"absolute",top:"0",left:0,transform:" translate(0, -100%) rotate(-180deg)","&.visable":{transform:" translate(0, 32vh) rotate(-180deg)"}}),RewardTextBox:r.Z.div({position:"absolute",top:"75%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"0.5em",opacity:0,pointerEvents:"none",transition:"0.3s","&.active":{opacity:1}}),RewardText:r.Z.div({fontFamily:"Game Of Squids"}),RewardValue:r.Z.div({display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5em",fontWeight:600}),size:e}},_=n.p+"d6ecf30350a287c155de.png",$=n.p+"823b82a336b034843a1b.png",G=n.p+"4a115e6dbbb9236a45f0.png",q=async(e,t,n)=>{const a=window.Telegram.WebApp,l=await z.Z.post(`http://localhost:3000/rps/makemove/${t}`,{move:n},{headers:{initdata:`${a.initData}`}}),i=+new Date(l.data.Result.End);return i-+new Date<0?e(A({gameId:l.data.Result})):setTimeout((()=>{e(A({gameId:l.data.Result}))}),i-+new Date),l.data};let U=5;const H=e=>{let{game:t}=e;const[n,l]=(0,a.useState)(U),{Counter:r}=((0,i.s0)(),M());return(0,a.useEffect)((()=>{const e=setInterval((()=>{n<1?clearInterval(e):l((e=>e<1?0:e-1))}),1e3)}),[]),(0,a.useEffect)((()=>{U=n})),(0,a.useEffect)((()=>{if(t&&t.gameId.Winner){let e=5;const t=setInterval((()=>{e<1?(clearInterval(t),U=5):e-=1}),1e3)}}),[t]),a.createElement(r,null,a.createElement("div",null,n))};let V=!0;const K={rock:_,paper:G,scissors:$},Y=()=>{const e=Z(),{Container:t,Top:n,PlayerName:l,Avatar:i,Rewards:r,BalanceIcon:o,Bottom:s,BottomButton:d,BottonButtonBox:m,BottomButtonShadow:p,Opponent:f,RewardTextBox:g,RewardText:v,RewardValue:h}=M(),{game:y,user:b}=u((e=>e.userState)),E=(0,a.useRef)(null),w=(0,a.useRef)(null),x=(0,a.useRef)(null),I=(0,a.useRef)(null),[B,C]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(y&&y.gameId.Winner){document.querySelectorAll("[data-butbox]").forEach(((e,t)=>{if(0!=t&&2!=t||e.classList.add("hidden"),1==t){var n;const t=y.gameId.Player1Id==(null==b?void 0:b.userInfo.id)?1:2;var a,l;if(null==e||null===(n=e.querySelector("img"))||void 0===n||n.setAttribute("src",K[y.gameId[`Move${t}`]]),(null==b?void 0:b.userInfo.id)!=y.gameId.Winner)null===(a=e.querySelector("div"))||void 0===a||a.classList.add("activeRed");else null===(l=e.querySelector("div"))||void 0===l||l.classList.add("activeGreen")}}))}}),[y]),(0,a.useEffect)((()=>{var e,t,n,a,l,i;"rock"==B&&(null===(e=E.current)||void 0===e||e.classList.add("active"),null===(t=E.current)||void 0===t||t.setAttribute("style","transition: 0s"));"paper"==B&&(null===(n=w.current)||void 0===n||n.classList.add("active"),null===(a=w.current)||void 0===a||a.setAttribute("style","transition: 0s"));"scissors"==B&&(null===(l=x.current)||void 0===l||l.classList.add("active"),null===(i=x.current)||void 0===i||i.setAttribute("style","transition: 0s"));if(y&&y.gameId.Winner){var r,o,s;y.gameId.Player1Id,null==b||b.userInfo.id;var c,d;if((null==b?void 0:b.userInfo.id)==y.gameId.Winner)null===(c=I.current)||void 0===c||c.classList.add("activeRed");else null===(d=I.current)||void 0===d||d.classList.add("activeGreen");null===(r=I.current)||void 0===r||null===(o=r.closest("[data-opponent]"))||void 0===o||o.classList.add("visable"),null===(s=document.getElementById("reward"))||void 0===s||s.classList.add("active")}})),a.createElement(t,{className:"scrollbar_hidden"},a.createElement(f,{"data-opponent":!0},a.createElement(m,{className:"butBox"},a.createElement(d,{src:y&&b?K[y.gameId["Move"+(y.gameId.Player1Id!=b.userInfo.id?1:2)]]:""}),a.createElement(p,{ref:I,className:"shadow"}))),a.createElement(n,null,a.createElement(l,null,null==y?void 0:y.gameId.Player2UserName),a.createElement(i,{src:"https://t.me/i/userpic/160/paultonnn.jpg"}),a.createElement(r,null,"300"," ",a.createElement(o,{style:{fontSize:"0.75em"},alt:"",src:c})),a.createElement(H,{game:y})),a.createElement(s,null,a.createElement(m,{"data-butbox":!0,className:"butBox",onClick:t=>{y&&q(e,y.gameId.id,"rock"),V&&(V=!1,C("rock"))}},a.createElement(d,{src:_}),a.createElement(p,{ref:E,className:"shadow"})),a.createElement(m,{"data-butbox":!0,className:"butBox",onClick:t=>{y&&q(e,y.gameId.id,"scissors"),V&&(V=!1,C("scissors"))}},a.createElement(d,{src:$}),a.createElement(p,{ref:x,className:"shadow"})),a.createElement(m,{"data-butbox":!0,className:"butBox",onClick:t=>{y&&q(e,y.gameId.id,"paper"),V&&(V=!1,C("paper"))}},a.createElement(d,{src:G}),a.createElement(p,{ref:w,className:"shadow"})),a.createElement(g,{id:"reward"},a.createElement(v,null,(null==b?void 0:b.userInfo.id)==(null==y?void 0:y.gameId.Winner)?"Победа!":"Проигрыш..."),a.createElement(h,null,(null==b?void 0:b.userInfo.id)==(null==y?void 0:y.gameId.Winner)?"+1":"+0",a.createElement(o,{style:{fontSize:"0.75em"},alt:"",src:c})))))},J=()=>{const e=Z();return(0,a.useEffect)((()=>{(async e=>{const t=window.Telegram.WebApp,n=await z.Z.post(y+"/rps/adduser",{},{headers:{initdata:`${t.initData}`}});e(F(n.data)),n.data})(e);const t=localStorage.getItem("lastReload"),n=Math.floor((new Date).getTime()/1e3);(null==t||+t+2<n)&&(localStorage.setItem("lastReload",`${n}`),location.reload())}),[]),a.createElement(i.Z5,null,a.createElement(i.AW,{path:"/",element:a.createElement(k,null)},a.createElement(i.AW,{index:!0,element:a.createElement(L,null)}),a.createElement(i.AW,{path:"raiting",element:a.createElement(N,null)}),a.createElement(i.AW,{path:"game",element:a.createElement(Y,null)})))};const Q=(0,n(791).UY)({[P.name]:P.reducer,[I.name]:I.reducer}),X=(0,E.xC)({reducer:Q});var ee=n(155);const te=document.querySelector("#wrap");(0,l.s)(te).render(a.createElement(v.VK,{basemname:`/${ee.env.PUBLIC_URL}`},a.createElement(m.zt,{store:X},a.createElement(J,null))))}},l={};function i(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return a[e](n,n.exports,i),n.exports}i.m=a,e=[],i.O=(t,n,a,l)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],l=e[d][2];for(var o=!0,s=0;s<n.length;s++)(!1&l||r>=l)&&Object.keys(i.O).every((e=>i.O[e](n[s])))?n.splice(s--,1):(o=!1,l<r&&(r=l));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,a,l]},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var l=Object.create(null);i.r(l);var r={};t=t||[null,n({}),n([]),n(n)];for(var o=2&a&&e;"object"==typeof o&&!~t.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,i.d(l,r),l},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,r=n[0],o=n[1],s=n[2],c=0;if(r.some((t=>0!==e[t]))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(s)var d=s(i)}for(t&&t(n);c<r.length;c++)l=r[c],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(d)},n=self.webpackChunkwebpack_to_study=self.webpackChunkwebpack_to_study||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[819],(()=>i(152)));r=i.O(r)})();