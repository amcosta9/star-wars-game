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
          attack: 10,
          cAttack: 10,
          id: "#darthVader-d"
      }, palpatine = {
          name: "Emperor Palpatine",
          hp: 99,
          attack: 10,
          cAttack: 10
      }, chew = {
          name: "Chewbacca",
          hp: 98,
          attack: 10,
          cAttack: 10
      }, luke = {
          name: "Luke Skywalker",
          hp: 97,
          attack: 10,
          cAttack: 10
      }
  ];
    $("#vaderHp-d").html("HP: " + dvader.hp);
    $("#palpatineHp-d").html("HP: " + palpatine.hp);
    $("#chewbaccaHp-d").html("HP: " + chew.hp);
    $("#lukeHp-d").html("HP: " + luke.hp);

  var defender = [];
  var mainChar = {};
  var enemies = [];
  var mainCharChosen = false;
  var counter = 0;



// user picks character
    function pickMainChar() {
        $(".characters").on("click", function () {
            if (!mainCharChosen && counter === 0) {
                //mainChar var is id of char clicked on page
                var mainCharD = $(this).attr("id");
                console.log("main char: " + mainCharD);
                mainCharChosen = true;
// character is moved from all characters array and assigned to main character array
// all other characters are assigned to enemies array
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

// user picks defender
// defender assigned to defender array? needs to move to defender section
    function pickDefender() {
        console.log("is mainCharChosen? " + mainCharChosen);
         if ($("#darthVader-d").on("click", function () {
            if (mainCharChosen && counter === 1) {
                $("#darthVader-d").appendTo("#defender-d").css({"background-color": "black"});
                defender = dvader;
                console.log("defender: " + defender);
                battle();
            }
        }));
        if ($("#palpatine-d").on("click", function () {
                if (mainCharChosen && counter === 1) {
                    $("#palpatine-d").appendTo("#defender-d").css({"background-color": "black"});
                    defender = palpatine;
                    console.log("defender: " + defender);
                    battle();
                }
            }));
        if ($("#chewbacca-d").on("click", function () {
                if (mainCharChosen && counter === 1) {
                    $("#chewbacca-d").appendTo("#defender-d").css({"background-color": "black"});
                    defender = chew;
                    console.log("defender: " + defender);
                    battle();
                }
            }));
        if ($("#luke-d").on("click", function () {
                if (mainCharChosen && counter === 1) {
                    $("#luke-d").appendTo("#defender-d").css({"background-color": "black"});
                    defender = luke;
                    console.log("defender: " + defender);
                    battle();
                }
            }));
    }


// fight
    function battle(){
        $("#attackButton").click(function() {

                // when attack button is clicked, main character attacks current defender by x damage, defender attacks back by y damage
                console.log("battle start");
                console.log("user current hp: " + mainChar.hp);
                console.log("defender current hp: " + defender.hp);
                $("#fightSection-d p").last().remove();
                $("#fightSection-d").append("<p>" + mainChar.name + " attacked " + defender.name + " for " + mainChar.attack + " points!<br>" + defender.name + " attacked " + mainChar.name + " back for " + defender.cAttack + " points!</p>");
    // main character and defender hp decrease
                mainChar.hp = mainChar.hp - defender.cAttack;
                defender.hp = defender.hp - mainChar.attack;
    // then main character's damage increases
                mainChar.attack = mainChar.attack + mainChar.cAttack;
                console.log("user current hp: " + mainChar.hp);
                console.log("defender current hp: " + defender.hp);
                $("#vaderHp-d").html("HP: " + dvader.hp);
                $("#palpatineHp-d").html("HP: " + palpatine.hp);
                $("#chewbaccaHp-d").html("HP: " + chew.hp);
                $("#lukeHp-d").html("HP: " + luke.hp);
            check();

             });//end attack button function
    } //end battle function

    var victories = 0;
function check() {
// if defender hp <= 0, he is defeated and removed from game board
//check to see if defender is defeated
    if (defender.hp <= 0) {
        if (dvader.hp <= 0) {
            console.log("vader has been defeated");
            victories++;
            $("#darthVader-d").css({"display": "none"});
            $("#fightSection-d p").last().remove();
            $("#fightSection-d").append("<p>" + defender.name + " was defeated. Choose another enemy!</p>");
        }
        if (palpatine.hp <= 0) {
            console.log("palp has been defeated");
            victories++;
            $("#palpatine-d").css({"display": "none"});
            $("#fightSection-d p").last().remove();
            $("#fightSection-d").append("<p>" + defender.name + " was defeated. Choose another enemy!</p>");

        }
        if (chew.hp <= 0) {
            console.log("chew has been defeated");
            victories++;
            $("#chewbacca-d").css({"display": "none"});
            $("#fightSection-d p").last().remove();
            $("#fightSection-d").append("<p>" + defender.name + " was defeated. Choose another enemy!</p>");
        }
        if (luke.hp <= 0) {
            console.log("luke has been defeated");
            victories++;
            $("#luke-d").css({"display": "none"});
            $("#fightSection-d p").last().remove();
            $("#fightSection-d").append("<p>" + defender.name + " was defeated. Choose another enemy!</p>");
        }
// user picks new defender.
        pickDefender();

// if main character hp <= 0, user is defeated and game is over
    } else if (mainChar.hp <= 0) {
        if (dvader.hp <= 0) {
            console.log("vader has been defeated");
            $("#darthVader-d").css({"display": "none"});
            $("#fightSection-d p").last().remove();
            $("#fightSection-d").append("<p>" + mainChar.name + " was defeated. Game Over! Press spacebar to play again.</p>");
        }
        if (palpatine.hp <= 0) {
            console.log("palp has been defeated");
            $("#palpatine-d").css({"display": "none"});
            $("#fightSection-d p").last().remove();
            $("#fightSection-d").append("<p>" + mainChar.name + " was defeated. Game Over! Press spacebar to play again.</p>");

        }
        if (chew.hp <= 0) {
            console.log("chew has been defeated");
            $("#chewbacca-d").css({"display": "none"});
            $("#fightSection-d p").last().remove();
            $("#fightSection-d").append("<p>" + mainChar.name + " was defeated. Game Over! Press spacebar to play again.</p>");
        }
        if (luke.hp <= 0) {
            console.log("luke has been defeated");
            $("#luke-d").css({"display": "none"});
            $("#fightSection-d p").last().remove();
            $("#fightSection-d").append("<p>" + mainChar.name + " was defeated. Game Over! Press spacebar to play again.</p>");
        }
        reset ();

// if all enemies are defeated, user wins and game is over
    } else if (victories === 3) {
        console.log("You win!");
        $("#fightSection-d p").last().remove();
        $("#fightSection-d").append("<p>" + mainChar.name + " was victorious! You Win!  Press spacebar to play again.</p>");
        reset();
    }
};


// reset function triggered by spacebar
    function reset () {
        $().keyup(function(event) {
            if (event.keyCode === 32) {
                $("#darthVader-d, #palpatine-d, #chewbacca-d, #luke-d").appendTo(".characters").css({"background-color": "transparent", "display": "visible"});
                victories = 0;
                defender = [];
                enemies = [];
                mainChar = [];
                mainCharChosen = false;
                counter = 0;
                pickMainChar()
            }
        })

        };






    //initial start game function
    pickMainChar();
}); //end doc ready
