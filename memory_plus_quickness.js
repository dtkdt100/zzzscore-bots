grid = document.getElementById("grid"); 
new_grid = grid.getElementsByTagName("div")
var hi = 0
var counter = 0

function click_two_nums(number){
    $(new_grid[number]).trigger("tap")
}

function get_the_right_match(counter) {
	if (counter%2 == 0){
		for (n = 0; n < new_grid.length; n++){
			if (new_grid[n].style.color != "blue" && new_grid[n].style.color != "white"){
				for (i = 0; i < new_grid.length; i++){
					if (new_grid[i].style.color != "blue" && new_grid[i].style.color != "white"){
						if (new_grid[n].innerHTML == new_grid[i].innerHTML && i != n){
							hi = i
							return n
						}
					}
				}
			}
		}
	}
	else {
		return hi
	}
}

function main() {
	for(x = 0; x < 1000; x++) {
	setTimeout(function(){ 
		var number = get_the_right_match(counter)
		click_the_num(number);
		counter += 1
		}, 200*x);
	}
}
