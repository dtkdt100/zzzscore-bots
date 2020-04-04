grid = document.getElementById("grid"); 
new_grid = grid.getElementsByTagName("div")

function get_the_different_color() {
	for (i = 0; i < new_grid.length; i++){
		var counter = 0
		for (n = 0; n < new_grid.length; n++){
			if (jQuery(new_grid[i]).css("background-color") != jQuery(new_grid[n]).css("background-color")){
				counter += 1 
			}
		}
		if (counter == new_grid.length - 1)	{
			return i
		}
	}
}

function click_the_num(number){
    $(new_grid[number]).trigger("tap")
}

function main() {
	for (var x = 0; x < 5000; x++){
	setTimeout(function(){ 
		var number = get_the_different_color()
		click_the_num(number);
		}, 100*x);
	}
}
