// ==UserScript==
// @name         For sshipduck who explores galaxy
// @namespace    smilehoho
// @version      1.00
// @description  fuck google translate
// @author       smilehoho
// @match        https://ncode.syosetu.com/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();

/*
document.addEventListener("DOMContentLoaded", function(){
     console.log("DOMContentLoaded");
});
*/

/*
"…".charCodeAt(0)
String.fromCharCode(8230)

".".charCodeAt(0)
String.fromCharCode(46)

"「".charCodeAt(0)
String.fromCharCode(12300)

"」".charCodeAt(0)
String.fromCharCode(12301)

<span class="notranslate"> </span>
<span translate="no"> </span>
*/

var bst1= "<span class="+"\""+"notranslate"+"\""+">";
var ast1= "</span>";

var rest1 = String.fromCharCode(8230)+"+";
var re1 = new RegExp(rest1,"g");

window.addEventListener("load", (e) => {

  console.log("123");

  const whl = document.body.getElementsByTagName("*");

  const leng = whl.length - 1 ;
/*
   for(let i=0; i<=leng; i++){
var targ = document.body.getElementsByTagName("*")[i];
targ.innerText = targ.innerText.replace(rest1 , String.fromCharCode(8230));

}
*/

   for(let i=0; i<=leng; i++){


   var targ = whl[i];



       if(typeof targ == 'undefined'){continue;}
       if(targ.tagName=="P" || targ.tagName=="p"){



   targ.innerText = targ.innerText.replace(re1 , String.fromCharCode(8230));

       // 일본어 문자 … 여러개를 한개의 …로 치환



   targ.innerText = targ.innerText.replace(re1,String.fromCharCode(46)+String.fromCharCode(46)+String.fromCharCode(46));


       //일본어 문자 …를 한국식 ... 점 3개로 치환



      // targ.innerText = targ.innerText.replace("김치","상추");

       var rwres1 = targ.innerHTML.matchAll(String.fromCharCode(12300));
       var res1 = [...rwres1];
       var rwres2 = targ.innerHTML.matchAll(String.fromCharCode(12301));
       var res2 = [...rwres2];

       if(res1==[]&&res2==[]){continue;}
           else if(res1!=[]&&res2==[]){

            targ.innerHTML = spankickin(res1,targ.innerHTML,bst1,ast1);


           }
           
           else if(res1==[]&&res2!=[]){

            targ.innerHTML = spankickin(res2,targ.innerHTML,bst1,ast1);


           }
           else{
               
               var tempst = spankickin(res1,targ.innerHTML,bst1,ast1);
               
               rwres2 = tempst.matchAll(String.fromCharCode(12301));
               res2 = [...rwres2];
               targ.innerHTML = spankickin(res2,tempst,bst1,ast1);
               
               
           }//endofif






       }//endifp

    }//endfor

      console.log("456");

});


function spankickin(resarr,mainst,b="<span class="+"\""+"notranslate"+"\""+">",a= "</span>"){

    var ln=resarr.length;
    var inarr=resarr;
    var rtnst = mainst;

for(var i=0;i<ln;i++){

var tgtindex =inarr[ln-1-i].index;
    
rtnst = rtnst.slice(0,tgtindex) + b + rtnst.slice(tgtindex,tgtindex+1) + a + rtnst.slice(tgtindex+1) ;


}
    //아 시부럴 그냥 replace 쓸껄 

return rtnst;
}

/*
역시 나야 이정도는 디버그 없이 원큐에 되지 암 일년만에 다시 JS잡으려니 바닐라함수 다까먹어서 그거 뒤지느라 반나절이나 걸리지
대충 HTMLDoM 문자열 수정정도는 디버그없이 쭉 쓰면 원큐에 된다는 말씀.
근데 진짜 내가 프로그래밍학과도 아니고 전기공학과 나와서 그것도 4학점 이상 우수졸업에 기사자격증 2개나 따고 토익 930점에 토익스피킹까지 
얻어놔도 졸업 2년간 취업 전부 떨어지고 이제 3년째 백수인게 말이 되냐 진짜??? 그래서 졸업 1년차에 배 벅벅긁으면서 자바스크립트 공짜사이트
몇번보며 흥미위주로 셀프독학한걸로 지금 백수 3년째 4월달에 일본 syosetu 소설사이트 구글번역 퀄리티에 빡쳐서 그 라노벨 웹소설 보려고 
이런 자바스크립트나 쓰고 앉아있는게 말이냐 되냐고.
돌아가시겠네.
*/
