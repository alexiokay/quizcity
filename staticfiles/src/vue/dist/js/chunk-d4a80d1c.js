(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4a80d1c"],{"0cb2":function(e,t,n){var r=n("e330"),a=n("7b0b"),i=Math.floor,u=r("".charAt),o=r("".replace),s=r("".slice),d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,c,m){var v=n+e.length,b=r.length,h=l;return void 0!==c&&(c=a(c),h=d),o(m,h,(function(a,o){var d;switch(u(o,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,v);case"<":d=c[s(o,1,-1)];break;default:var l=+o;if(0===l)return a;if(l>b){var m=i(l/10);return 0===m?a:m<=b?void 0===r[m-1]?u(o,1):r[m-1]+u(o,1):a}d=r[l-1]}return void 0===d?"":d}))}},5319:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),i=n("e330"),u=n("d784"),o=n("d039"),s=n("825a"),d=n("1626"),l=n("5926"),c=n("50c4"),m=n("577e"),v=n("1d80"),b=n("8aa5"),h=n("dc4a"),f=n("0cb2"),p=n("14c3"),g=n("b622"),w=g("replace"),j=Math.max,y=Math.min,C=i([].concat),A=i([].push),E=i("".indexOf),I=i("".slice),B=function(e){return void 0===e?e:String(e)},O=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),D=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));u("replace",(function(e,t,n){var i=x?"$":"$0";return[function(e,n){var r=v(this),i=void 0==e?void 0:h(e,w);return i?a(i,e,r,n):a(t,m(r),e,n)},function(e,a){var u=s(this),o=m(e);if("string"==typeof a&&-1===E(a,i)&&-1===E(a,"$<")){var v=n(t,u,o,a);if(v.done)return v.value}var h=d(a);h||(a=m(a));var g=u.global;if(g){var w=u.unicode;u.lastIndex=0}var O=[];while(1){var x=p(u,o);if(null===x)break;if(A(O,x),!g)break;var D=m(x[0]);""===D&&(u.lastIndex=b(o,c(u.lastIndex),w))}for(var q="",k=0,L=0;L<O.length;L++){x=O[L];for(var $=m(x[0]),Q=j(y(l(x.index),o.length),0),M=[],N=1;N<x.length;N++)A(M,B(x[N]));var R=x.groups;if(h){var T=C([$],M,Q,o);void 0!==R&&A(T,R);var H=m(r(a,void 0,T))}else H=f($,o,Q,M,R,a);Q>=k&&(q+=I(o,k,Q)+H,k=Q+$.length)}return q+I(o,k)}]}),!D||!O||x)},"590c":function(e,t,n){"use strict";n.r(t);var r=n("f2bf"),a={action:"/api/details/",method:"post"},i=Object(r["j"])(" Quiz Name: "),u=Object(r["h"])("input",{name:"Title",id:"Title",value:"",placeholder:"type title"},null,-1),o=Object(r["j"])(),s=Object(r["h"])("br",null,null,-1),d=Object(r["j"])(" Description: "),l=Object(r["h"])("input",{name:"Description",id:"Description",value:"",placeholder:"type description"},null,-1),c=Object(r["j"])(),m=Object(r["h"])("br",null,null,-1),v=Object(r["j"])(" Image: "),b=Object(r["h"])("input",{type:"file",name:"Image",id:"Image",value:""},null,-1),h=Object(r["j"])(),f=Object(r["h"])("br",null,null,-1),p=Object(r["j"])(" Category "),g={name:"Category",id:"Category",value:""},w=["value"],j=Object(r["j"])(),y=Object(r["h"])("br",null,null,-1),C=Object(r["j"])(),A=Object(r["h"])("br",null,null,-1),E=Object(r["h"])("div",{id:"questions"},null,-1),I=Object(r["j"])(),B=Object(r["h"])("br",null,null,-1),O={class:"questionDiv",id:"questionDiv"},x=Object(r["i"])(' Question: <input id="questionValue"> <br><br><div id="answer 1" class="answer">Answer 1 <input class="AnswerInput" id="AnswerId 1"><div class="form-check" style="float:right;"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Correct </label></div></div><div id="answer 2" class="answer">Answer 2 <input class="AnswerInput" id="AnswerId 2"><div class="form-check" style="float:right;"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> Correct </label></div></div>',7);function D(e,t,n,D,q,k){return Object(r["u"])(),Object(r["g"])("div",null,[Object(r["h"])("form",a,[i,u,o,s,d,l,c,m,v,b,h,f,p,Object(r["h"])("select",g,[(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["A"])(q.categories,(function(e){return Object(r["u"])(),Object(r["g"])("option",{value:e.category,key:e.id},Object(r["E"])(e.category),9,w)})),128))]),j,y,C,A,E]),I,B,Object(r["h"])("div",O,[x,Object(r["h"])("button",{type:"button",onClick:t[0]||(t[0]=function(e){return k.addAnswer()}),class:"btn btn-primary",id:"addAnswerButton"},"+"),Object(r["h"])("button",{disabled:"true",type:"button",onClick:t[1]||(t[1]=function(e){return k.removeAnswer()}),class:"btn btn-primary",id:"removeAnswerButton"},"-")]),Object(r["h"])("button",{onClick:t[2]||(t[2]=function(e){return k.addQuestion()}),class:"btn btn-primary"},"Add Question")])}n("ac1f"),n("5319"),n("b0c0"),n("d3b7");var q={name:"AddQuiz",data:function(){return{categories:[],questionDivs:1,buttonsCount:2}},methods:{addAnswer:function(){if(this.buttonsCount<3){this.buttonsCount++;var e=document.getElementById("answer 1"),t=document.getElementById("questionDiv"),n=document.getElementById("removeAnswerButton"),r=document.getElementById("addAnswerButton");n.disabled=!1;var a=e.cloneNode(!0);a.id="answer "+this.buttonsCount,a.innerHTML=a.innerHTML.replace(/1/g,"3");var i=document.createElement("input");i.id="AnswerId "+this.buttonsCount,i.classList.add("AnswerInput"),t.insertBefore(a,r),console.log(this.buttonsCount)}else if(3===this.buttonsCount){this.buttonsCount++;var u=document.getElementById("answer 1"),o=document.getElementById("questionDiv"),s=document.getElementById("addAnswerButton"),d=u.cloneNode(!0);d.id="answer "+this.buttonsCount,d.innerHTML=d.innerHTML.replace(/1/g,"4");var l=document.createElement("input");l.id="AnswerId "+this.buttonsCount,l.classList.add("AnswerInput"),o.insertBefore(d,s),s.disabled=!0,console.log(this.buttonsCount)}},removeAnswer:function(){if(this.buttonsCount<4){var e=document.getElementById("answer 3");e.remove(),this.buttonsCount--;var t=document.getElementById("removeAnswerButton");t.disabled=!0}else if(4===this.buttonsCount){var n=document.getElementById("answer 4"),r=document.getElementById("addAnswerButton");r.disabled=!1,n.remove(),this.buttonsCount--}},addQuestion:function(){var e=document.getElementsByClassName("AnswerInput"),t=document.createElement("input"),n=document.getElementById("questions"),r=document.getElementById("questionValue"),a=document.createElement("LABEL");a.textContent="Question: ";var i=document.createElement("LABEL");i.textContent="Answer 1: ";var u=document.createElement("LABEL");u.textContent="Answer 2: ";var o=document.createElement("LABEL");o.textContent="Answer 3: ";var s=document.createElement("LABEL");s.textContent="Answer 4: ";var d=document.getElementById("AnswerId 1"),l=document.getElementById("AnswerId 2");t.id="question",t.name="question",t.value=r.value;var c=document.createElement("input");c.id="answer_one",c.name="answer",c.value=d.value;var m=document.createElement("input");if(m.id="answer_two",m.name="answer",m.value=l.value,n.appendChild(a),n.appendChild(t),n.appendChild(i),n.appendChild(c),n.appendChild(u),n.appendChild(m),console.log("answerInputs len: "+e.length),e.length>2){var v=document.getElementById("AnswerId 3"),b=document.createElement("input");b.id="answer_three",b.name="answer",b.value=v.value,n.appendChild(o),n.appendChild(b)}if(e.length>3){var h=document.getElementById("AnswerId 4"),f=document.createElement("input");f.id="answer_four",f.name="answer",f.value=h.value,n.appendChild(s),n.appendChild(f)}r.value="";for(var p=0,g=e.length;p<g;p++)e[p].value=""},addAnswerx:function(e){var t=document.getElementById("answer 1"),n=t.cloneNode(!0);n.id="answer "+this.answerButtons;var r=document.getElementById("questionDiv "+e.target.id);r.insertBefore(n,r.lastChild)},addQuestionx:function(){this.questionDivs++;var e=document.getElementById("questionDiv 1"),t=e.cloneNode(!0),n=document.getElementById("1"),r=n.cloneNode(!0);r.id=this.questionDivs,r.addEventListener("click",this.addAnswer,!1),t.replaceChild(r,t.lastChild),t.id="questionDiv "+String(this.questionDivs);var a=document.getElementById("form");a.appendChild(t)}},mounted:function(){var e=this;fetch("https://www.quizcity.net/api/categories/").then((function(e){return e.json()})).then((function(t){return e.categories=t})).catch((function(e){return console.log(e.message)}))}},k=(n("be5a"),n("6b0d")),L=n.n(k);const $=L()(q,[["render",D]]);t["default"]=$},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},a904:function(e,t,n){},be5a:function(e,t,n){"use strict";n("a904")}}]);
//# sourceMappingURL=chunk-d4a80d1c.js.map