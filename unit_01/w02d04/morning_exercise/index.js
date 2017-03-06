// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///



var makeChange = function(price, payment) {
	var change = price - payment;
  	console.log(change);

  	if (change === 0) {
  		return change
  	}
  	else if (payment < price) {
  		console.log("You still owe $" + change)
  	}
  	else if (payment > price) {
  		console.log("Your change is $" + change)
  	}

};




/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
