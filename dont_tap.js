grid = document.getElementById("grid"); 
new_grid = grid.getElementsByTagName("div")
var white = "rgb(255, 255, 255)"
var black = "rgb(0, 0, 0)"

function click_the_num(number){
    $(new_grid[number]).trigger("tap")
}

function get_the_black_square(){
	for (var i = 0; i < 25; i++){
		if(jQuery(new_grid[i]).css("background-color") == black){
			return i
		}
	}
}

for(x = 0; x < 1000; x++) {
	setTimeout(function(){ 
		var number = get_the_black_square()
		click_the_num(number);
		}, 200*x);
}