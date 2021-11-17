$(document).ready(function(){
    // *case.1 x축 원움직이기
    // moveCircle();
    $("#btnMoveCircle").click(moveCircle);

    $('#btnDetailMove').click(moveCircleDetail);

});
// *case.1 
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt('0부터 380이하의 숫자만 입력하세요.');
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css('left', xpos);
    }else{
        alert('잘못된 수치입니다.');
    }
}
function moveCircleDetail(){
    var $circleDetail = $('.circleDetail');
    var xpos = $('#xpos');
    var ypos = $('#ypos');

    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    if(xpos >= 0 && xpos <= 380){
        $circleDetail.css('left',xpos);
    }else if
        (ypos >= 0 && ypos <= 380){
            $circleDetail.css('top',ypos);
        }else{
            alert('잘못된 입력값입니다.');
        }
    }
