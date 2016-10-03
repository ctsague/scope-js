
var x = "hello";


function l() {
	
	var x ;
	function j() {
		x = 8;
	}
	j();
	return x;
}

//console.log(x);
console.log(l());
console.log(x);
