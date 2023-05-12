let blue = document.getElementById("blue")
let pink = document.getElementById("pink")
let green = document.getElementById("green")
let yellow = document.getElementById("yellow")

let play_restart = document.getElementById("play_restart")

let score_btn = document.getElementById("score")

let color_click = []
let color_sequence = []
let score = 0

function turn() {
    //reset color clicked
    color_click = []

    //push a random color
    let color = ["blue", "pink", "green", "yellow"]
    color_sequence.push(color[Math.floor(Math.random() * 4)])
    console.log(color_sequence);

    //remove the click when the sequence is playing
    blue.removeEventListener("click", event_blue)
    pink.removeEventListener("click", event_pink)
    green.removeEventListener("click", event_green)
    yellow.removeEventListener("click", event_yellow)

    //display color from the array color_sequence
    for (let i = 0; i < color_sequence.length; i++) {
        setTimeout(() => {
            switch (color_sequence[i]) {
                case "blue":
                    set_blue()
                    break

                case "pink":
                    set_pink()
                    break

                case "green":
                    set_green()
                    break

                case "yellow":
                    set_yellow()
                    break
            }
        }, i * 1000)
    }
    //time when color displaying
    setTimeout(() => {
        player_turn()
    }, color_sequence.length * 1000);
}

//event for player turn 
let event_blue = () => {
    set_blue()
    color_click.push("blue")
    check_color_sequence()
}
let event_pink = () => {
    set_pink()
    color_click.push("pink")
    check_color_sequence()
}
let event_green = () => {
    set_green()
    color_click.push("green")
    check_color_sequence()
}
let event_yellow = () => {
    set_yellow()
    color_click.push("yellow")
    check_color_sequence()
}

//make a function check color clicked
function player_turn() {
    //animation on click 
    blue.addEventListener("click", event_blue)
    pink.addEventListener("click", event_pink)
    green.addEventListener("click", event_green)
    yellow.addEventListener("click", event_yellow)

}

//check if the value is the same
function check_color_sequence() {

    if (color_sequence[color_click.length - 1] === color_click[color_click.length - 1]) {
        if (color_sequence.length === color_click.length) {
            console.log(true);
            score_btn.textContent = parseInt(score_btn.textContent) + 1
            setTimeout(() => {
                turn()
            }, 1200)
        }
    } else {
        restart_game()
        play_restart.textContent = "play"
    }
}

//start game
function start_game() {
    turn()
}

//restart the game
function restart_game() {
    color_sequence = []
    color_click = []
    score = 0
    score_btn.textContent = 0

    blue.style.animationName = "none"
    pink.style.animationName = "none"
    green.style.animationName = "none"
    yellow.style.animationName = "none"

    blue.removeEventListener("click", event_blue)
    pink.removeEventListener("click", event_pink)
    green.removeEventListener("click", event_green)
    yellow.removeEventListener("click", event_yellow)
}

play_restart.addEventListener("click", () => {
    if (play_restart.textContent === "play") {
        start_game()
        play_restart.textContent = "restart"
    } else {
        restart_game()
        play_restart.textContent = "play"
    }
})

//put and remove color (animation)
function set_blue() {
    blue.style.animationName = "blue"
    setTimeout(() => {
        blue.style.animationName = "none"
    }, 1000)
}
function set_pink() {
    pink.style.animationName = "pink"
    setTimeout(() => {
        pink.style.animationName = "none"
    }, 1000)
}
function set_green() {
    green.style.animationName = "green"
    setTimeout(() => {
        green.style.animationName = "none"
    }, 1000)
}
function set_yellow() {
    yellow.style.animationName = "yellow"
    setTimeout(() => {
        yellow.style.animationName = "none"
    }, 1000)
}