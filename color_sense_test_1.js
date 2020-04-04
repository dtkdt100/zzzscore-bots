grid = document.getElementById("grid"); 
new_grid = grid.getElementsByTagName("div")

grid2 = document.getElementById("mainColor")
new_grid2 = grid2.getElementsByTagName("div")

function get_the_mainColor() {
	return jQuery(grid2).css("background-color")
}

function get_the_same_color_from_body(color) {
	for (var i = 0; i < new_grid.length; i++){
		if (jQuery(new_grid[i]).css("background-color") == color){
			return i
		}
	}
}

function click_the_num(number){
    $(new_grid[number]).trigger("tap")
}

for (var x = 0; x < 5000; x++){
	setTimeout(function(){ 
		var color = get_the_mainColor()
		var number = get_the_same_color_from_body(color)
		click_the_num(number);
		}, 2000*x);
}