grid = document.getElementById("grid"); 
new_grid = grid.getElementsByTagName("div")
var seconds = 10
var milli = seconds *3.4
var white = "rgb(255, 255, 255)"
var black = "rgb(0, 0, 0)"

function click_the_num(number){
    $(new_grid[number]).trigger("tap")
}

function get_the_black_square(){
	for (var i = 0; i < new_grid.length; i++){
		if(jQuery(new_grid[i]).css("background-color") == black){
			return i
		}
	}
}

for(x = 0; x < milli; x++) {
	setTimeout(function(){ 
		var number = get_the_black_square()
		click_the_num(number);
		}, 220*x);
}