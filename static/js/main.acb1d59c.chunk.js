(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports={formField:"FormControls_formField__1xhjZ",formControl:"FormControls_formControl__2SPvv",helpBlock:"FormControls_helpBlock__1swUn",textarea:"FormControls_textarea__3xGy-",input:"FormControls_input__2uaFG",checkbox:"FormControls_checkbox__b0iUB",checkbox__label:"FormControls_checkbox__label__q87iO",button:"FormControls_button__3Y9MR",hasError:"FormControls_hasError__29ofn"}},128:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var r=n(40),a=n(8),o="socailnetwork/messages/SEND-MSG",s={dialogs:[{id:"1",name:"Viktor"},{id:"2",name:"Sebek"},{id:"3",name:"Cotlovan"}],messages:[{id:1,message:"Hey, how are you",type:"input"},{id:2,message:"Hi, a'im zbs. You?",type:"output"},{id:3,message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae blanditiis eaque explicabo illum itaque iure laboriosam libero modi, odio quisquam quos repellendus repudiandae rerum sapiente suscipit tempora tempore voluptates?",type:"output"},{id:4,message:"Okay, thanks for you respond",type:"input"}]},i=function(e){return{type:o,newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:e.messages[e.messages.length-1].id+1,message:t.newMessage,type:"output"},i=Object(a.a)({},e);return n.message&&(i=Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[n])})),i;default:return e}}},136:function(e,t,n){e.exports=n.p+"static/media/preloader.a8ed85cb.gif"},138:function(e,t,n){e.exports={profile:"Profile_profile__3dzvr"}},140:function(e,t,n){e.exports=n.p+"static/media/lookingJobIcon.87263587.png"},141:function(e,t,n){e.exports=n.p+"static/media/edit-button.07c57606.svg"},142:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},143:function(e,t,n){e.exports=n.p+"static/media/logout.dbe1e94c.svg"},170:function(e,t,n){e.exports=n(297)},171:function(e,t,n){},176:function(e,t,n){},20:function(e,t,n){e.exports={users:"Users_users__2Iv27",user:"Users_user__1dQYj",user__left:"Users_user__left__jISoI",user__avatar:"Users_user__avatar__2c-2z",user__center:"Users_user__center__FW4VB",user__fullname:"Users_user__fullname__1OaM5",user__status:"Users_user__status__8Vfwh",user__button:"Users_user__button__1y0me",user__right:"Users_user__right__JS7M9"}},26:function(e,t,n){e.exports={sidebar:"navbar_sidebar__RlD_9",navigation:"navbar_navigation__23-kK",item:"navbar_item__1Lyvz",active:"navbar_active__erm8h"}},297:function(e,t,n){"use strict";n.r(t);n(171),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r,a=n(68),o=n.n(a),s=n(29),i=n(30),l=n(32),c=n(31),u=n(33),f=n(0),m=n.n(f),p=(n(176),n(11)),d=n(26),_=n.n(d),h=n(19),g=n(55),b=n.n(g),v=function(e){var t=e.friends.map(function(e){return m.a.createElement("div",{className:b.a.user,key:e.id},m.a.createElement("div",{className:b.a.avatar}),m.a.createElement("div",{className:b.a.userName},e.name))});return m.a.createElement("div",{className:b.a.friends},m.a.createElement("h3",null,"My react friends "),t)},E=function(e){return m.a.createElement("aside",{className:_.a.sidebar},m.a.createElement("nav",{className:_.a.navigation},m.a.createElement(h.b,{to:"/profile",className:_.a.item,activeClassName:_.a.active}," Profile"),m.a.createElement(h.b,{to:"/dialogs",className:_.a.item,activeClassName:_.a.active},"Dialogs"),m.a.createElement(h.b,{to:"/users",className:_.a.item,activeClassName:_.a.active},"Users")),m.a.createElement(v,{friends:e.sidebar.friends}))},P=Object(p.b)(function(e){return{sidebar:e.sidebar}},function(e){return{}})(E),O=n(6),w=n.n(O),k=n(14),j=n(40),S=n(8),y=n(134).create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"debbad39-c8d6-4059-aada-925f0eac2782"}}),N={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return y.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return y.post("follow/".concat(e)).then(function(e){return e.data})},unfollow:function(e){return y.delete("follow/".concat(e)).then(function(e){return e.data})}},I=function(){return y.get("auth/me").then(function(e){return e.data})},C=function(e){return y.post("auth/login",Object(S.a)({},e)).then(function(e){return e.data})},x=function(){return y.delete("auth/login").then(function(e){return e.data})},F=function(){return y.get("security/get-captcha-url").then(function(e){return e.data})},U=function(e){return y.get("profile/".concat(e)).then(function(e){return e.data})},T=function(e){return y.get("profile/status/".concat(e)).then(function(e){return e.data})},A=function(e){return y.put("profile/status",{status:e}).then(function(e){return e.data})},L=function(e){var t=new FormData;return t.append("image",e),y.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){return e.data})},R=function(e){return y.put("profile",e).then(function(e){return e.data})},D=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(S.a)({},e,r):e})},M="socailnetwork/users/FOLLOW",z="socailnetwork/users/UNFOLLOW",G="socailnetwork/users/SET-USERS",B={users:[],pageSize:20,totalItemsCount:1,currentPage:1,isFetching:!0,followingInProgress:[2,3],linksOnPage:10},q=function(e){return{type:M,userID:e}},H=function(e){return{type:z,userID:e}},Z=function(e){return{type:"socailnetwork/users/TOGGLE-IS-FETCHING",isFetching:e}},J=function(e,t){return{type:"socailnetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},V=function(){var e=Object(k.a)(w.a.mark(function e(t,n,r,a){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(J(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&(t(a(n)),t(J(!1,n)));case 5:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(S.a)({},e,{users:D(e.users,t.userID,"id",{followed:!0})});case z:return Object(S.a)({},e,{users:D(e.users,t.userID,"id",{followed:!1})});case G:return Object(S.a)({},e,{users:Object(j.a)(t.users)});case"socailnetwork/users/SET-CURRENT-PAGE":return Object(S.a)({},e,{currentPage:t.newCurrentPage});case"socailnetwork/users/SET-TOTAL-USERS-COUNT":return Object(S.a)({},e,{totalItemsCount:t.totalCount});case"socailnetwork/users/TOGGLE-IS-FETCHING":return Object(S.a)({},e,{isFetching:t.isFetching});case"socailnetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(S.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter(function(e){return e!==t.userId})]});default:return e}},Y=n(20),Q=n.n(Y),X=n(71),K=n(41),$=n(47),ee=n.n($),te=n(135),ne=n.n(te),re=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.linksOnPage,s=void 0===o?10:o,i=Math.ceil(t/n),l=[],c=1;c<=i;c++)l.push(c);var u=Math.ceil(i/s),p=Object(f.useState)(1),d=Object(K.a)(p,2),_=d[0],h=d[1],g=(_-1)*s+1,b=_*s;return Object(f.useEffect)(function(){var e=Math.ceil(r/s);h(e)},[r,s]),m.a.createElement("div",{className:ee.a.pagination},_>1&&m.a.createElement("button",{onClick:function(){h(_-1)},className:ee.a.pagination__btn},"Prev"),l.filter(function(e){return e>=g&&e<=b}).map(function(e){return m.a.createElement("span",{key:e,onClick:function(){a(e)},className:ne()(Object(X.a)({},ee.a.pagination__link_active,r===e),ee.a.pagination__link)},e)}),u>_&&m.a.createElement("button",{onClick:function(){h(_+1)},className:ee.a.pagination__btn},"Next"))},ae=n(72),oe=n.n(ae),se=function(e){return m.a.createElement("div",{className:Q.a.user},m.a.createElement("div",{className:Q.a.user__left},m.a.createElement(h.b,{to:"/profile/"+e.user.id},m.a.createElement("img",{className:Q.a.user__avatar,src:null!==e.user.photos.small?e.user.photos.small:oe.a,alt:""})),e.followed?m.a.createElement("button",{disabled:e.followingInProgress.some(function(t){return t===e.user.id}),onClick:function(){e.unfollow(e.user.id)},className:Q.a.user__button},"Unfollow"):m.a.createElement("button",{disabled:e.followingInProgress.some(function(t){return t===e.user.id}),onClick:function(){e.follow(e.user.id)},className:Q.a.user__button},"Follow")),m.a.createElement("div",{className:Q.a.user__center},m.a.createElement("div",{className:Q.a.user__fullname},e.user.name),m.a.createElement("div",{className:Q.a.user__status},e.user.status)),m.a.createElement("div",{className:Q.a.user__right}))},ie=function(e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(re,{onPageChanged:e.onPageChanged,currentPage:e.currentPage,totalItemsCount:e.totalItemsCount,pageSize:e.pageSize}),m.a.createElement("div",{className:Q.a.users},e.users.map(function(t){return m.a.createElement(se,{key:t.id,followingInProgress:e.followingInProgress,follow:e.follow,unfollow:e.unfollow,user:t})})))},le=n(136),ce=n.n(le),ue=n(94),fe=n.n(ue),me=function(e){return m.a.createElement("div",{className:fe.a.preloaderContainer},m.a.createElement("img",{src:ce.a,alt:"",className:fe.a.preloader}))},pe=n(7),de=n(137),_e=function(e){return e.usersPage.users},he=(Object(de.a)(_e,function(e){return e.filter(function(e){return!0})}),function(e){return e.usersPage.pageSize}),ge=function(e){return e.usersPage.totalItemsCount},be=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},Ee=function(e){return e.usersPage.followingInProgress},Pe=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.setCurrentPage(e),n.props.requestUsers(e,n.props.pageSize)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;0===this.props.users.length&&this.props.requestUsers(t,n)}},{key:"render",value:function(){return f.createElement(f.Fragment,null,this.props.isFetching?f.createElement(me,null):f.createElement(ie,Object.assign({},this.props,{onPageChanged:this.onPageChanged})))}}]),t}(f.Component),Oe=Object(pe.d)(Object(p.b)(function(e){return{users:_e(e),pageSize:he(e),totalItemsCount:ge(e),currentPage:be(e),isFetching:ve(e),followingInProgress:Ee(e),linksOnPage:e.usersPage.linksOnPage}},{setCurrentPage:function(e){return{type:"socailnetwork/users/SET-CURRENT-PAGE",newCurrentPage:e}},requestUsers:function(e,t){return function(){var n=Object(k.a)(w.a.mark(function n(r){var a;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(Z(!0)),n.next=3,N.getUsers(e,t);case 3:a=n.sent,r(Z(!1)),r((o=a.items,{type:G,users:o})),r({type:"socailnetwork/users/SET-TOTAL-USERS-COUNT",totalCount:a.totalCount});case 7:case"end":return n.stop()}var o},n)}));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:V(n,e,N.follow.bind(N),q);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:V(n,e,N.unfollow.bind(N),H);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}}))(Pe),we=n(138),ke=n.n(we),je=n(75),Se=n.n(je),ye=n(56),Ne=n.n(ye),Ie=function(e){return m.a.createElement("div",{className:Ne.a.item},m.a.createElement("div",{className:Ne.a.avatar}),m.a.createElement("div",{className:Ne.a.text},e.msg?e.msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consequuntur delectus deleniti"),m.a.createElement("div",{className:Ne.a.likes}," ",e.likes))},Ce=n(129),xe=n(130),Fe=function(e){return e?void 0:"Field is required!"},Ue=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?void 0:'Please enter email in format "mail@site.com"'},Te=n(57),Ae=n(10),Le=n.n(Ae),Re=function(e){e.input;var t=e.meta,n=Object(Te.a)(e,["input","meta"]),r=t.touched&&t.error,a=r?Le.a.formField+" "+Le.a.hasError:Le.a.formField;return m.a.createElement("div",{className:a},n.children,m.a.createElement("div",{className:Le.a.helpBlock},r?t.error:null))},De=function(e){var t=e.input,n=(e.meta,e.child,Object(Te.a)(e,["input","meta","child"]));return m.a.createElement(Re,e,m.a.createElement("textarea",Object.assign({},t,n,{className:Le.a.textarea+" "+Le.a.formControl})))},Me=function(e){var t=e.input,n=(e.meta,e.child,Object(Te.a)(e,["input","meta","child"]));return m.a.createElement(Re,e,m.a.createElement("input",Object.assign({},t,n,{className:Le.a.input+" "+Le.a.formControl})))},ze=function(e){var t=e.input,n=e.meta,r=Object(Te.a)(e,["input","meta"]),a=n.touched&&n.error?Le.a.formField+" "+Le.a.hasError:Le.a.formField;return m.a.createElement("div",{className:a},m.a.createElement("input",Object.assign({type:"checkbox"},t,r,{checked:t.value,className:Le.a.checkbox+" "+Le.a.formControl})),m.a.createElement("label",{className:Le.a.checkbox__label,htmlFor:r.id},r.label))},Ge=function(e){return m.a.createElement("button",Object.assign({},e.type,{className:e.className?e.className:Le.a.button}),e.label)},Be=(r=140,function(e){return e&&e.length>r?"Max field length is 140 symbols":void 0}),qe=Object(xe.a)({form:"addPostForm"})(function(e){return f.createElement("form",{className:Se.a.newPost,onSubmit:e.handleSubmit},f.createElement(Ce.a,{validate:[Fe,Be],component:De,placeholder:"Enter your post text",name:"newPostText"}),f.createElement(Ge,{label:"Add post"}))}),He=f.memo(function(e){var t=e.posts.map(function(e){return f.createElement(Ie,{msg:e.message,likes:e.likes,key:e.id})});return f.createElement("div",{className:Se.a.posts},f.createElement("div",null,f.createElement(qe,{onSubmit:function(t){e.addPost(t.newPostText)}})),f.createElement("div",{className:Se.a.postsList},t))}),Ze=n(25),Je="socailnetwork/profile/ADD-POST",Ve={posts:[{id:1,message:"Hi, how are you?",likes:"54"},{id:2,message:"It's my first react app",likes:"102"},{id:3,likes:"8"}],userProfile:null,userStatus:""},We=function(e){return{type:"socailnetwork/profile/SET-USER-STATUS",userStatus:e}},Ye=function(e){return{type:"socailnetwork/profile/SET-USER-PHOTO",photo:e}},Qe=function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:r=t.sent,n({type:"socailnetwork/profile/SET-USER-PROFILE",userProfile:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Je:var n={id:e.posts[e.posts.length-1].id+1,message:t.newPostText,likes:0};return Object(S.a)({},e,{posts:[].concat(Object(j.a)(e.posts),[n])});case"socailnetwork/profile/SET-USER-PROFILE":return Object(S.a)({},e,{userProfile:t.userProfile});case"socailnetwork/profile/SET-USER-STATUS":return Object(S.a)({},e,{userStatus:t.userStatus});case"socailnetwork/profile/SET-USER-PHOTO":return Object(S.a)({},e,{userProfile:Object(S.a)({},e.userProfile,{photos:t.photo})});case"socailnetwork/profile/DELETE_POST":return Object(S.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postID})});default:return e}},Ke=Object(p.b)(function(e){return{posts:e.profilePage.posts}},function(e){return{addPost:function(t){e(function(e){return{type:Je,newPostText:e}}(t))}}})(He),$e=n(9),et=n.n($e),tt=n(140),nt=n.n(tt);function rt(){return(rt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function at(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ot=m.a.createElement("path",{d:"m401.94 543.64c-.422-.413-.932-.619-1.528-.619h-1.892l-.431-1.122c-.107-.27-.303-.502-.587-.697-.284-.195-.576-.293-.874-.293h-4.324c-.298 0-.59.098-.874.293-.284.195-.48.428-.587.697l-.431 1.122h-1.892c-.597 0-1.106.206-1.529.619-.422.413-.633.911-.633 1.494v7.395c0 .583.211 1.081.633 1.494.422.413.932.619 1.529.619h11.89c.597 0 1.106-.206 1.528-.619.422-.413.633-.911.633-1.494v-7.395c0-.583-.211-1.081-.633-1.494m-4.801 7.804c-.74.724-1.631 1.085-2.673 1.085-1.042 0-1.932-.362-2.673-1.085-.74-.724-1.111-1.594-1.111-2.612 0-1.018.37-1.889 1.111-2.612.74-.724 1.631-1.085 2.673-1.085 1.042 0 1.932.362 2.673 1.085.74.724 1.111 1.594 1.111 2.612 0 1.018-.37 1.889-1.111 2.612m-2.673-4.989c-.67 0-1.243.232-1.719.697-.476.465-.714 1.025-.714 1.68 0 .655.238 1.215.714 1.68.476.465 1.049.697 1.719.697.67 0 1.243-.232 1.719-.697.476-.465.714-1.025.714-1.68 0-.655-.238-1.215-.714-1.68-.476-.465-1.049-.697-1.719-.697",transform:"matrix(.78637 0 0 .78395-302.25-421.36)",fill:"#fff"}),st=function(e){var t=e.svgRef,n=at(e,["svgRef"]);return m.a.createElement("svg",rt({viewBox:"0 0 16 16",ref:t},n),ot)},it=m.a.forwardRef(function(e,t){return m.a.createElement(st,rt({svgRef:t},e))}),lt=(n.p,function(e){var t=Object(f.useState)(!1),n=Object(K.a)(t,2),r=n[0],a=n[1],o=Object(f.useState)(e.userStatus),s=Object(K.a)(o,2),i=s[0],l=s[1];Object(f.useEffect)(function(){l(e.userStatus)},[e.userStatus]);return m.a.createElement("div",null,r&&e.isOwner?m.a.createElement("div",{className:et.a.userProfile__status},m.a.createElement("input",{value:i,autoFocus:!0,onChange:function(e){var t=e.target.value;l(t)},onBlur:function(t){e.userStatus!==i&&e.updStatus(i),a(!r)}})):m.a.createElement("div",{className:et.a.userProfile__status,onDoubleClick:function(){a(!r)}},m.a.createElement("span",null,e.isOwner&&!e.userStatus?"Double click to change status":e.userStatus)))}),ct=n(141),ut=n.n(ct),ft=function(e){return f.createElement("form",{onSubmit:e.handleSubmit},f.createElement("div",{className:et.a.userProfile__formField},f.createElement("span",null,"Fullname:"),f.createElement(Ce.a,{component:Me,name:"fullName",type:"text",placeholder:"Full name"})),f.createElement("div",{className:et.a.userProfile__formField},f.createElement(Ce.a,{id:"lookingForAJob",component:ze,name:"lookingForAJob",label:"You are looking a job?"})),f.createElement("div",{className:et.a.userProfile__formField},f.createElement("span",null,"Professional skills:"),f.createElement(Ce.a,{component:De,placeholder:"Enter description of your professional skills",name:"lookingForAJobDescription"})),f.createElement("div",{className:et.a.userProfile__formField},f.createElement("span",null,"About me:"),f.createElement(Ce.a,{component:De,placeholder:"Tell about yourself",name:"aboutMe"})),Object.keys(e.userProfile.contacts).map(function(e){return f.createElement("div",{key:e,className:et.a.userProfile__formField},f.createElement("span",null,e,":"),f.createElement(Ce.a,{component:Me,placeholder:e,name:"contacts.".concat(e)}))}),e.error&&f.createElement("div",{className:Le.a.helpBlock+" "+Le.a.hasError},e.error),f.createElement(Ge,{label:"Save"})," ",f.createElement(Ge,{onClick:e.cancelEdit,label:"Cancel"}))},mt=ft=Object(xe.a)({form:"profileForm"})(ft),pt=function(e){return f.createElement(f.Fragment,null,e.isOwner?f.createElement("button",{type:"button",className:et.a.userProfile__editbtn,onClick:e.setEditMode},f.createElement("img",{src:ut.a,alt:""})):null,f.createElement("div",{className:et.a.userProfile__fullname},e.userProfile.fullName),f.createElement(dt,{contacts:e.userProfile.contacts}),e.userProfile.lookingForAJob?f.createElement("div",{className:et.a.userProfile__jobInfo},f.createElement("img",{src:nt.a,alt:"",className:et.a.userProfile__lookingIcon}),e.userProfile.lookingForAJobDescription):null,e.userProfile.aboutMe?f.createElement("div",{className:et.a.userProfile__jobInfo},e.userProfile.aboutMe):null)},dt=function(e){var t=e.contacts,n=Object.keys(t).map(function(e){if(t[e]){var n="icon icon--"+e;return f.createElement("a",{key:e,href:t[e],target:"_blank",rel:"noopener noreferrer",className:n},e)}return null});return f.createElement("div",{className:et.a.userProfile__contacts},n.length?f.createElement("div",{className:"icons"},n):null)},_t=function(e){var t=f.useState(!1),n=Object(K.a)(t,2),r=n[0],a=n[1];return f.createElement("div",null,f.createElement("div",{className:et.a.img}," My React App"),f.createElement("div",{className:et.a.userProfile},f.createElement("div",{className:et.a.userProfile__avatarContainer},f.createElement("img",{className:et.a.userProfile__avatar,src:e.userProfile.photos.large?e.userProfile.photos.large:oe.a,alt:""}),e.isOwner&&f.createElement("label",{htmlFor:"photoInput",className:et.a.userProfile__photoInput},f.createElement(it,{className:et.a.userProfile__photoicon}),f.createElement("input",{id:"photoInput",type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}))),f.createElement("div",{className:et.a.userProfile__info},f.createElement(lt,{isOwner:e.isOwner,updStatus:e.updStatus,userStatus:e.userStatus}),r?f.createElement(mt,{cancelEdit:function(){a(!1)},userProfile:e.userProfile,initialValues:e.userProfile,onSubmit:function(t){e.saveProfileData(t).then(function(){a(!1)}).catch(function(e){console.log(e)})}}):f.createElement(pt,{isOwner:e.isOwner,setEditMode:function(){a(!0)},userProfile:e.userProfile}))))},ht=function(e){return e.userProfile?m.a.createElement("div",{className:ke.a.profile},m.a.createElement(_t,{userProfile:e.userProfile,userStatus:e.userStatus,updStatus:e.updStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfileData:e.saveProfileData}),m.a.createElement(Ke,null)):m.a.createElement(me,null)},gt=n(37),bt=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId?this.props.match.params.userId:this.props.authUserID;e?(this.props.getProfile(e),this.props.getStatus(e)):this.props.history.push("/login")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return f.createElement(ht,Object.assign({},this.props,{isOwner:!this.props.match.params.userId}))}}]),t}(f.Component),vt=Object(pe.d)(Object(p.b)(function(e){return{userProfile:e.profilePage.userProfile,userStatus:e.profilePage.userStatus,authUserID:e.auth.id}},{getProfile:Qe,getStatus:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T(e);case 2:r=t.sent,n(We(r));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updStatus:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:0===t.sent.resultCode&&n(We(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:0===(r=t.sent).resultCode&&n(Ye(r.data.photos));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},saveProfileData:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n,r){var a,o;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:if(0!==(a=t.sent).resultCode){t.next=8;break}o=r().auth.id,n(Qe(o)),t.next=10;break;case 8:return n(Object(Ze.b)("profileForm",{_error:a.messages[0]})),t.abrupt("return",Promise.reject(a.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}}),gt.g)(bt),Et=n(142),Pt=n.n(Et),Ot=n(58),wt=n.n(Ot),kt=n(143),jt=n.n(kt),St=function(e){return m.a.createElement("header",{className:wt.a.header},m.a.createElement("img",{src:Pt.a,alt:"",className:wt.a.logo}),m.a.createElement("div",{className:wt.a.loginBlock},e.isAuth?m.a.createElement(m.a.Fragment,null,m.a.createElement("span",null,e.login),m.a.createElement("img",{src:jt.a,alt:"",onClick:function(){return e.logout()},className:wt.a.logout})):m.a.createElement(h.b,{to:"/login"},"login")))},yt={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},Nt=function(e,t,n,r){return{type:"socailnetwork/auth/SET_USER_DATA",data:{email:e,id:t,login:n,isAuth:r}}},It=function(e){return{type:"socialnetwork/auth/SET_CAPTCHA_URL",captchaUrl:e}},Ct=function(){return function(){var e=Object(k.a)(w.a.mark(function e(t){var n,r,a,o,s;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,o=r.login,s=r.email,t(Nt(s,a,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},xt=function(){return function(){var e=Object(k.a)(w.a.mark(function e(t){var n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:n=e.sent,r=n.url,t(It(r));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"socailnetwork/auth/SET_USER_DATA":return Object(S.a)({},e,t.data);case"socialnetwork/auth/SET_CAPTCHA_URL":return Object(S.a)({},e,{captchaUrl:t.captchaUrl});default:return e}},Ut=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return f.createElement(St,this.props)}}]),t}(f.Component),Tt=Object(p.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(k.a)(w.a.mark(function e(t){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:0===e.sent.resultCode&&t(Nt(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(Ut),At=n(97),Lt=n.n(At),Rt=Object(xe.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return m.a.createElement("form",{onSubmit:t,className:Lt.a.loginForm},m.a.createElement(Ce.a,{component:Me,validate:Ue,name:"email",type:"text",placeholder:"Login"}),m.a.createElement(Ce.a,{component:Me,validate:Fe,type:"password",placeholder:"Password",name:"password"}),m.a.createElement(Ce.a,{id:"rememberMe",component:ze,name:"rememberMe",label:"Remember me"}),n&&m.a.createElement("div",{className:Le.a.helpBlock+" "+Le.a.hasError},n),r&&m.a.createElement(m.a.Fragment,null,m.a.createElement("img",{src:r,alt:""}),"   ",m.a.createElement(Ce.a,{validate:Fe,component:Me,type:"text",name:"captcha",placeholder:"Enter symbols from email"})),m.a.createElement(Ge,{label:"Login"}))}),Dt=function(e){return e.isAuth?m.a.createElement(gt.a,{to:"/profile"}):m.a.createElement("div",{className:Lt.a.loginPage},m.a.createElement("h1",null,"Login"),m.a.createElement(Rt,{onSubmit:function(t){e.login(t)},captchaUrl:e.captchaUrl}))},Mt=Object(p.b)(function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}},{login:function(e){return function(){var t=Object(k.a)(w.a.mark(function t(n){var r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(e);case 2:0===(r=t.sent).resultCode?n(Ct()):(10===r.resultCode&&n(xt()),n(Object(Ze.b)("login",{_error:r.messages[0]})));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(Dt),zt={initialized:!1},Gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt;switch((arguments.length>1?arguments[1]:void 0).type){case"socailnetwork/app/SET_INITIALIZED":return Object(S.a)({},e,{initialized:!0});default:return e}},Bt=n(128),qt={friends:[{id:"2",name:"Sebek"},{id:"3",name:"Cotlovan"}]},Ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt;arguments.length>1&&arguments[1];return e},Zt=n(144),Jt=n(131),Vt=Object(pe.c)({profilePage:Xe,messagesPage:Bt.a,sidebar:Ht,usersPage:W,auth:Ft,form:Jt.a,app:Gt}),Wt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,Yt=Object(pe.e)(Vt,Wt(Object(pe.a)(Zt.a))),Qt=m.a.lazy(function(){return n.e(3).then(n.bind(null,302))}),Xt=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandledErrors=function(e){alert(e)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandlerejextion",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?m.a.createElement("div",{className:"App"},m.a.createElement(Tt,null),m.a.createElement(P,null),m.a.createElement("div",{className:"main"},m.a.createElement(gt.d,null,m.a.createElement(gt.b,{path:"/dialogs",render:function(){return m.a.createElement(f.Suspense,{fallback:m.a.createElement(me,null)},m.a.createElement(Qt,null)," ")}}),m.a.createElement(gt.b,{path:"/profile/:userId?",render:function(){return m.a.createElement(vt,null)}}),m.a.createElement(gt.b,{path:"/login",render:function(){return m.a.createElement(Mt,null)}}),m.a.createElement(gt.b,{path:"/users",render:function(){return m.a.createElement(Oe,null)}}),m.a.createElement(gt.a,{exact:!0,from:"/",to:"/profile"}),m.a.createElement(gt.b,{path:"*",render:function(){return m.a.createElement("div",{className:"error-page"},m.a.createElement("span",null,"404")," ",m.a.createElement("div",null,"not found"))}})))):m.a.createElement(me,null)}}]),t}(m.a.Component),Kt=Object(pe.d)(gt.g,Object(p.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(Ct());Promise.all([t]).then(function(t){e({type:"socailnetwork/app/SET_INITIALIZED"})})}}}))(Xt),$t=function(e){return m.a.createElement(h.a,null,m.a.createElement(p.a,{store:Yt},m.a.createElement(Kt,null)))};o.a.render(m.a.createElement($t,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,n){e.exports={pagination:"Paginator_pagination__1asUZ",pagination__link:"Paginator_pagination__link__2lqYL",pagination__btn:"Paginator_pagination__btn__1_Lzj",pagination__link_active:"Paginator_pagination__link_active__3mDhH"}},55:function(e,t,n){e.exports={friends:"Friends_friends__1-Zf7",user:"Friends_user__1rZgZ",avatar:"Friends_avatar__3QSSM",userName:"Friends_userName__3Q0kv"}},56:function(e,t,n){e.exports={item:"Posts_item__y9YXG",avatar:"Posts_avatar__3cFB7",text:"Posts_text__3R7oj",likes:"Posts_likes__2Y1cu"}},58:function(e,t,n){e.exports={header:"header_header__HZ6Fg",logo:"header_logo__3iSgw",loginBlock:"header_loginBlock__2dP0n",logout:"header_logout__2sa4I"}},72:function(e,t,n){e.exports=n.p+"static/media/avatar.0d09cb21.png"},75:function(e,t,n){e.exports={posts:"MyPosts_posts__3tZ1c",postsList:"MyPosts_postsList__128aV",newPost:"MyPosts_newPost__3FkQO"}},9:function(e,t,n){e.exports={img:"ProfileInfo_img__1lpBU",userProfile:"ProfileInfo_userProfile__20Rnr",userProfile__fullname:"ProfileInfo_userProfile__fullname__1_oyn",userProfile__avatarContainer:"ProfileInfo_userProfile__avatarContainer__2wWiN",userProfile__avatar:"ProfileInfo_userProfile__avatar__NxpXE",userProfile__photoInput:"ProfileInfo_userProfile__photoInput__mgV3q",userProfile__photoicon:"ProfileInfo_userProfile__photoicon__2QNw3",userProfile__info:"ProfileInfo_userProfile__info__36jZ7",userProfile__editbtn:"ProfileInfo_userProfile__editbtn__3YOhC",userProfile__status:"ProfileInfo_userProfile__status__kyVvD",userProfile__contacts:"ProfileInfo_userProfile__contacts__LBJqR",userProfile__jobInfo:"ProfileInfo_userProfile__jobInfo__TedkV",userProfile__lookingIcon:"ProfileInfo_userProfile__lookingIcon__2E74g",userProfile__formField:"ProfileInfo_userProfile__formField__SG6V_"}},94:function(e,t,n){e.exports={preloaderContainer:"Preloader_preloaderContainer__1D5OQ",preloader:"Preloader_preloader__2dvkO"}},97:function(e,t,n){e.exports={loginPage:"Login_loginPage__-UEgp",loginForm:"Login_loginForm__1Hg13"}}},[[170,1,2]]]);
//# sourceMappingURL=main.acb1d59c.chunk.js.map