class RockPaperScissors {
    constructor() {
        this.CHOICES = ['rock', 'paper', 'scissors']
        this.humanScore = 0
        this.computerScore = 0
    }

    getComputerChoice () {
        let randomIndex = Math.floor(Math.random()*this.CHOICES.length)
        return this.CHOICES[randomIndex]
    }
    
    getHumanChoice () {
        while (true) {
            let humanChoice = prompt('choose rock, paper, or scissors (or we will choose for you)', this.getComputerChoice()).toLowerCase()
            if (this.CHOICES.includes(humanChoice)) {
                return humanChoice
            }
            alert('invalid choice')
        }
    }

    raiseScore(player) {
        if (player === 'human') {
            this.humanScore += 1;
        } else if (player === 'computer') {
            this.computerScore += 1;
        }
    }

    playRound () {
        let humanChoice = this.getHumanChoice()
        let computerChoice = this.getComputerChoice()

        if (
        (humanChoice==='rock' && computerChoice==='scissors') || 
        (humanChoice==='paper' && computerChoice==='rock') || 
        (humanChoice==='scissors' && computerChoice==='paper')) {
            this.raiseScore('human')
            console.log(`You win this round, the score is ${this.humanScore} to ${this.computerScore}`)
        }
        else {
            this.raiseScore('computer')
            console.log(`You lose this round, the score is ${this.humanScore} to ${this.computerScore}`)
        }
    }

    playGame () {
        while (true) {
            this.playRound()
        
            if (this.humanScore === 5) {
                alert("Game Over! congrats you win :)")
                break
            }
        
            if (this.computerScore === 5) {
                alert("Game Over! sorry you lose :(")
                break
            }
        }

    }

}

const gameOne = new RockPaperScissors()

gameOne.playGame()

