(()=>{var e,t,n,a={780:(e,t,n)=>{"use strict";var a=n(294),l=n(745),i=n(335),r=n(989);const o=()=>{const e=Math.max(document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth),[t,n]=(0,a.useState)(e||769),l={isMicroMobile:t<=320,isMobile:t<=510,isTab:t>510&&t<821,isLaptop:t>820&&t<1440,isDesktop:t>=1440};return(0,a.useEffect)((()=>{s(n,new Event(""));const e=s.bind(void 0,n);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,a.useEffect)((()=>{l.isMicroMobile=t<=320,l.isMobile=t<=510,l.isTab=t>510&&t<821,l.isLaptop=t>820&&t<1440,l.isDesktop=t>=1440}),[t]),l};function s(e,t){e(Math.max(document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth))}const c=n.p+"24d6fcf65acd7b8b1726.png",d=n.p+"2b471a5b639f937de761.svg";var m=n(998);const u=m.v9,f=n.p+"f84f07fe3f57c67794f3.png";function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}const p=e=>{let{src:t,...n}=e;return a.createElement("div",g({},n,{style:{position:"relative",...n.style}}),a.createElement("img",{style:{position:"absolute",top:"-50%",left:"-50%",transform:"scale(0.5)",width:"200%",height:"200%"},src:t}))};var v=n(992);const h="https://tondurak.online",b="http://t.me/spor_game_bot/spors?startapp=";var w=n(168);const y=(0,w.oM)({name:"userState",initialState:{user:null,token:"",game:null,gameType:null,requestGame:!1},reducers:{setUser:(e,t)=>{let{payload:n}=t;e.user=n},setGame:(e,t)=>{var n;let{payload:a}=t;e.game={gameId:{...null===(n=e.game)||void 0===n?void 0:n.gameId,...null==a?void 0:a.gameId}}},setWallet:(e,t)=>{let{payload:n}=t;e.user&&(e.user.userInfo.wallet=n)},setGameType:(e,t)=>{let{payload:n}=t;e.gameType=n},setRequestGame:(e,t)=>{let{payload:n}=t;e.requestGame=n}}}),{setUser:E,setGame:x,setGameType:I,setRequestGame:B,setWallet:W}=y.actions,S=y;var k=n(861);const C=()=>(0,m.I0)(),Z=(0,a.memo)((()=>{const e=C(),t=(0,i.TH)(),[n,l]=(0,v.dG)(),s=(0,v.MW)(),{Container:m,Avatar:g,Name:b,AvatarBox:w,BalanceBox:y,BalanceText:E,BalanceValue:x,BalanceIcon:I,WalletIcon:S,BalanceIconBox:Z}=(()=>{const e=o();return{Container:r.Z.div({height:"10vh",width:"100vw",position:"sticky",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 1em",minHeight:"5em",zIndex:100,color:"#fff"}),Avatar:r.Z.img({maxWidth:"13vw",maxHeight:"13vw",minWidth:"12vw",minHeight:"12vw",borderRadius:"50%",backgroundColor:"",background:"url('/img/icon/baseAvatar.png') 0 0/100% 100% no-repeat"}),Name:r.Z.div({color:"",fontSize:"1em",fontWeight:700}),AvatarBox:r.Z.div({display:"flex",alignItems:"center",gap:"1em"}),BalanceBox:r.Z.div({display:"flex",alignItems:"center",gap:8}),BalanceText:r.Z.div({fontWeight:600,fontSize:"1.25em"}),BalanceValue:r.Z.div({display:"flex",alignItems:"center",justifyItems:"center",justifyContent:"center",gap:"0.5em"}),BalanceIcon:r.Z.img({width:"2em"}),WalletIcon:r.Z.img({width:"1.565em"}),BalanceIconBox:r.Z.div({position:"relative"}),size:e}})(),R=u((e=>e.userState.user));if((0,a.useEffect)((()=>{""==(null==R?void 0:R.userInfo.wallet)&&s&&(async(e,t)=>{e(B(!0));const n=window.Telegram.WebApp;await k.Z.post(h+"/rps/addwallet",{wallet:t},{headers:{initdata:`${n.initData}`}}).then((t=>{t.data.includes("sucsess")&&e(W("sucsess"))}))})(e,s)}),[R,s]),t.pathname.includes("game")||t.pathname.includes("raiting"))return a.createElement(a.Fragment,null);let T=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth);return a.createElement(m,null,a.createElement(w,null,a.createElement(g,{onLoad:e=>{e.target.width<.13*T&&(e.target.src=f)},onError:e=>{e.target.width<.13*T&&(e.target.src=f)},src:`https://t.me/i/userpic/160/${null==R?void 0:R.userInfo.username}.jpg`}),a.createElement(b,null,R?R.userInfo.username:""),a.createElement(p,{onClick:()=>""==s&&n.openModal().then((e=>{console.log(e)})),style:{width:"1.565em",height:"1.565em"},src:d})),a.createElement(y,null,a.createElement(E,null,(null==R?void 0:R.userInfo.wins)||0),a.createElement(x,null,R?R.coins:"",a.createElement(Z,null,a.createElement(I,{alt:"",src:c})))))}),(()=>!0));var R=n(655);const T=(0,a.memo)((()=>{const{Container:e,Item:t,ItemText:n,Icon:l}=(()=>{const e=o();return{Container:r.Z.div({position:"sticky",bottom:"1vh",left:"0",margin:"0 5vw",height:"6em",maxHeight:"6em",width:"90vw",minHeight:"6em",display:"flex",justifyContent:"space-between",padding:"1em 2em",borderRadius:20,backgroundColor:"","-webkit-tap-highlight-color":"transparent",color:"#fff"}),Item:(0,r.Z)(R.OL)({display:"flex",flexDirection:"column","&.active":{div:{color:"#FF378D"}}}),ItemText:r.Z.div({fontSize:"1em",fontWeight:600,textAlign:"center",color:"#fff"}),Icon:r.Z.div({fontSize:"3.5em",color:"#fff"}),size:e}})();return a.createElement(e,null,a.createElement(t,{to:"/"},a.createElement(l,{className:"icon-game icon"}),a.createElement(n,null,"Игра")),a.createElement(t,{to:"/raiting"},a.createElement(l,{className:"icon-rait icon"}),a.createElement(n,null,"Рейтинг")))}),(()=>!0)),j=(0,w.oM)({name:"allertState",initialState:{allert:""},reducers:{setAllert:(e,t)=>{let{payload:n}=t;e.allert=n}}}),{setAllert:O}=j.actions,A=j,F=()=>{const e=u((e=>e.allertState.allert));return a.createElement("div",{id:"allertCopy",className:"copyAllert",style:{borderRadius:20,padding:"5px 15px",color:"#fff",backgroundColor:"#969696",position:"fixed",top:"90vh",left:"50%",minWidth:"15em",width:"fit-content",maxWidth:"90vw",textAlign:"center",whiteSpace:"nowrap",transform:"translate(-50%, -50%)",opacity:0,pointerEvents:"none",transition:"0.3s",zIndex:1e3}},e)};const D=()=>((0,a.useEffect)((()=>{const e=setInterval((()=>{window.Telegram.WebApp.expand();N()?document.documentElement.style.setProperty("--ios-padding","110px"):document.documentElement.style.setProperty("--ios-padding","0px")}),500);return()=>{clearInterval(e)}}),[]),a.createElement(a.Fragment,null));function N(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}const P=()=>{const e=(0,i.s0)(),t=(0,i.TH)();return(0,a.useEffect)((()=>{"/"==t.pathname?window.Telegram.WebApp.BackButton.hide():(window.Telegram.WebApp.BackButton.show(),window.Telegram.WebApp.BackButton.onClick((()=>{e("/")})))}),[t.pathname]),a.createElement(a.Fragment,null)},L=(0,a.createContext)({}),z=()=>{const e=(0,i.TH)(),t=(C(),e.pathname.includes("admin"));return a.createElement(L.Provider,{value:"val"},!t&&a.createElement(Z,null),!t&&a.createElement(F,null),a.createElement(P,null),a.createElement(D,null),a.createElement("div",{style:e.pathname.includes("admin")?{}:{pointerEvents:"none"}},a.createElement(i.j3,null)),!t&&a.createElement(T,null))},M={avatarGray:"#"},G=()=>M,$=()=>{const e=C(),t=(0,i.s0)(),{Container:n,Preview:l,ButtinBox:s,ButtonOne:d,Loader:m}=(()=>{const e=o(),{}=G();return N(),{Container:r.Z.div({position:"sticky",top:"10vh",left:"0",height:"calc(90vh - (5em + 1vh))",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",gap:"3vh",color:"#fff",padding:"3em 1em"}),Preview:r.Z.div({fontFamily:"Game Of Squids",fontSize:"2.5em",lineHeight:"1.25em",width:"100%"}),ButtinBox:r.Z.div({fontFamily:"Game Of Squids",display:"flex",flexDirection:"column",gap:"1em",width:" 100%"}),ButtonOne:r.Z.button({backgroundColor:"#000",color:"#fff",fontSize:"1.25em",width:"100%",borderRadius:20,padding:"1rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5em",pointerEvents:"all"}),Loader:r.Z.div({position:"fixed",top:"50%",left:"50%",width:"50vw",transform:"translate(-50%, -50%)",backgroundColor:"#00000080",padding:"2em",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"1em",borderRadius:20}),size:e}})(),f=u((e=>e.userState.gameType));return a.createElement(n,{className:"scrollbar_hidden"},a.createElement(l,null,"Камень",a.createElement("br",null),"Ножницы",a.createElement("br",null),"Бумага"),a.createElement(s,null,a.createElement(d,{className:"noselect",onClick:()=>{(async(e,t)=>{e(I("pending"));const n=window.Telegram.WebApp,a=await k.Z.get(h+"/rps/startgame",{headers:{initdata:`${n.initData}`}}).then((t=>(e(I(null)),t))).catch((t=>(e(I(null)),t))),l=+new Date(a.data.gameId.Start);l-+new Date<0?(t("/game"),e(x(a.data))):setTimeout((()=>{t("/game"),e(x(a.data))}),l-+new Date),a.data})(e,t)},style:{fontSize:"2.5em"}},"Играть"),a.createElement(d,{className:"noselect",onClick:()=>{!function(e){const t=window.Telegram.WebApp.initDataUnsafe.user.id;navigator.clipboard.writeText(`${b}${t}`),function(e,t){const n=document.getElementById("allertCopy"),a=window.Telegram.WebApp.initDataUnsafe.user.id;navigator.clipboard.writeText(`${b}${a}`),null==n||n.classList.add("active"),e(O(t)),setTimeout((()=>{null==n||n.classList.remove("active"),e(O(""))}),1500)}(e,"Ссылка была скопирована!")}(e)}},"Пригласи друга ",a.createElement("div",{style:{fontWeight:600,fontFamily:"SFPro"}},"+50"),a.createElement(p,{style:{width:"2em",height:"2em"},src:c}))),"pending"==f&&a.createElement(m,null,a.createElement("div",{className:"loader"}),a.createElement("div",{className:""},"Ожидание игрока...")))};const _=()=>{C();const e=u((e=>e.userState.user)),{Container:t,Title:n,TextBox:l,Text:i,TextPlug:s,Raiting:d,RaitingItem:m,RaitingItemLeft:g,RaitingItemAvatar:p,RaitingItemText:v,RaitingItemRight:h,RaitingItemCount:b,BalanceIcon:w}=(()=>{const e=o(),{}=G();return N(),{Container:r.Z.div({position:"sticky",top:"10vh",left:"0",height:"calc(90vh - (0.5em + 1vh))",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",gap:"3vh",color:"#fff",padding:"3em 1em"}),Title:r.Z.div({fontFamily:"Game Of Squids",fontSize:"1.5em",width:"100%"}),TextBox:r.Z.div({display:"flex",gap:"0.5em",padding:"0.5em",backgroundColor:"#D9D9D94D",borderRadius:30,width:"100%",justifyContent:"space-between",alignItems:"center"}),Text:r.Z.div({}),TextPlug:r.Z.div({backgroundColor:"#FF378D",borderRadius:20,padding:"0.25em"}),Raiting:r.Z.div({width:"100%"}),RaitingItem:r.Z.div({display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}),RaitingItemLeft:r.Z.div({display:"flex",alignItems:"center",gap:"0.5em"}),RaitingItemAvatar:r.Z.img({maxWidth:"2em",maxHeight:"2em",borderRadius:"50%",backgroundColor:""}),RaitingItemText:r.Z.div({fontWeight:600,fontSize:"1.15em","&.gold":{backgroundImage:"linear-gradient(90deg, rgba(249,202,74,1) 0%, rgba(255,217,0,1) 21%, rgba(216,187,25,1) 82%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},"&.silver":{backgroundImage:"linear-gradient(202deg, #ffffff 0%, #c5c5c5 46%, #ababab 80%, #959494 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},"&.bronze":{backgroundImage:"linear-gradient(180deg, rgba(255,192,120,1) 0%, rgba(230,147,31,1) 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"}}),RaitingItemRight:r.Z.div({display:"flex",alignItems:"center",gap:"0.25em"}),RaitingItemCount:r.Z.div({fontWeight:600,fontSize:"1.15em"}),BalanceIcon:r.Z.img({width:"2em"}),size:e}})();return a.createElement(t,{className:"scrollbar_hidden"},a.createElement(n,null,"Рейтинг побед"),a.createElement(l,null,a.createElement(i,null,"Каждый день лидер рейтинга получает"),a.createElement(s,null,"100$")),a.createElement(d,null,null==e?void 0:e.dayRainting.map(((e,t)=>a.createElement(m,null,a.createElement(g,null,a.createElement(p,{src:`https://t.me/i/userpic/160/${e.username}.jpg`,onLoad:e=>{e.target.width<10&&(e.target.src=f)},onError:e=>{e.target.width<10&&(e.target.src=f)}}),a.createElement(v,{className:""+(0==t?"gold":1==t?"silver":2==t?"bronze":"")},t+1,". ",e.username)),a.createElement(h,null,a.createElement(b,null,e.wins),a.createElement(w,{alt:"",src:c})))))))},q=()=>{const e=o(),{}=G();N();return{Container:r.Z.div({position:"sticky",top:"5vh",left:"0",height:"calc(90vh - 1em)",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",gap:"3vh",color:"#fff",padding:"2vh 1em"}),Avatar:r.Z.img({maxWidth:"13vw",maxHeight:"13vw",borderRadius:"50%",backgroundColor:""}),BalanceIcon:r.Z.img({width:"2em"}),Top:r.Z.div({display:"flex",flexDirection:"column",gap:"1vh",alignItems:"center",justifyContent:"center"}),PlayerName:r.Z.div({fontSize:"1.15em"}),Counter:r.Z.div({backgroundColor:"#FF378D",width:"4em",height:"4em",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",div:{width:"2em",height:"2em",borderRadius:"50%",backgroundColor:"#FC82B7",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5em",fontWeight:600}}),Rewards:r.Z.div({display:"flex",alignItems:"center",gap:"0.5em",fontSize:"1.15em"}),Bottom:r.Z.div({display:"flex",justifyContent:"space-between",width:"100%",position:"relative"}),BottomButton:r.Z.img({pointerEvents:"all",borderRadius:"50%",height:"17vh",maxWidth:"30vw"}),BottonButtonBox:r.Z.div({pointerEvents:"all",transition:"0.3s",position:"relative",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column","&:nth-child(2)":{transform:"translate(0,-50%)"},"&.hidden":{transform:"translate(0,200%)"}}),BottomButtonShadow:r.Z.div({zIndex:1,pointerEvents:"all",position:"absolute",width:"90%",height:"90%",top:"50%",left:"50%",transform:"translate(-50%, -50%)",borderRadius:"50%",transition:"0.3s",":hover":{boxShadow:"0 0 10px 5px #FFFFFF"},"&.active":{boxShadow:"0 0 10px 5px #FFFFFF"},"&.activeRed":{boxShadow:"0 0 10px 5px #FF0000B2"},"&.activeGreen":{boxShadow:"0 0 10px 5px #00FF15B2"}}),Opponent:r.Z.div({transition:"0.3s",display:"flex",justifyContent:"center",width:"100%",position:"absolute",top:"0",left:0,transform:" translate(0, -100%) rotate(-180deg)","&.visable":{transform:" translate(0, calc(32vh + 50%)) rotate(-180deg)"}}),Notmotion:r.Z.div({transition:"0.3s",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1em",width:"100%",position:"absolute",top:"0",left:0,transform:" translate(0, -100%)","&.visable":{transform:" translate(0, calc(50vh - 50%))"}}),NotmotionText:r.Z.div({fontFamily:"Game Of Squids"}),RewardTextBox:r.Z.div({position:"absolute",top:"75%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"0.5em",opacity:0,pointerEvents:"none",transition:"0.3s","&.active":{opacity:1}}),RewardText:r.Z.div({fontFamily:"Game Of Squids"}),RewardValue:r.Z.div({display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5em",fontWeight:600}),size:e}},H=n.p+"d6ecf30350a287c155de.png",U=n.p+"823b82a336b034843a1b.png",V=n.p+"4a115e6dbbb9236a45f0.png",K=n.p+"7f0fc52f9224708a1b32.png",Y=async(e,t,n)=>{e(B(!0));const a=window.Telegram.WebApp,l=await k.Z.post(`https://tondurak.online/rps/makemove/${t}`,{move:n},{headers:{initdata:`${a.initData}`}}),i=+new Date(l.data.Result.End);return i-+new Date<0?(e(B(!1)),e(x({gameId:l.data.Result}))):setTimeout((()=>{e(B(!1)),e(x({gameId:l.data.Result}))}),i-+new Date),l.data};let J=5;const Q=e=>{let{game:t}=e;const[n,l]=(0,a.useState)(J),r=((0,i.s0)(),C()),o=u((e=>e.userState.requestGame)),{Counter:s}=q();return(0,a.useEffect)((()=>{const e=setInterval((()=>{n<1?clearInterval(e):l((e=>e<1?0:e-1))}),1e3);return()=>{clearInterval(e)}}),[]),(0,a.useEffect)((()=>{n<1&&1!=o&&t&&null==t.gameId.Winner&&r(x({gameId:{...t.gameId,Winner:1}}))}),[n]),(0,a.useEffect)((()=>{J=n})),(0,a.useEffect)((()=>{if(t&&t.gameId.Winner){let e=5;const t=setInterval((()=>{e<1?(clearInterval(t),J=5):e-=1}),1e3)}}),[t]),a.createElement(s,null,a.createElement("div",null,n))};let X=!0;const ee={rock:H,paper:V,scissors:U},te=()=>{const e=C(),{Container:t,Top:n,PlayerName:l,Avatar:i,Rewards:r,BalanceIcon:o,Bottom:s,BottomButton:d,BottonButtonBox:m,BottomButtonShadow:g,Opponent:p,RewardTextBox:v,RewardText:h,RewardValue:b,Notmotion:w,NotmotionText:y}=q(),{game:E,user:x}=u((e=>e.userState)),I=(0,a.useRef)(null),B=(0,a.useRef)(null),W=(0,a.useRef)(null),S=(0,a.useRef)(null),[k,Z]=(0,a.useState)("");(0,a.useEffect)((()=>{if(E&&null!=E.gameId.Winner){document.querySelectorAll("[data-butbox]").forEach(((e,t)=>{if(0!=t&&2!=t||e.classList.add("hidden"),null!=E.gameId.Winner&&null==E.gameId.Move1&&1==t&&e.classList.add("hidden"),1==t){var n;const t=E.gameId.Player1Id==(null==x?void 0:x.userInfo.id)?1:2;var a,l;if(null==e||null===(n=e.querySelector("img"))||void 0===n||n.setAttribute("src",ee[E.gameId[`Move${t}`]]),(null==x?void 0:x.userInfo.id)!=E.gameId.Winner&&0!=E.gameId.Winner)null===(a=e.querySelector("div"))||void 0===a||a.classList.add("activeRed");else null===(l=e.querySelector("div"))||void 0===l||l.classList.add("activeGreen")}}))}}),[E]);const R=(null==E?void 0:E.gameId.Player1Id)==(null==x?void 0:x.userInfo.id)?1:2;return(0,a.useEffect)((()=>{var e,t,n,a,l,i,r;"rock"==k&&(null===(e=I.current)||void 0===e||e.classList.add("active"),null===(t=I.current)||void 0===t||t.setAttribute("style","transition: 0s"));"paper"==k&&(null===(n=B.current)||void 0===n||n.classList.add("active"),null===(a=B.current)||void 0===a||a.setAttribute("style","transition: 0s"));"scissors"==k&&(null===(l=W.current)||void 0===l||l.classList.add("active"),null===(i=W.current)||void 0===i||i.setAttribute("style","transition: 0s"));if(E&&null!=E.gameId.Winner&&null!=E.gameId.Move1){var o,s,c,d,m;if((null==x?void 0:x.userInfo.id)==E.gameId.Winner)null===(d=S.current)||void 0===d||d.classList.add("activeRed");else null===(m=S.current)||void 0===m||m.classList.add("activeGreen");null===(o=S.current)||void 0===o||null===(s=o.closest("[data-opponent]"))||void 0===s||s.classList.add("visable"),null===(c=document.getElementById("reward"))||void 0===c||c.classList.add("active")}E&&null!=E.gameId.Winner&&null==E.gameId.Move1&&(null===(r=document.querySelector("[data-notmotion]"))||void 0===r||r.classList.add("visable"))})),a.createElement(t,{className:"scrollbar_hidden"},a.createElement(p,{"data-opponent":!0},a.createElement(m,{className:"butBox"},a.createElement(d,{src:E&&x?""==E.gameId["Move"+(E.gameId.Player1Id!=x.userInfo.id?1:2)]?K:ee[E.gameId["Move"+(E.gameId.Player1Id!=x.userInfo.id?1:2)]]:""}),a.createElement(g,{ref:S,className:"shadow"}))),a.createElement(w,{"data-notmotion":!0},a.createElement(m,{className:"butBox"},a.createElement(d,{src:K}),a.createElement(y,null,"Вы не сходили"))),a.createElement(n,null,a.createElement(l,null,null==E?void 0:E.gameId[`Player${R}UserName`]),a.createElement(i,{onLoad:e=>{e.target.width<10&&(e.target.src=f)},onError:e=>{e.target.width<10&&(e.target.src=f)},src:`https://t.me/i/userpic/160/${null==E?void 0:E.gameId[`Player${R}UserName`]}.jpg`}),a.createElement(r,null,null==E?void 0:E.gameId[`User${R}Wins`],a.createElement(o,{style:{fontSize:"0.75em"},alt:"",src:c})),a.createElement(Q,{game:E})),a.createElement(s,null,a.createElement(m,{"data-butbox":!0,className:"butBox",onClick:t=>{E&&Y(e,E.gameId.id,"rock"),X&&(X=!1,Z("rock"))}},a.createElement(d,{src:H}),a.createElement(g,{ref:I,className:"shadow"})),a.createElement(m,{"data-butbox":!0,className:"butBox",onClick:t=>{E&&Y(e,E.gameId.id,"scissors"),X&&(X=!1,Z("scissors"))}},a.createElement(d,{src:U}),a.createElement(g,{ref:W,className:"shadow"})),a.createElement(m,{"data-butbox":!0,className:"butBox",onClick:t=>{E&&Y(e,E.gameId.id,"paper"),X&&(X=!1,Z("paper"))}},a.createElement(d,{src:V}),a.createElement(g,{ref:B,className:"shadow"})),a.createElement(v,{id:"reward"},a.createElement(h,null,(null==x?void 0:x.userInfo.id)==(null==E?void 0:E.gameId.Winner)?"Победа!":0==(null==E?void 0:E.gameId.Winner)?"Ничья":"Проигрыш..."),a.createElement(b,null,(null==x?void 0:x.userInfo.id)==(null==E?void 0:E.gameId.Winner)?"+1":"+0",a.createElement(o,{style:{fontSize:"0.75em"},alt:"",src:c})))))},ne=()=>{const e=C();return(0,a.useEffect)((()=>{(async e=>{const t=window.Telegram.WebApp,n=await k.Z.post(h+"/rps/adduser",{},{headers:{initdata:`${t.initData}`}});e(E(n.data)),n.data})(e);const t=localStorage.getItem("lastReload"),n=Math.floor((new Date).getTime()/1e3);(null==t||+t+2<n)&&(localStorage.setItem("lastReload",`${n}`),location.reload())}),[]),a.createElement(i.Z5,null,a.createElement(i.AW,{path:"/",element:a.createElement(z,null)},a.createElement(i.AW,{index:!0,element:a.createElement($,null)}),a.createElement(i.AW,{path:"raiting",element:a.createElement(_,null)}),a.createElement(i.AW,{path:"game",element:a.createElement(te,null)})))};const ae=(0,n(791).UY)({[S.name]:S.reducer,[A.name]:A.reducer}),le=(0,w.xC)({reducer:ae});var ie=n(155);const re=document.querySelector("#wrap");(0,l.s)(re).render(a.createElement(v.LD,{manifestUrl:"https://raw.githubusercontent.com/SemenOtvesov/knb/refs/heads/main/tonconnect-manifest.json"},a.createElement(R.VK,{basemname:`/${ie.env.PUBLIC_URL}`},a.createElement(m.zt,{store:le},a.createElement(ne,null)))))},24:()=>{}},l={};function i(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return a[e].call(n.exports,n,n.exports,i),n.exports}i.m=a,i.amdO={},e=[],i.O=(t,n,a,l)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],l=e[d][2];for(var o=!0,s=0;s<n.length;s++)(!1&l||r>=l)&&Object.keys(i.O).every((e=>i.O[e](n[s])))?n.splice(s--,1):(o=!1,l<r&&(r=l));if(o){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,a,l]},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var l=Object.create(null);i.r(l);var r={};t=t||[null,n({}),n([]),n(n)];for(var o=2&a&&e;"object"==typeof o&&!~t.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,i.d(l,r),l},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,r=n[0],o=n[1],s=n[2],c=0;if(r.some((t=>0!==e[t]))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(s)var d=s(i)}for(t&&t(n);c<r.length;c++)l=r[c],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(d)},n=self.webpackChunkwebpack_to_study=self.webpackChunkwebpack_to_study||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[657],(()=>i(780)));r=i.O(r)})();