import random

# Artem
def coinToss(points):
    print("\n" + "Welcome to Coin Toss")
    print("Rules: earn 1 point for heads and lose 1 point for tails")
    play = True
    while play:
        number = int(input("Number of times to flip coin: "))
        heads = 0
        tails = 0
        recordList = []
        for flip in range(number):
            coinFlip = random.choice([1, 2])

            if coinFlip == 1:
                print("Heads -- Earned 1 point")
                points += 1
                recordList.append("Heads")
            else:
                print("Tails -- Lost 1 point")
                points -= 1
                recordList.append("Tails")

        print("Total Points:", points)
        user_play = input("Would you like to keep playing Coin Toss? (y/n) ")
        if user_play.lower() == "y":
            play = True
        else:
            print("Thank you for playing Coin Toss!!! \n")
            return points
            play = False


# Joyce
def math_game(points):
    print("\n" + "Welcome to Math Practice Problems")
    print("Rules: Solve the math problem. Earn 1 point for each correct answer. Lose 1 point for each wrong answer")
    play = True
    while play:
        # randomly generate two integers from 0-99
        x = random.randint(0, 99)
        y = random.randint(0, 99)
        # randomly generate an integer 1-4 (each integer represents a different operation)
        rand_op = random.randint(1, 4)
        if rand_op == 1:
            op = "+"
            ans = x + y
        elif rand_op == 2:
            op = "-"
            ans = x - y
        elif rand_op == 3:
            op = "*"
            ans = x * y
        else:
            op = "/"
            ans = x / y

        user_ans = float(input("Solve: " + str(x) + op + str(y) + " = "))

        if user_ans == ans:
            print("CORRECT!! You earned 1 point")
            points += 1
        else:
            print("WRONG!! You lost 1 point")
            points -= 1
        print("Total Points:", points)

        user_play = input("Would you like to keep playing Math Practice Problems? (y/n) ")
        if user_play.lower() == "y":
            play = True
        else:
            print("Thank you for playing Math Practice Problems!!! \n")
            return points
            play = False


# Tisha Austin
def guessColor(points):
    print("\n" + "Welcome to Guess the Color")
    print("Rules: earn 1 point correct color, lose 1 point for wrong color")

    colors = ["red", "yellow", "pink", "green"]
    play = True
    while play:
        # computer randomly picks a color from colors
        color_code = random.sample(colors, 1)
        guess = input("Guess the color: (red/yellow/pink/green) ")
        if guess == color_code[0]:
            print("Correct Color:", color_code[0], "Your Guess:", guess)
            print("CORRECT!! You earned 1 point")
            points += 1
        else:
            print("Correct Color:", color_code[0], "Your Guess:", guess)
            print("WRONG!! You lost 1 point")
            points -= 1
        print("Total Points:", points)

        user_play = input("Would you like to keep playing Guess the Color? (y/n) ")
        if user_play.lower() == "y":
            play = True
        else:
            print("Thank you for playing Guess the Color!!! \n")
            return points
            play = False


# Ida
def rockPaperScissors(points):
    print("\n" + "Welcome to Guess the Color")
    print("Rules: earn 1 point if you win, lose 1 point if you lose")
    play = True
    while play:
        rand_comp = random.randint(1, 3)
        if rand_comp == 1:
            comp = "rock"
        elif rand_comp == 2:
            comp = "paper"
        else:
            comp = "scissors"

        user = input("Pick either rock, paper, or scissors: ")

        if user.lower() == comp:
            print("You chose:", user, "Computer chose:", comp)
            print("Its a tie -- No points")
        elif user.lower() == "rock" and comp == "scissors":
            print("You chose:", user, "Computer chose:", comp)
            print("You win -- You earned 1 point")
            points += 1
        elif user.lower() == "paper" and comp == "rock":
            print("You chose:", user, "Computer chose:", comp)
            print("You win -- You earned 1 point")
            points += 1
        elif user.lower() == "scissors" and comp == "paper":
            print("You chose:", user, "Computer chose:", comp)
            print("You win -- You earned 1 point")
            points += 1
        else:
            print("You chose:", user, "Computer chose:", comp)
            print("You lost -- You lost 1 point")
            points -= 1

        print("Total Points:", points)

        user_play = input("Would you like to keep playing Rock Paper Scissors? (y/n) ")
        if user_play.lower() == "y":
            play = True
        else:
            print("Thank you for playing Rock Paper Scissors!!! \n")
            return points
            play = False


points = 0
print("JATI Games:")
print("1. Coin Toss")
print("2. Math Practice Problems")
print("3. Guess the Color")
print("4. Rock Paper Scissors \n")
keep_playing = True
while keep_playing:
    game = int(input("Which game do you want to play? (1/2/3/4) "))
    if game == 1:
        points = coinToss(points)
    elif game == 2:
        points = math_game(points)
    elif game == 3:
        points = guessColor(points)
    else:
        points = rockPaperScissors(points)

    user_kp = input("Would you like to keep playing JATI Games? (y/n) ")
    if user_kp.lower() == "y":
        keep_playing = True
    else:
        print("Thank you for playing JATI Games!!!")
        keep_playing = False


