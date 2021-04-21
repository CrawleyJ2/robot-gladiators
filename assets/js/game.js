var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log (playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 10;

window.alert ("Welcome to Robot Gladiators!");

var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0){
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log ("playerMoney", playerMoney);
                break;
            }
        }
        //if player chooses to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log (
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remanining."
            );
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert (enemyName + " has died!");
                break;
            } else {
                window.alert (enemyName + " still has " + enemyHealth + " health left.");
            }
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log (
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
            // check player's health
            if (playerHealth <= 0) {
                window.alert (playerName + " has died!");
                break;
            } else {
                window.alert (playerName + " still has " + playerHealth + " health left.");
            }
        } else {
            window.alert ("You need to choose a valid option. Try again!");
        }
    }
};
// function to start a new game
var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert ("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight (pickedEnemyName);
        }
        else {
            window.alert ("You have lost your robot in battle! Game Over!");
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame ();
};

var endGame = function () {
    // if the player is still alive, the player wins!
    if (playerHealth > 0) {
        window.alert ("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert ("You've lost your robot in battle.")
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm ("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame ();
    }
    else {
        window.alert ("Thank you for playing Robot Gladiators! Come back soon!");
    }

};

startGame ();
// Game States
// "Win" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// "Lose" - Player's robot health is zero or less

