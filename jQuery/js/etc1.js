$(document).ready(function(){
    //*case.1
    var $divs = $("div");
    $divs.css('color','#f00');//? css를 적용하는 함수 css([propName],[propValue]); 

    // *case.2
    $("#btnCheck").click(sayHello);
    /*
        $("#btnCheck").click(function(){
            alert('hello');
        });
    */
    $('#btnAddBorder').click(addBorder);

    $('#btnTextChange').click(textChange);
});
function sayHello(){
    alert('hello');
}

// * case.3
function addBorder(){
    $('#panel').css('border','5px solid black');
}

function textChange(){
    $('#panel2').css({
        'font-size' : '25px',
        'color' : 'green',
        'font-weight' : 'bold'
    });
}