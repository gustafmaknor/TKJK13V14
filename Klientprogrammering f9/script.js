
(function(globalScope){
	function animate(direction){
		if(direction=="left"){
			moveLeft();
		}
		else{
			moveRigth();
		}
	}
	function moveLeft(){
		alert("moving Left");
	}
	function moveRigth(){
		alert("moving rigth");
	}
	globalScope.animate=animate;
})(this);