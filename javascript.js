function getComputerChoice() 
{
    let num = Math.random();
    if (num < 0.33)
        {return "rock";}
    else if (num < .66)
        {return "paper";}
    else    {return "scissors";}
}

function getHumanChoice() 
{
    let choice = prompt("type rock, paper, or scissors: ")
    return choice;
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) 
    {
        let playerChoice = humanChoice.toLowerCase();
        if (playerChoice == computerChoice)
        {
            console.log("Tie game")
        }
        else if (playerChoice == "rock")
        {
            if (computerChoice == "paper")
            {
                console.log("You lose")
                computerScore ++;
            }
            else { console.log("You win")
                humanScore ++;
            }
        }
        else if (playerChoice == "paper")
            {
                if (computerChoice == "scissors")
                {
                    console.log("You lose")
                    computerScore ++;
                }
                else { console.log("You win")
                    humanScore ++;
                }
            }
        else if (playerChoice == "scissors")
            {
                if (computerChoice == "rock")
                {
                    console.log("You lose")
                    computerScore ++;
                }
                else { console.log("You win")
                    humanScore ++;
                }
            }
        else (console.log("something went horribly wrong"))
        console.log("human score: " + humanScore + " computer score: " + computerScore)
    }

    for (let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();