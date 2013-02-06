
var mainWidth = 400;
var mainHeight = 400; 
var maxNumber = 10;
 
$(function(){
	console.log("Starting");
	var i = 0;
	var left = 10;
	var top = 10;
	
	for (i = 0; i <5; i++){
		$("#main").append("<div class='number'></div>");
	}
	
	$(".number").each(function(){
		var randomLeft = randomNumberBetween(10,mainWidth-20);
		var randomTop = randomNumberBetween(10,mainWidth-20) ;
		$(this).offset({ top: randomTop, left: randomLeft}).append('<span>'+randomNumberToShow(maxNumber)+'</span>');
		$(this).find('span').hide(2000);
        $(this).click(function(){
            process(this);
        });
	});
	
	$(".number").bind('click',function(){
		checkAndShowNumber(this);
	});
	
	
});


function process(container){
    if(checkNumber(container)){
        //number selected is good.
        $(container).addClass("success");
    }
    else {
        //woops, wrong number :(
        $("div.number").addClass("failed");
        $("span").show();
    }
}

function checkNumber(container) {
    var foundHigherNumber = true;
    $(container).find("span").show();

    var thisNumber = Math.round($(container).find("span").text());
    console.log("Selected : " + thisNumber);

    $(".number > span:hidden").each(function(){
        var hiddenNumber = Math.round($(this).text());
        console.log("Hidden : " + hiddenNumber);
        if(  hiddenNumber < thisNumber) foundHigherNumber = false;
    })

    return foundHigherNumber;
}

function randomNumberBetween (min, max) {
    return Math.random() * (max - min) + min;
}
	
function randomNumberToShow(max) {
	return Math.round( Math.random() * (max));
}

function checkAndShowNumber(box){
	var chosenNumber = $(box).text();
	console.log(chosenNumber);
}