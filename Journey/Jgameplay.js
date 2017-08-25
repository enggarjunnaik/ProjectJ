var model = {
    boardSize: 7,
    Cashdraws: 3,
    cashLength: 3,
    cashFound: 0,

	cash: [
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],

	fire: function(guess) {

		for(var i = 0; i < this.Cashdraws; i++) {
			var bank1 = this.cash[i];
			var index = bank1.locations.indexOf(guess);

			// check if a bank location has already been hit
			if ( bank1.hits[index] === "hit" ) {
				view.displayMessage("Oops, you already hit that location");
				return true;
			} else if ( index >= 0 ) {
				bank1.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("CASH!");

				if ( this.isHit(bank1) ) {
					view.displayMessage("You won the game of loans!");
					this.cashFound++;
				}
				return true;
			}
			 var a=$('#guessInput').focus();
		}
		view.displayMiss(guess);
		view.displayMessage("No money here!!");
		return false;
	},

	isHit: function(bank1) {
		for (var i = 0; i < this.cashLength; i++) {
			if (bank1.hits[i] !== "hit") {
				return false;
			}
		}
		$('#guessInput').focus();
		return true;
	},

	generateCashLocations: function() {
		var locations;
		for (var i = 0; i < this.Cashdraws; i++) {
		do {
				locations = this.generateCash();
		} while (this.collision(locations));
			this.cash[i].locations = locations;
		}
	},

	generateCash: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.cashLength + 1));
		} else { // vertical
			row = Math.floor(Math.random() * (this.boardSize - this.cashLength + 1));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newCashLocations = [];

		for (var i = 0; i < this.cashLength; i++) {
			if (direction === 1) {
				newSCashLocations.push(row + "" + (col + i));
			} else {
				newCashLocations.push((row + i) + "" + col);
			}
		}
		return newCashLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.Cashdraws; i++) {
			var bank1 = this.cash[i];
			for (var j = 0; j < locations.length; j++) {
				if (bank1.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};

var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location) {
        
		var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
       
	},
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);

		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.cashFound === model.Cashdraws) {
				view.displayMessage("You freed my loans " + this.guesses + " guesses");
			}
		}
	}
};

// helper function to parse a guess from the user
function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);
		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
				alert("Oops, that's off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}

// event handlers
function handleHitButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value.toUpperCase();
	controller.processGuess(guess);
	guessInput.value = "";
}

function handleKeyPress(e) {
	var HitButton = document.getElementById("HitButton");
	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;
	if (e.keyCode === 13) {
		HitButton.click();
		return false;
	}
}


window.onload = init;

function init() {
	// Hit! button onclick handler
	var HitButton = document.getElementById("HitButton");
	HitButton.onclick = handleHitButton;
	// handle "return" key press
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
	// place the cash on the gameboard
	model.generateCashLocations();
}