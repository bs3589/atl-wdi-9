console.log('tamagotchi file is loaded');


// constructor

function tamagotchi (name, creatureType) {
	this.name = name;
	this.creatureType = creatureType;
	this.foodInTummy = 10;
  	this.restedness = 10;
  	this.health = 10;
	tamagotchi.cry = function() {
    	this.foodInTummy -1;
    	console.log(this.name + "WAHH!!!");
    };

  	tamagotchi.puke = function() {
    	this.health -1;
    };

    tamagotchi.yawn = function(){
    	this.restedness -1;
    };





};




//create new Tamagotchis

// prototypes

var Frank = new tamagotchi('Frank', 'beast');

var Meg = new tamagotchi('Meg', 'beauty');





  


//test out your Tamagotchies below via console.logs


console.log(Frank.creatureType);