grid = document.getElementById("grid"); 
new_grid = grid.getElementsByTagName("div")
var seconds = 8
var milli = seconds*20.49

function return_the_number(){
	var n;
	var i;
	var counter;
	for (n = 0; n < 25; n++){
		counter = 0;
		for (i = 0; i < 25; i++){
			if (new_grid[n].textContent != "" ||  new_grid[n].textContent != ""){
				if (parseInt(new_grid[n].textContent) <= parseInt(new_grid[i].textContent)) {
					counter += 1;
				}
			}
		}
		if (counter == get_the_grids_length() ){
			return n;
		}
	}
}

function click_the_num(number){
    $(new_grid[number]).trigger("tap")
}

function get_the_grids_length(){
	var count = 0;
	for (var i = 0; i < 25; i++){
		if (new_grid[i].textContent == ""){
			count += 1;
		}
	}
	return (25 - count )
}
for(x = 0; x < 50; x++) {
	setTimeout(function(){ 
		var grid_length = get_the_grids_length()
		var number = return_the_number(grid_length);
		click_the_num(number);
		}, milli*x);
}
