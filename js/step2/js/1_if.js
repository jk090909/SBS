// * case 1 
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    
    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// * case2 말일인지 아닌지
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day < 30){
        alert('아직 말일 아님.')
    }
}
function mealTime(){
    var date = new Date();
    var time = date.getTime();

    if(7<= time <=10){
        alert('아침입니다');
    }
}
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요', '홀,수를 구분합니다');

    if(numb%2 == 0){
        alert('짝수입니다.');
    }else{
        alert('홀수입니다.');
    }
}

// * case.6 사용자의 id를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = prompt('사용자의 아이디');
    if(userID == 'Mark'){
        alert('접속승인');
    }else{
        alert('잘못된 ID입니다.');
    }
}
function userinfoCheck(){
    var userID = prompt('사용자의 아이디');
    var userPW = prompt('');
}
// ? if: 만약에 '조건'에 든다면
// ? else if : if가 아닌 만약에 다른 '조건'이라면
// ? else : 위 if들이 아닌 다른 것들이라면.

