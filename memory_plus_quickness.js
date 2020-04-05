grid = document.getElementById("grid"); 
new_grid = grid.getElementsByTagName("div")
var secods = 10
var milli = secods*137.5

function click_two_nums(number, number2){
    $(new_grid[number]).trigger("tap")
    $(new_grid[number2]).trigger("tap")
}

function get_the_right_match() {
	for (n = 0; n < new_grid.length; n++){
		if (new_grid[n].style.color != "blue" && new_grid[n].style.color != "white"){
			for (i = 0; i < new_grid.length; i++){
				if (new_grid[i].style.color != "blue" && new_grid[i].style.color != "white"){
					if (new_grid[n].innerHTML == new_grid[i].innerHTML && i != n){
						save_the_second_number = i
						return [n, i]
					}
				}
			}
		}
	}
}

function main() {
	for(x = 0; x < 1000; x++) {
	setTimeout(function(){ 
		var number = get_the_right_match()
		click_two_nums(number[0], number[1]);
		}, milli*x);
	}
}
main()