(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"057f":function(t,e,r){var n=r("c6b6"),c=r("fc6a"),i=r("241c").f,o=r("4dae"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(e){return o(s)}};t.exports.f=function(t){return s&&"Window"==n(t)?u(t):i(c(t))}},2532:function(t,e,r){"use strict";var n=r("23e7"),c=r("e330"),i=r("5a34"),o=r("1d80"),s=r("577e"),u=r("ab13"),a=c("".indexOf);n({target:"String",proto:!0,forced:!u("includes")},{includes:function(t){return!!~a(s(o(this)),s(i(t)),arguments.length>1?arguments[1]:void 0)}})},"3d87":function(t,e,r){var n=r("4930");t.exports=n&&!!Symbol["for"]&&!!Symbol.keyFor},"428f":function(t,e,r){var n=r("da84");t.exports=n},4659:function(t,e,r){},"4dae":function(t,e,r){var n=r("da84"),c=r("23cb"),i=r("07fa"),o=r("8418"),s=n.Array,u=Math.max;t.exports=function(t,e,r){for(var n=i(t),a=c(e,n),f=c(void 0===r?n:r,n),d=s(u(f-a,0)),b=0;a<f;a++,b++)o(d,b,t[a]);return d.length=b,d}},"57b9":function(t,e,r){var n=r("c65b"),c=r("d066"),i=r("b622"),o=r("cb2d");t.exports=function(){var t=c("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,s=i("toPrimitive");e&&!e[s]&&o(e,s,(function(t){return n(r,this)}),{arity:1})}},"5a47":function(t,e,r){var n=r("23e7"),c=r("4930"),i=r("d039"),o=r("7418"),s=r("7b0b"),u=!c||i((function(){o.f(1)}));n({target:"Object",stat:!0,forced:u},{getOwnPropertySymbols:function(t){var e=o.f;return e?e(s(t)):[]}})},"62e7":function(t,e,r){"use strict";r("4659")},"746f":function(t,e,r){var n=r("428f"),c=r("1a2d"),i=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||o(e,t,{value:i.f(t)})}},9060:function(t,e,r){"use strict";r.r(e);var n=r("f2bf"),c={id:"app"},i={key:0},o=Object(n["j"])("loading quizes");function s(t,e,r,s,u,a){var f=Object(n["D"])("QuizList");return Object(n["v"])(),Object(n["g"])("div",c,[u.error?(Object(n["v"])(),Object(n["g"])("div",i,Object(n["F"])(u.error)+"}",1)):Object(n["f"])("",!0),(Object(n["v"])(),Object(n["e"])(n["b"],null,{default:Object(n["J"])((function(){return[Object(n["k"])(f)]})),fallback:Object(n["J"])((function(){return[o]})),_:1}))])}r("a4d3"),r("e01a");var u={class:"d-flex justify-content-center"},a={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 w-100",id:"quizRow"},f={class:"card"},d=["src"],b=Object(n["h"])("div",{class:"middle"},[Object(n["h"])("div",{class:"text"},"Play")],-1),l={class:"card-title"},h={class:"card-body"},v={class:"card-description"},g={classs:"card-footer"},O={class:"block"},j=Object(n["h"])("br",null,null,-1),p={class:"block"},m=Object(n["h"])("br",null,null,-1),y={class:"block"},w=Object(n["h"])("br",null,null,-1),S={class:"block"},z=Object(n["h"])("br",null,null,-1),k=Object(n["h"])("br",null,null,-1);function F(t,e,r,c,i,o){var s=Object(n["D"])("router-link"),F=Object(n["D"])("font-awesome-icon");return Object(n["v"])(),Object(n["g"])("div",u,[Object(n["h"])("div",a,[(Object(n["v"])(!0),Object(n["g"])(n["a"],null,Object(n["B"])(t.$store.getters.getQuizes,(function(t){return Object(n["v"])(),Object(n["g"])("div",{id:"quiz-container",class:"col",key:t.id},[Object(n["h"])("div",f,[Object(n["k"])(s,{to:{name:"QuizDetails",params:{slug:t.slug}}},{default:Object(n["J"])((function(){return[Object(n["h"])("img",{src:"".concat(t.image),class:"image card-img-top",alt:""},null,8,d),b,Object(n["h"])("h5",l,Object(n["F"])(t.title),1)]})),_:2},1032,["to"]),Object(n["h"])("div",h,[Object(n["h"])("p",v,Object(n["F"])(t.description),1),Object(n["h"])("div",g,[Object(n["h"])("p",O,[Object(n["k"])(F,{icon:["fas","clock"],size:"lg"}),j,Object(n["j"])(Object(n["F"])(t.time),1)]),Object(n["h"])("p",p,[Object(n["k"])(F,{icon:["fas","question"],size:"lg"}),m,Object(n["j"])(Object(n["F"])(t.number_of_questions),1)]),Object(n["h"])("p",y,[Object(n["k"])(F,{icon:["fas","percent"],size:"lg"}),w,Object(n["j"])(Object(n["F"])(t.required_score_to_pass),1)]),Object(n["h"])("p",S,[Object(n["k"])(F,{icon:["fas","book"],size:"lg"}),z,Object(n["j"])(Object(n["F"])(t.category),1)])])])]),k])})),128))])])}r("d3b7"),r("159b"),r("caad"),r("2532"),r("25f0");var Q=r("42a2"),q={name:"QuizList",data:function(){return{quizes:this.$store.getters.getQuizes,searchOption:""}},methods:{generateQuizes:function(){var t=this;this.searchedQuizes=[],this.quizes.forEach((function(e){Q["a"].state.searchResults.forEach((function(r){Q["a"].state.searchIn.includes("categories")&&String(e.category).toLowerCase()===r&&!t.searchedQuizes.includes(e)&&t.searchedQuizes.push(e),Q["a"].state.searchIn.includes("names")&&String(e.title).toLowerCase()===r.toString()&&!t.searchedQuizes.includes(e)&&t.searchedQuizes.push(e)})),0!==Q["a"].state.searchIn.length||t.searchedQuizes.includes(e)||t.searchedQuizes.push(e)}))}},mounted:function(){var t=this;Q["a"].state.modalConfirm=!0,fetch("https://www.quizcity.net/api/quizes/").then((function(t){return t.json()})).then((function(e){return t.quizes=e})).then((function(e){return t.searchedQuizes=e})).then((function(e){t.$store.commit("setListQuizes",e)})).catch((function(t){return console.log(t.message)}))},watch:{"$store.state.searchResults":function(){this.generateQuizes()}}},x=(r("62e7"),r("6b0d")),D=r.n(x);const P=D()(q,[["render",F]]);var $=P,J={name:"Home",components:{QuizList:$},data:function(){return{isVisible:!0,error:Object(n["A"])(null)}},setup:function(){var t=this;Object(n["t"])((function(e){t.error.value=e}))},methods:{change:function(){this.isVisible=!this.isVisible}}};const _=D()(J,[["render",s]]);e["default"]=_},a4d3:function(t,e,r){r("d9f5"),r("b4f8"),r("c513"),r("e9c4"),r("5a47")},b4f8:function(t,e,r){var n=r("23e7"),c=r("d066"),i=r("1a2d"),o=r("577e"),s=r("5692"),u=r("3d87"),a=s("string-to-symbol-registry"),f=s("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=o(t);if(i(a,e))return a[e];var r=c("Symbol")(e);return a[e]=r,f[r]=e,r}})},c513:function(t,e,r){var n=r("23e7"),c=r("1a2d"),i=r("d9b5"),o=r("0d51"),s=r("5692"),u=r("3d87"),a=s("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!u},{keyFor:function(t){if(!i(t))throw TypeError(o(t)+" is not a symbol");if(c(a,t))return a[t]}})},caad:function(t,e,r){"use strict";var n=r("23e7"),c=r("4d64").includes,i=r("d039"),o=r("44d2"),s=i((function(){return!Array(1).includes()}));n({target:"Array",proto:!0,forced:s},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d9f5:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),i=r("c65b"),o=r("e330"),s=r("c430"),u=r("83ab"),a=r("4930"),f=r("d039"),d=r("1a2d"),b=r("3a9b"),l=r("825a"),h=r("fc6a"),v=r("a04b"),g=r("577e"),O=r("5c6c"),j=r("7c73"),p=r("df75"),m=r("241c"),y=r("057f"),w=r("7418"),S=r("06cf"),z=r("9bf2"),k=r("37e8"),F=r("d1e7"),Q=r("cb2d"),q=r("5692"),x=r("f772"),D=r("d012"),P=r("90e3"),$=r("b622"),J=r("e538"),_=r("746f"),A=r("57b9"),C=r("d44e"),E=r("69f3"),L=r("b727").forEach,N=x("hidden"),I="Symbol",R="prototype",V=E.set,B=E.getterFor(I),T=Object[R],H=c.Symbol,M=H&&H[R],W=c.TypeError,G=c.QObject,K=S.f,U=z.f,X=y.f,Y=F.f,Z=o([].push),tt=q("symbols"),et=q("op-symbols"),rt=q("wks"),nt=!G||!G[R]||!G[R].findChild,ct=u&&f((function(){return 7!=j(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(T,e);n&&delete T[e],U(t,e,r),n&&t!==T&&U(T,e,n)}:U,it=function(t,e){var r=tt[t]=j(M);return V(r,{type:I,tag:t,description:e}),u||(r.description=e),r},ot=function(t,e,r){t===T&&ot(et,e,r),l(t);var n=v(e);return l(r),d(tt,n)?(r.enumerable?(d(t,N)&&t[N][n]&&(t[N][n]=!1),r=j(r,{enumerable:O(0,!1)})):(d(t,N)||U(t,N,O(1,{})),t[N][n]=!0),ct(t,n,r)):U(t,n,r)},st=function(t,e){l(t);var r=h(e),n=p(r).concat(bt(r));return L(n,(function(e){u&&!i(at,r,e)||ot(t,e,r[e])})),t},ut=function(t,e){return void 0===e?j(t):st(j(t),e)},at=function(t){var e=v(t),r=i(Y,this,e);return!(this===T&&d(tt,e)&&!d(et,e))&&(!(r||!d(this,e)||!d(tt,e)||d(this,N)&&this[N][e])||r)},ft=function(t,e){var r=h(t),n=v(e);if(r!==T||!d(tt,n)||d(et,n)){var c=K(r,n);return!c||!d(tt,n)||d(r,N)&&r[N][n]||(c.enumerable=!0),c}},dt=function(t){var e=X(h(t)),r=[];return L(e,(function(t){d(tt,t)||d(D,t)||Z(r,t)})),r},bt=function(t){var e=t===T,r=X(e?et:h(t)),n=[];return L(r,(function(t){!d(tt,t)||e&&!d(T,t)||Z(n,tt[t])})),n};a||(H=function(){if(b(M,this))throw W("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=P(t),r=function(t){this===T&&i(r,et,t),d(this,N)&&d(this[N],e)&&(this[N][e]=!1),ct(this,e,O(1,t))};return u&&nt&&ct(T,e,{configurable:!0,set:r}),it(e,t)},M=H[R],Q(M,"toString",(function(){return B(this).tag})),Q(H,"withoutSetter",(function(t){return it(P(t),t)})),F.f=at,z.f=ot,k.f=st,S.f=ft,m.f=y.f=dt,w.f=bt,J.f=function(t){return it($(t),t)},u&&(U(M,"description",{configurable:!0,get:function(){return B(this).description}}),s||Q(T,"propertyIsEnumerable",at,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!a,sham:!a},{Symbol:H}),L(p(rt),(function(t){_(t)})),n({target:I,stat:!0,forced:!a},{useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!u},{create:ut,defineProperty:ot,defineProperties:st,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:dt}),A(),C(H,I),D[N]=!0},e01a:function(t,e,r){"use strict";var n=r("23e7"),c=r("83ab"),i=r("da84"),o=r("e330"),s=r("1a2d"),u=r("1626"),a=r("3a9b"),f=r("577e"),d=r("9bf2").f,b=r("e893"),l=i.Symbol,h=l&&l.prototype;if(c&&u(l)&&(!("description"in h)||void 0!==l().description)){var v={},g=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=a(h,this)?new l(t):void 0===t?l():l(t);return""===t&&(v[e]=!0),e};b(g,l),g.prototype=h,h.constructor=g;var O="Symbol(test)"==String(l("test")),j=o(h.toString),p=o(h.valueOf),m=/^Symbol\((.*)\)[^)]+$/,y=o("".replace),w=o("".slice);d(h,"description",{configurable:!0,get:function(){var t=p(this),e=j(t);if(s(v,t))return"";var r=O?w(e,7,-1):y(e,m,"$1");return""===r?void 0:r}}),n({global:!0,constructor:!0,forced:!0},{Symbol:g})}},e538:function(t,e,r){var n=r("b622");e.f=n},e9c4:function(t,e,r){var n=r("23e7"),c=r("d066"),i=r("2ba4"),o=r("c65b"),s=r("e330"),u=r("d039"),a=r("e8b5"),f=r("1626"),d=r("861d"),b=r("d9b5"),l=r("f36a"),h=r("4930"),v=c("JSON","stringify"),g=s(/./.exec),O=s("".charAt),j=s("".charCodeAt),p=s("".replace),m=s(1..toString),y=/[\uD800-\uDFFF]/g,w=/^[\uD800-\uDBFF]$/,S=/^[\uDC00-\uDFFF]$/,z=!h||u((function(){var t=c("Symbol")();return"[null]"!=v([t])||"{}"!=v({a:t})||"{}"!=v(Object(t))})),k=u((function(){return'"\\udf06\\ud834"'!==v("\udf06\ud834")||'"\\udead"'!==v("\udead")})),F=function(t,e){var r=l(arguments),n=e;if((d(e)||void 0!==t)&&!b(t))return a(e)||(e=function(t,e){if(f(n)&&(e=o(n,this,t,e)),!b(e))return e}),r[1]=e,i(v,null,r)},Q=function(t,e,r){var n=O(r,e-1),c=O(r,e+1);return g(w,t)&&!g(S,c)||g(S,t)&&!g(w,n)?"\\u"+m(j(t,0),16):t};v&&n({target:"JSON",stat:!0,arity:3,forced:z||k},{stringify:function(t,e,r){var n=l(arguments),c=i(z?F:v,null,n);return k&&"string"==typeof c?p(c,y,Q):c}})}}]);
//# sourceMappingURL=home.js.map