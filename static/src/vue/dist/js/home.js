(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"057f":function(t,e,n){var r=n("c6b6"),i=n("fc6a"),c=n("241c").f,o=n("4dae"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return o(s)}};t.exports.f=function(t){return s&&"Window"==r(t)?a(t):c(i(t))}},2532:function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),c=n("5a34"),o=n("1d80"),s=n("577e"),a=n("ab13"),u=i("".indexOf);r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~u(s(o(this)),s(c(t)),arguments.length>1?arguments[1]:void 0)}})},"3edf":function(t,e,n){},"428f":function(t,e,n){var r=n("da84");t.exports=r},"4dae":function(t,e,n){var r=n("da84"),i=n("23cb"),c=n("07fa"),o=n("8418"),s=r.Array,a=Math.max;t.exports=function(t,e,n){for(var r=c(t),u=i(e,r),f=i(void 0===n?r:n,r),l=s(a(f-u,0)),d=0;u<f;u++,d++)o(l,d,t[u]);return l.length=d,l}},"6cdb":function(t,e,n){"use strict";n("3edf")},"746f":function(t,e,n){var r=n("428f"),i=n("1a2d"),c=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:c.f(t)})}},9060:function(t,e,n){"use strict";n.r(e);var r=n("f2bf"),i={id:"app"};function c(t,e,n,c,o,s){var a=Object(r["z"])("QuizList");return Object(r["s"])(),Object(r["f"])("div",i,[Object(r["j"])(a)])}n("a4d3"),n("e01a");var o={class:"d-flex justify-content-center"},s={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 w-100",id:"quizRow"},a={class:"card"},u=["src"],f=Object(r["g"])("div",{class:"middle"},[Object(r["g"])("div",{class:"text"},"Play")],-1),l={class:"card-title"},d={class:"card-body"},b={class:"card-description"},g={classs:"card-footer"},h={class:"block"},O=Object(r["g"])("br",null,null,-1),v={class:"block"},j=Object(r["g"])("br",null,null,-1),p={class:"block"},m=Object(r["g"])("br",null,null,-1),y={class:"block"},w=Object(r["g"])("br",null,null,-1),z=Object(r["g"])("br",null,null,-1);function S(t,e,n,i,c,S){var Q=Object(r["z"])("router-link"),k=Object(r["z"])("font-awesome-icon");return Object(r["s"])(),Object(r["f"])("div",o,[Object(r["g"])("div",s,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.searchedQuizes,(function(t){return Object(r["s"])(),Object(r["f"])("div",{id:"quiz-container",class:"col",key:t.id},[Object(r["g"])("div",a,[Object(r["j"])(Q,{to:{name:"QuizDetails",params:{slug:t.slug}}},{default:Object(r["E"])((function(){return[Object(r["g"])("img",{src:"".concat(t.image),class:"image card-img-top",alt:""},null,8,u),f,Object(r["g"])("h5",l,Object(r["B"])(t.title),1)]})),_:2},1032,["to"]),Object(r["g"])("div",d,[Object(r["g"])("p",b,Object(r["B"])(t.description),1),Object(r["g"])("div",g,[Object(r["g"])("p",h,[Object(r["j"])(k,{icon:["fas","clock"],size:"lg"}),O,Object(r["i"])(Object(r["B"])(t.time),1)]),Object(r["g"])("p",v,[Object(r["j"])(k,{icon:["fas","question"],size:"lg"}),j,Object(r["i"])(Object(r["B"])(t.number_of_questions),1)]),Object(r["g"])("p",p,[Object(r["j"])(k,{icon:["fas","percent"],size:"lg"}),m,Object(r["i"])(Object(r["B"])(t.required_score_to_pass),1)]),Object(r["g"])("p",y,[Object(r["j"])(k,{icon:["fas","book"],size:"lg"}),w,Object(r["i"])(Object(r["B"])(t.category),1)])])])]),z])})),128))])])}n("d3b7"),n("159b"),n("caad"),n("2532"),n("25f0");var Q=n("42a2"),k={name:"QuizList",components:{},data:function(){return{quizes:[],searchedQuizes:[],searchOption:""}},methods:{generateQuizes:function(){var t=this;this.searchedQuizes=[],this.quizes.forEach((function(e){Q["a"].state.searchResults.forEach((function(n){Q["a"].state.searchIn.includes("categories")&&String(e.category).toLowerCase()===n&&!t.searchedQuizes.includes(e)&&t.searchedQuizes.push(e),Q["a"].state.searchIn.includes("names")&&String(e.title).toLowerCase()===n.toString()&&!t.searchedQuizes.includes(e)&&t.searchedQuizes.push(e)})),0!==Q["a"].state.searchIn.length||t.searchedQuizes.includes(e)||t.searchedQuizes.push(e)}))}},mounted:function(){var t=this;Q["a"].state.modalConfirm=!0,fetch("https://www.quizcity.net/api/quizes/").then((function(t){return t.json()})).then((function(e){return t.quizes=e})).then((function(e){return t.searchedQuizes=e})).catch((function(t){return console.log(t.message)}))},watch:{"$store.state.searchResults":function(){this.generateQuizes()}}},q=(n("6cdb"),n("6b0d")),P=n.n(q);const x=P()(k,[["render",S]]);var B=x,E={name:"Home",components:{QuizList:B},data:function(){return{isVisible:!0}},methods:{change:function(){this.isVisible=!this.isVisible}}};const _=P()(E,[["render",c]]);e["default"]=_},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),c=n("d066"),o=n("2ba4"),s=n("c65b"),a=n("e330"),u=n("c430"),f=n("83ab"),l=n("4930"),d=n("d039"),b=n("1a2d"),g=n("e8b5"),h=n("1626"),O=n("861d"),v=n("3a9b"),j=n("d9b5"),p=n("825a"),m=n("7b0b"),y=n("fc6a"),w=n("a04b"),z=n("577e"),S=n("5c6c"),Q=n("7c73"),k=n("df75"),q=n("241c"),P=n("057f"),x=n("7418"),B=n("06cf"),E=n("9bf2"),_=n("37e8"),L=n("d1e7"),N=n("f36a"),C=n("6eeb"),I=n("5692"),J=n("f772"),R=n("d012"),V=n("90e3"),$=n("b622"),A=n("e538"),D=n("746f"),F=n("d44e"),H=n("69f3"),M=n("b727").forEach,T=J("hidden"),W="Symbol",G="prototype",K=$("toPrimitive"),U=H.set,X=H.getterFor(W),Y=Object[G],Z=i.Symbol,tt=Z&&Z[G],et=i.TypeError,nt=i.QObject,rt=c("JSON","stringify"),it=B.f,ct=E.f,ot=P.f,st=L.f,at=a([].push),ut=I("symbols"),ft=I("op-symbols"),lt=I("string-to-symbol-registry"),dt=I("symbol-to-string-registry"),bt=I("wks"),gt=!nt||!nt[G]||!nt[G].findChild,ht=f&&d((function(){return 7!=Q(ct({},"a",{get:function(){return ct(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=it(Y,e);r&&delete Y[e],ct(t,e,n),r&&t!==Y&&ct(Y,e,r)}:ct,Ot=function(t,e){var n=ut[t]=Q(tt);return U(n,{type:W,tag:t,description:e}),f||(n.description=e),n},vt=function(t,e,n){t===Y&&vt(ft,e,n),p(t);var r=w(e);return p(n),b(ut,r)?(n.enumerable?(b(t,T)&&t[T][r]&&(t[T][r]=!1),n=Q(n,{enumerable:S(0,!1)})):(b(t,T)||ct(t,T,S(1,{})),t[T][r]=!0),ht(t,r,n)):ct(t,r,n)},jt=function(t,e){p(t);var n=y(e),r=k(n).concat(zt(n));return M(r,(function(e){f&&!s(mt,n,e)||vt(t,e,n[e])})),t},pt=function(t,e){return void 0===e?Q(t):jt(Q(t),e)},mt=function(t){var e=w(t),n=s(st,this,e);return!(this===Y&&b(ut,e)&&!b(ft,e))&&(!(n||!b(this,e)||!b(ut,e)||b(this,T)&&this[T][e])||n)},yt=function(t,e){var n=y(t),r=w(e);if(n!==Y||!b(ut,r)||b(ft,r)){var i=it(n,r);return!i||!b(ut,r)||b(n,T)&&n[T][r]||(i.enumerable=!0),i}},wt=function(t){var e=ot(y(t)),n=[];return M(e,(function(t){b(ut,t)||b(R,t)||at(n,t)})),n},zt=function(t){var e=t===Y,n=ot(e?ft:y(t)),r=[];return M(n,(function(t){!b(ut,t)||e&&!b(Y,t)||at(r,ut[t])})),r};if(l||(Z=function(){if(v(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?z(arguments[0]):void 0,e=V(t),n=function(t){this===Y&&s(n,ft,t),b(this,T)&&b(this[T],e)&&(this[T][e]=!1),ht(this,e,S(1,t))};return f&&gt&&ht(Y,e,{configurable:!0,set:n}),Ot(e,t)},tt=Z[G],C(tt,"toString",(function(){return X(this).tag})),C(Z,"withoutSetter",(function(t){return Ot(V(t),t)})),L.f=mt,E.f=vt,_.f=jt,B.f=yt,q.f=P.f=wt,x.f=zt,A.f=function(t){return Ot($(t),t)},f&&(ct(tt,"description",{configurable:!0,get:function(){return X(this).description}}),u||C(Y,"propertyIsEnumerable",mt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:Z}),M(k(bt),(function(t){D(t)})),r({target:W,stat:!0,forced:!l},{for:function(t){var e=z(t);if(b(lt,e))return lt[e];var n=Z(e);return lt[e]=n,dt[n]=e,n},keyFor:function(t){if(!j(t))throw et(t+" is not a symbol");if(b(dt,t))return dt[t]},useSetter:function(){gt=!0},useSimple:function(){gt=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!f},{create:pt,defineProperty:vt,defineProperties:jt,getOwnPropertyDescriptor:yt}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:wt,getOwnPropertySymbols:zt}),r({target:"Object",stat:!0,forced:d((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(m(t))}}),rt){var St=!l||d((function(){var t=Z();return"[null]"!=rt([t])||"{}"!=rt({a:t})||"{}"!=rt(Object(t))}));r({target:"JSON",stat:!0,forced:St},{stringify:function(t,e,n){var r=N(arguments),i=e;if((O(e)||void 0!==t)&&!j(t))return g(e)||(e=function(t,e){if(h(i)&&(e=s(i,this,t,e)),!j(e))return e}),r[1]=e,o(rt,null,r)}})}if(!tt[K]){var Qt=tt.valueOf;C(tt,K,(function(t){return s(Qt,this)}))}F(Z,W),R[T]=!0},caad:function(t,e,n){"use strict";var r=n("23e7"),i=n("4d64").includes,c=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),c=n("da84"),o=n("e330"),s=n("1a2d"),a=n("1626"),u=n("3a9b"),f=n("577e"),l=n("9bf2").f,d=n("e893"),b=c.Symbol,g=b&&b.prototype;if(i&&a(b)&&(!("description"in g)||void 0!==b().description)){var h={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(g,this)?new b(t):void 0===t?b():b(t);return""===t&&(h[e]=!0),e};d(O,b),O.prototype=g,g.constructor=O;var v="Symbol(test)"==String(b("test")),j=o(g.toString),p=o(g.valueOf),m=/^Symbol\((.*)\)[^)]+$/,y=o("".replace),w=o("".slice);l(g,"description",{configurable:!0,get:function(){var t=p(this),e=j(t);if(s(h,t))return"";var n=v?w(e,7,-1):y(e,m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:O})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=home.js.map