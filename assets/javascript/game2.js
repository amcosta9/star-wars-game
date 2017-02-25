/**
 * Created by Ariel on 2/22/2017.
 */
$(document).ready(function() {
    var characters = [dvader, palpatine, chew, luke];
    var userChar = "";
    var enemies = [];
    var defender = "";
    var pickDefender = false;

    var dvader = {
        name: "Darth Vader",
        hp: 100,
        attack: 100,
        cAttack: 100
    };
    var palpatine = {
        name: "Emperor Palpatine",
        hp: 99,
        attack: 100,
        cAttack: 100
    };
    var chew = {
        name: "Chewbacca",
        hp: 98,
        attack: 100,
        cAttack: 100
    };
    var luke = {
        name: "Luke Skywalker",
        hp: 97,
        attack: 100,
        cAttack: 100
    };


    //first character clicked is assigned as users character and moves to character div. other three move to enemies div and push to enemies array
    function pickChar () {
        if (!pickDefender) {
            if ($("#darthVader-d").click(function () {
                    $("#darthVader-d").appendTo("#yourCharacter-d").css({"background-color": "green"});
                    $("#vaderHp-d").html("HP: " + dvader.hp);
                    userChar = dvader;
                    console.log("your character: " + userChar);
                    $("#palpatine-d, #chewbacca-d, #luke-d").appendTo("#enemies-d").css({"background-color": "red"});
                    $("#palpatineHp-d").html("HP: " + palpatine.hp);
                    $("#lukeHp-d").html("HP: " + luke.hp);
                    $("#chewbaccaHp-d").html("HP: " + chew.hp);
                    enemies.push("palp", "chew", "luke");
                    console.log("enemies are: " + enemies);
                    pickDefender = true;
                    console.log("pickDef " + pickDefender);
                    // pickDef();
                }))
            if ($("#palpatine-d").click(function () {
                   $("#palpatine-d").appendTo("#yourCharacter-d").css({"background-color": "green"});
                   $("#palpatineHp-d").html("HP: " + palpatine.hp);
                   userChar = palpatine;
                   console.log("your character: " + userChar);
                   $("#chewbacca-d, #darthVader-d, #luke-d").appendTo("#enemies-d").css({"background-color": "red"});
                   $("#vaderHp-d").html("HP: " + dvader.hp);
                   $("#lukeHp-d").html("HP: " + luke.hp);
                   $("#chewbaccaHp-d").html("HP: " + chew.hp);
                   enemies.push("dvader", "chew", "luke");
                   console.log("enemies are: " + enemies);
                   pickDefender = true;
                   // pickDef();
            }))
            if ($("#chewbacca-d").click(function () {
                   $("#chewbacca-d").appendTo("#yourCharacter-d").css({"background-color": "green"});
                   $("#chewbaccaHp-d").html("HP: " + chew.hp);
                   userChar = chew;
                   console.log("your character: " + userChar);
                   $("#palpatine-d, #darthVader-d, #luke-d").appendTo("#enemies-d").css({"background-color": "red"});
                   $("#palpatineHp-d").html("HP: " + palpatine.hp);
                   $("#vaderHp-d").html("HP: " + dvader.hp);
                   $("#lukeHp-d").html("HP: " + luke.hp);
                   enemies.push("palp", "dvader", "luke");
                   console.log("enemies are: " + enemies);
                   pickDefender = true;
                   // pickDef();
            }))
            if ($("#luke-d").click(function () {
                   $("#luke-d").appendTo("#yourCharacter-d").css({"background-color": "green"});
                   $("#lukeHp-d").html("HP: " + luke.hp);
                   userChar = luke;
                   console.log("your character: " + userChar);
                   $("#palpatine-d, #chewbacca-d, #darthVader-d").appendTo("#enemies-d").css({"background-color": "red"});
                   $("#palpatineHp-d").html("HP: " + palpatine.hp);
                   $("#vaderHp-d").html("HP: " + dvader.hp);
                   $("#chewbaccaHp-d").html("HP: " + chew.hp);
                   enemies.push("palp", "chew", "dvader");
                   console.log("enemies are: " + enemies);
                   pickDefender = true;
                   // pickDef();
            }));
        } else if (pickDefender) {
            if ($("#darthVader-d").click(function () {
            $("#darthVader-d").appendTo("#defender-d").css({"background-color": "black"});
            defender = "dvader";
            console.log("defender: " + defender);
        }));
        if ($("#palpatine-d").click(function () {
                $("#palpatine-d").appendTo("#defender-d").css({"background-color": "black"});
                defender = "palpatine";
                console.log("defender: " + defender);
            }));
        if ($("#chewbacca-d").click(function () {
                $("#chewbacca-d").appendTo("#defender-d").css({"background-color": "black"});
                defender = "chew";
                console.log("defender: " + defender);
            }));
        if ($("#luke-d").click(function () {
                $("#luke-d").appendTo("#defender-d").css({"background-color": "black"});
                defender = "luke";
                console.log("defender: " + defender);
            }));
        };

    };

    //characters clicked in enemies div selected to battle
    // function pickDef() {
    //     if (pickDefender) {
    //         if ($("#darthVader-d").click(function () {
    //             $("#darthVader-d").appendTo("#defender-d").css({"background-color": "black"});
    //             defender = "dvader";
    //             console.log("defender: " + defender);
    //             }));
    //         if ($("#palpatine-d").click(function () {
    //                 $("#palpatine-d").appendTo("#defender-d").css({"background-color": "black"});
    //                 defender = "palpatine";
    //                 console.log("defender: " + defender);
    //             }));
    //         if ($("#chewbacca-d").click(function () {
    //                 $("#chewbacca-d").appendTo("#defender-d").css({"background-color": "black"});
    //                 defender = "chew";
    //                 console.log("defender: " + defender);
    //             }));
    //         if ($("#luke-d").click(function () {
    //                 $("#luke-d").appendTo("#defender-d").css({"background-color": "black"});
    //                 defender = "luke";
    //                 console.log("defender: " + defender);
    //             }));
    //     };
    // }

    pickChar();
    // pickDef();







});