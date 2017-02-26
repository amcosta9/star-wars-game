/**
 * Created by Ariel on 2/25/2017.
 */
// document ready
$(document).ready(function() {
// declare variables
// all characters as objects inside an array

  var allCharacters = [
      dvader = {
          name: "Darth Vader",
          hp: 100,
          attack: 100,
          cAttack: 100,
          id: "#darthVader-d"
      }, palpatine = {
          name: "Emperor Palpatine",
          hp: 99,
          attack: 100,
          cAttack: 100
      }, chew = {
          name: "Chewbacca",
          hp: 98,
          attack: 100,
          cAttack: 100
      }, luke = {
          name: "Luke Skywalker",
          hp: 97,
          attack: 100,
          cAttack: 100
      }
  ];
  var defender = [];
  var mainChar = {};
  var enemies = [];
  var charName;
  var mainCharChosen = false;
  var counter = 0;

// this loops through the allCharacters array and
//   $.each(allCharacters, function(i, val){
//
//   });

// user picks character
    function pickMainChar() {
        $(".characters").on("click", function () {
            if (!mainCharChosen && counter === 0) {
                //mainChar var is id of char clicked on page
                var mainCharD = $(this).attr("id");
                console.log("main char: " + mainCharD);
                mainCharChosen = true;
                if (mainCharD === "darthVader-d") {
                    mainChar = dvader;
                    counter++;
                    $("#darthVader-d").appendTo("#yourCharacter-d").css({"background-color": "green"});
                    console.log("mainChar from array: " + mainChar.toString());
                    enemies = allCharacters.splice(0, 3);
                    $("#palpatine-d, #chewbacca-d, #luke-d").appendTo("#enemies-d").css({"background-color": "red"});
                    console.log("enemies: " + enemies.toString());
                    pickDefender();

                }
                if (mainCharD === "palpatine-d") {
                    mainChar = palpatine;
                    counter++;
                    $("#palpatine-d").appendTo("#yourCharacter-d").css({"background-color": "green"});
                    console.log("mainChar from array: " + mainChar.toString());
                    enemies = allCharacters.splice(0, 3);
                    $("#chewbacca-d, #darthVader-d, #luke-d").appendTo("#enemies-d").css({"background-color": "red"});
                    console.log("enemies: " + enemies.toString());
                    pickDefender();

                }
                if (mainCharD === "chewbacca-d") {
                    mainChar = chew;
                    counter++;
                    $("#chewbacca-d").appendTo("#yourCharacter-d").css({"background-color": "green"});
                    console.log("mainChar from array: " + mainChar.toString());
                    enemies = allCharacters.splice(0, 3);
                    $("#palpatine-d, #darthVader-d, #luke-d").appendTo("#enemies-d").css({"background-color": "red"});
                    console.log("enemies: " + enemies.toString());
                    pickDefender();

                }
                if (mainCharD === "luke-d") {
                    mainChar = luke;
                    counter++;
                    $("#luke-d").appendTo("#yourCharacter-d").css({"background-color": "green"});
                    console.log("mainChar from array: " + mainChar.toString());
                    enemies = allCharacters.splice(0, 3);
                    $("#palpatine-d, #chewbacca-d, #darthVader-d").appendTo("#enemies-d").css({"background-color": "red"});
                    console.log("enemies: " + enemies.toString());
                    pickDefender();

                }

            }


        });
    }

    function pickDefender() {
        console.log("this should only show if mainCharChosen is true: " + mainCharChosen);
        $("#enemies-d").on("click", function () {
            if (mainCharChosen && counter === 1) {
                console.log("you clicked an enemy " + this);

            }
        });
    }

    pickMainChar();


// character is moved from all characters array and assigned to main character array
// all other characters are assigned to enemies array
// user picks defender
// defender assigned to defender array? needs to move to defender section

// fight
// when attack button is clicked, main character attacks current defender by x damage, defender attacks back by y damage
// main character and defender hp decrease
// then main character's damage increases
// if defender hp <= 0, he is defeated and removed from game board
// user picks new defender.
// on attack button, previous damage stays the same and continues to increase w/ each attack
// if main character hp <= 0, user is defeated and game is over
// if all enemies are defeated, user wins and game is over
// reset function triggered by button click or keystroke
});
