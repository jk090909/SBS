/*
    ? string
    * 특정 문자열을 다른 문자열로 치환하거나 삭제, 입력받은 데이터의 불필요요소(공백..)등을 없애기 위해.
*/

// ? 문자열 만드는 방법.

/*
    ! 리터럴 방식 - var str = "Hello";
    ! StringClass 객체 생성방식 var str = new String("Hello");
    ? 리터럴방식을 사용해도 js가 해석할 때 자동 변환.
    * ex> alert("hello".length); => alert(new String("hello").length);
*/

// *case.1 입력받은 문자열 길이 알아내기.(length)
function leng(){
    var str = prompt("문자를 입력");
    console.log("문자열 길이는 = " + str.length);
}

/*
    ? 특정 위치의 문자 구하기(charAt)
    ! charAt(indexNumber) :
    ! 매개변수 - index 문자열 위치 index value(index = 0부터 시작)
    ? ex > var ch = "ABCDEF"; charAt(0) = A, charAt(5) = F.
    ! return -> index위치의 문자.
*/

// *case. 3 #panel에 입력받은 문자열을 1초마다 한 문자씩 출력. 다되면 "종료" 메시지 출력.
function print1ch(){
    var str = prompt("문자를 입력");
    var charCount = 0;

    var timerID = setInterval(function(){
        $("#panel").text(str.charAt(charCount));
        charCount ++;

        // todo. 종료구문.
        if(charCount > str.length){
            clearInterval(timerID);
            alert('종료.');
        }

    },500);
}

/*
    ?문자(열) 위치 찾기 (indexof)
    ! indexof(searchValue, start)
    ! 매개변수 = searchValue : 찾는 문자열, start: 시작위치(default 0)
    ! 리턴값 = 찾는 문자열의 위치 값. 못찾는경우 -1
*/

// *case.4 문자열 입력받고 example 문자 포함 여부 판단. 참일 경우 몇번째 위치인지 출력.
// ! 거짓일 경우 '존재하지 않습니다.' 출력.

function findString(){
    var insertWord = window.prompt('문자를 입력');
    var finder = insertWord.indexOf('example');
    if(finder >= 0){ //? 찾았다면 위치값을 리턴했을것이고 -> 0보다크다.
        alert(finder + '번째 위치에 있습니다.');
    }else{ //? 못찾으면 위치값이 리턴되지 않음.
        alert("존재하지 않습니다.");
    }
}
/*
    ? 특정 위치에 문자 추가.
    ! slice(start, end)
    ! 매개변수 = start : 문자열 시작 위치, end : 문자열 끝 위치
    ! 리턴값 = 지정된 문자열(의미상 잘라내기 - 복사).
    
    ! substr(start, length)
    ! 매개변수 = start : 문자열 시작 위치, length : 시작위치부터 복사할 길이.
    ! 리턴값 = 지정한 문자열
*/
// *case.5 문자열 일부 잘라내보기.
function sliceText(){
    var str = "Abcdef";
    var strSlice = str.slice(2,4); //? 이해가 어려울 경우 문자로 세지말고 문자사이 커서를 셀 것.
    console.log(str);
    console.log(strSlice); // ! cd 출력
}
// *case.6 문자열 일부 잘라내보기.(substr)
function substrText(){
    var str = "Abcdef";
    var strSubstr = str.substr(2,4);
    console.log(str);
    console.log(strSubstr); // ! cdef 출력
}
// todo. slice, subStr 각각을 활용하여 이름을 마저 완성시키기.
// !slice
function sliceAddText(){
    var str = "Mak"; //? Mark
    var strSlice = str.slice(0,2) + "r" + str.slice(2,3);
    console.log(strSlice);
}
// !substr
function subStrAddText(){
    var str = "MakStark"; //? Mark
    var strSubstr = str.substr(0,2) + "r" + str.substr(2,6);
    console.log(strSubstr);
}
/*
    ? 특정 위치 문자 변경
    ! replace(searchvalue, newvalue)
    ! 매개변수 = searchvalue = 찾는 문자, newvalue : 교체 문자.
    ! 리턴값 = 찾는 문자를 교체문자로 변경.
*/
// *case.7 다음 문자열의 ?를 자신의 이름으로 변경.
function changeName(){
    var data = "hi, ?. welcome";
    var result = data.replace("?", "Mark");
    alert(result);
}
// todo. 다음 변수에서 "-" 제거.

function deleteText(){
    var data = "mark-II";
    var result = data.slice(0,4) + data.slice(5,7);
    //! alert으로출력
    alert(result);
}

// *case.8 세자리수마다 , 추가 기능.

$(document).ready(function(){
    var $numbIn = $("#numbInput");
    var $numbOut = $("#numbOutput");

    $("#confirm").click(function(){
        var numbVal = $numbIn.val();
        var result = money(numbVal);
        $numbOut.html(numbVal + "=>" + result);
    });
});

function money(str){
    if(str.length <= 3){
        return str;
    }

    var loopCount = Math.floor((str.length - 1) / 3);

    /*
        ? 반복횟수
        * ex> 123456789= length 9. 9/3 = 3floor 내림정수값 3.
        * -1 = length 8. 8/3 = 2.666.... floor 내림정수값 2.
    */
    var result = ''; //? 최종결과 담을 변수

    for(var index = 0; index < loopCount; index++){
        var strLength = str.length; //? 입력받은 값 길이.
        var cutStr = str.substr(strLength-3, strLength); //?
        result = ","+cutStr+result; //?
        str = str.slice(0, strLength-3); //?
        /*
            ? 중간에 , 삽입.
            * ex> 123456789
            * 1. result = ,789 + "";, str = 123456;
            * 2. result = ,456 + ,789;, str = 123;
            * fin. result = ,456,789; + str = 123;
        */
    }
    result = str + result; //? 123 + ,456,789; 

    return result; //? 최종결과 return(호출부)
}