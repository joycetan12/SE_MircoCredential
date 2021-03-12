score = 0;

// Coin Toss Game
function coinToss(){
  // game rules
  document.getElementById("gameView").innerHTML = "Welcome to Coin Toss<br> Rules: Flip a coin. Earn 1 point for heads and lose 1 point for tails.<br><br>";
  // ask user how many rounds they want to play
  rounds = parseInt(prompt("How many rounds would you like to play?"));
  // for each round
  for (i = 0; i < rounds; i++){
    // generates a random integer 0 to 1
    coinFlip = Math.floor(Math.random() * 2);
    // 1 represents heads, 2 represents tails
    if (coinFlip == 1){
      document.getElementById("gameView").innerHTML += "You flipped a heads --> Earned 1 point<br>";
      score += 1;
    }
    else{
      document.getElementById("gameView").innerHTML += "You flipped a tails --> Lost 1 point<br>";
      score -= 1;
    }
  }
  // update score
  document.getElementById("score").innerHTML = score;
}

// Math Practice Problem Game
function mathGame(){
  // game rules
  document.getElementById("gameView").innerHTML = "Welcome to Math Practice Problems<br> Rules: Solve the math problem. Earn 1 point for correct answer and lose 1 point for wrong answer.<br><br>";
  // ask user how many rounds they want to play
  rounds = parseInt(prompt("How many rounds would you like to play?"));
  // for each round
  for (i = 0; i < rounds; i++){
    // generates two random integers 0 to 99
    x = Math.floor(Math.random() * 100);
    y = Math.floor(Math.random() * 100);
    // generates two random integers 0 to 3
    randOp = Math.floor(Math.random() * 4);
    // each integer 0 to 3 represents a different operation
    if (randOp == 0){
      op = "+";
      ans = x + y;
    }
    else if (randOp == 1){
      op = "-";
      ans = x - y;
    }
    else if (randOp == 2){
      op = "*";
      ans = x * y;
    }
    else{
      op = "/";
      ans = x / y;
    }
    // user's  answer
    userAns = parseFloat(prompt("Round " + (i+1) + " - Solve: " + x.toString() + op + y.toString() + " = "));
    // checks user's answer
    if (userAns == ans){
      document.getElementById("gameView").innerHTML += "Your answer: " + userAns + " Correct answer: " + ans + "<br>CORRECT!! You earned 1 point<br><br>";
      score += 1;
    }
    else{
      document.getElementById("gameView").innerHTML += "Your answer: " + userAns + " Correct answer: " + ans + "<br>WRONG!! You lost 1 point<br><br>";
      score -= 1;
    }
  }
  // update score
  document.getElementById("score").innerHTML = score;
}

// Guess the Color Game
function guessColor(){
  // game rules
  document.getElementById("gameView").innerHTML = "Welcome to Guess the Color<br> Rules: Guess the color. Earn 1 point for correct guess and lose 1 point for wrong guess<br><br>";
  // ask user how many rounds they want to play
  rounds = parseInt(prompt("How many rounds would you like to play?"));
  // for each round
  for (i = 0; i < rounds; i++){
    // generates a random integer 0 to 4
    colorCode = Math.floor(Math.random() * 5);
    // each integer 0 to 4 represents a different color
    if (colorCode == 0) color = "red";
    else if (colorCode == 1) color = "yellow";
    else if (colorCode == 2) color = "pink";
    else if (colorCode == 3) color = "green";
    else color = "blue";
    // user's guess
    guess = prompt("Round " + (i+1) + " - Guess a color: (red/yellow/pink/green/blue)");
    // checks user's guess
    if (guess == color){
      document.getElementById("gameView").innerHTML += "Your guess: " + guess + " Correct color: " + color + "<br>CORRECT!! You earned 1 point<br><br>";
      score += 1;
    }
    else{
      document.getElementById("gameView").innerHTML += "Your guess: " + guess + " Correct color: " + color + "<br>WRONG!! You lost 1 point<br><br>";
      score -= 1;
    }
  }
  // update score
  document.getElementById("score").innerHTML = score;
}

// Rock, Paper, Scissors Game
function rockPaperScissors(){
  // game rules
  document.getElementById("gameView").innerHTML = "Welcome to Rock Paper Scissors<br> Rules: Choose rock paper or scissors. Earn 1 point if you beat the computer and lose 1 point if the computer beats you<br><br>";
  // ask user how many rounds they want to play
  rounds = parseInt(prompt("How many rounds would you like to play?"));
  // for each round
  for (i = 0; i < rounds; i++){
    // generates a random integer 0 to 2
    randComp = Math.floor(Math.random() * 3);
    // each integer 0 to 2 represents a different choice
    if (randComp == 0) comp = "rock";
    else if (randComp == 1) comp = "paper";
    else comp = "scissors";
    // user's choice
    user = prompt("Round " + (i+1) + " - Choose: (rock/paper/scissors)");
    // checks is user won or comp won
    if (user.toLowerCase() == comp){
      document.getElementById("gameView").innerHTML += "You chose: " + user + " Computer chose: " + comp + "<br>Its a tie -- No points<br><br>";
    }
    else if (user.toLowerCase() == "rock" && comp == "scissors"){
      document.getElementById("gameView").innerHTML += "You chose: " + user + " Computer chose: " + comp + "<br>You won -- You earned 1 point<br><br>";
      score += 1;
    }
    else if (user.toLowerCase() == "paper" && comp == "rock"){
      document.getElementById("gameView").innerHTML += "You chose: " + user + " Computer chose: " + comp + "<br>You won -- You earned 1 point<br><br>";
      score += 1;
    }
    else if (user.toLowerCase() == "scissors" && comp == "paper"){
      document.getElementById("gameView").innerHTML += "You chose: " + user + " Computer chose: " + comp + "<br>You won -- You earned 1 point<br><br>";
      score += 1;
    }
    else{
      document.getElementById("gameView").innerHTML += "You chose: " + user + " Computer chose: " + comp + "<br>Computer won -- You lost 1 point<br><br>";
      score -= 1;
    }
  }
  // update score
  document.getElementById("score").innerHTML = score;
}

// reset score to 0
function resetScore(){
  document.getElementById("gameView").innerHTML = "SCORE HAS BEEN RESET TO 0";
  score = 0;
  document.getElementById("score").innerHTML = score;
}
