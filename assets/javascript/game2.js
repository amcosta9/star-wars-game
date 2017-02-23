/**
 * Created by Ariel on 2/22/2017.
 */
$(document).ready(function() {
    var characters = [];
    var userChar = "";
    var enemies = [];
    var defender = "";
    var pickDefender = true;

    //first character clicked is assigned as users character and moves to character div. other three move to enemies div and push to enemies array
    function pickChar () {
        if (pickDefender) {
            if ($("#darthVader-d").click(function () {
                    $("#darthVader-d").appendTo("#yourCharacter-d");
                    userChar = "dvader";
                    console.log("your character: " + userChar);
                    $("#palpatine-d").appendTo("#enemies-d");
                    $("#chewbacca-d").appendTo("#enemies-d");
                    $("#luke-d").appendTo("#enemies-d");
                    enemies.push("palp", "chew", "luke");
                    console.log("enemies are: " + enemies);
                    pickDefender = false;
                }))
                if ($("#palpatine-d").click(function () {
                        $("#palpatine-d").appendTo("#yourCharacter-d");
                        userChar = "palp";
                        console.log("your character: " + userChar);
                        $("#darthVader-d").appendTo("#enemies-d");
                        $("#chewbacca-d").appendTo("#enemies-d");
                        $("#luke-d").appendTo("#enemies-d");
                        enemies.push("dvader", "chew", "luke");
                        console.log("enemies are: " + enemies);
                        pickDefender = false;
                    }))
                    if ($("#chewbacca-d").click(function () {
                            $("#chewbacca-d").appendTo("#yourCharacter-d");
                            userChar = "chew";
                            console.log("your character: " + userChar);
                            $("#palpatine-d").appendTo("#enemies-d");
                            $("#darthVader-d").appendTo("#enemies-d");
                            $("#luke-d").appendTo("#enemies-d");
                            enemies.push("palp", "dvader", "luke");
                            console.log("enemies are: " + enemies);
                            pickDefender = false;
                        }))
                        if ($("#luke-d").click(function () {
                                $("#luke-d").appendTo("#yourCharacter-d");
                                userChar = "luke";
                                console.log("your character: " + userChar);
                                $("#palpatine-d").appendTo("#enemies-d");
                                $("#chewbacca-d").appendTo("#enemies-d");
                                $("#darthVader-d").appendTo("#enemies-d");
                                enemies.push("palp", "chew", "dvader");
                                console.log("enemies are: " + enemies);
                                pickDefender = false;
                            }));
            pickDef();
        }
    };

    //characters clicked in enemies div selected to battle
    function pickDef() {
        if (pickDefender = false) {
            if ($("#darthVader-d").click(function () {
                $("#darthVader-d").appendTo("#defender-d");
                defender = "dvader";
                console.log("defender: " + defender);
                }));
        };
    }

    pickChar();







});