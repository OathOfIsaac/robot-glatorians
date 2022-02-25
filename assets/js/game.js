// player
// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy robots
var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];
//enemyNames array
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
//debugging health to be commented out, comment back above line
//var enemyHealth = 20;
var enemyAttack = 12;
console.log(enemyNames[0]);

// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

// fight function
var fight = function(enemyName) {
    //repeat and execute as long as te enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player choses to fight, fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
}
};

//function to start a new game
var startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
  //if statement to end game
  if (playerHealth > 0){
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // call fight function with enemy-robot
    var pickedEnemyName = enemyNames[i];

    enemyHealth = 50;

    fight(pickedEnemyName);
    // if player is still alive and we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length- 1) {
      //ask if player wants to use the store before the next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next fight?")
      if (storeConfirm) {
        shop();
    }
  }

  else {
    window.alert("You have lost your robot in battle! Game Over!")
    break;
  }

  //after the loop ends, the player is either out of health or enemies to fight
  endGame();
}
//play again
startGame();
};



// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
 }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  //ask the player what they want to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    // use switch to carry out action
  switch (shopOptionPrompt) {
    case "REFILL":  //new case
    case "refill":
      if(playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
    //increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    } else {
      window.alert("You don't have enough money!");
    }
    break;

    case "UPRADE": //new case
    case "upgrade":
      if (playerMoney >= 7) {
      window.alert("Upgrading the player's attack by 6 for 7 dollars.");
    //increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
    } else {
      window.alert("You don't have enough money!");
    }
    break;
    
    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.");
    //do nothing so function will end
    break;

    default:
      window.alert("You did not pick a valid option. Try again.");
    //call shop() again to force player to pick a valid option
    shop();
    break;
  }

  }
};

//start te game when the page loads
startGame();

