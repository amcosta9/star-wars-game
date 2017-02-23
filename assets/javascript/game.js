$(document).ready(function() {

var game = {
    characters = [
        dvader = {
            name: "Darth Vader",
            health: 120,
            attack: 8,
            enemyAttackBack: 15
        },
        palp = {
            name: "Emperor Palpatine",
            health: 120,
            attack: 8,
            enemyAttackBack: 15
        },
        chew = {
            name: "Chewbacca",
            health: 120,
            attack: 8,
            enemyAttackBack: 15
        },
        luke = {
            name: "Luke Skywalker",
            health: 120,
            attack: 8,
            enemyAttackBack: 15
        },
    ],
    userChar: [],
    enemies: [],
    defender: [],

    startGame: function () {
        if ($("#darthVader-d").click(function () {
            console.log("you clicked darth vader");
            $("#darthVader-d").appendTo("#yourCharacter-d");
            this.userChar = "dvader";
        }))
        if ($("#palpatine-d").click(function () {
            console.log("you clicked palpatine");
            this.userChar = "palp";
        }))
        if ($("#chewbacca-d").click(function () {
            console.log("you clicked chewbacca");
           this.userChar = "chew";
        }))
        if ($("#luke-d").click(function () {
            console.log("you clicked luke skywalker");
            this.userChar = "luke";
        }));



}
};

game.startGame();




});