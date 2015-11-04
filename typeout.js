//Constructor that sets a DOM element as target
var Typee = function(el) {
	if ( typeof(el) !== "string" || ( el[0] !== "." && el[0] !== "#" ) ) {
		throw "Typee must be an html element in string form";
	}
	//store elements in an array, so class can be used
	this.docTargets = [];

	if ( el[0] === "." ) {
		this.docTargets = document.getElementsByClassName( el.slice(1) );
	} else if ( el[0] === "#" ) {
		this.docTargets.push( document.getElementById( el.slice(1) ) );
	}
}

//basic type out function, works on own
Typee.prototype.typeOut = function (string, rate){
	var targetArray = this.docTargets;
	var typeSpeed;
	//set a default speed if rate unspecified
	rate != null ? typeSpeed = rate : typeSpeed = 45;

	var letter = 0;
	var d = new Date;
	var timeCheck = setInterval(function(){ 
		if (Date.now() - d > typeSpeed ) {
			d = new Date;	
			if ( typeof(string[letter]) === "string" ) {
				//run a loop to print to each element in targetArray	
				for (var i = 0; i < targetArray.length; i++) {
					//include spaces in innerText
					if ( string[letter - 1] === " " ) {
						var leadingSpace =  " " + string[letter];
						targetArray[i].innerText += leadingSpace;
					} else {
						targetArray[i].innerText += string[letter]
					}
					//automatically scroll to current line
					targetArray[i].scrollTop = targetArray[i].scrollHeight;
				}
				letter+=1
			}
		}
		if (letter > string.length) {
			clearInterval(timeCheck)
		}
	}, 1)
}

//clear the target contents and replace
Typee.prototype.singleLine = function (string, rate) {
	var targetArray = this.docTargets
	for (var i = 0; i < targetArray.length; i++) {
		targetArray[i].innerText = "";
	}
	this.typeOut(string, rate);
}

//preserve past text and print a new line
Typee.prototype.scrollingText = function (string, rate) {
	var targetArray = this.docTargets;

	this.typeOut(string, rate);
	for (var i = 0; i < this.docTargets.length; i++) {
		targetArray[i].innerText += "\n\n";
	}
}


