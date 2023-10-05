// WORK CYCLE PHASES
// 1 Work 25
// 2 Rest 5
// 3 Work 25
// 4 Rest 5
// 5 Work 25
// 6 Rest 5
// 7 Work 25
// 8 Rest 30

// Variable Value Definitions

// TIME IN SECONDS
let time = 1500
let PHASE_TIME = 1500
let timerID = null
let phaseID = 1
let phaseTitle = "Work"

// DOM Element Definitions
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const stopButton = document.querySelector("#stop")

const timeDisplay = document.querySelector(".time-display")

// UI Functions
const updateTimeDisplay = () => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  timeDisplay.innerText = `${minutes}:${seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2
  })}`
}

startButton.addEventListener("click", () => {
  console.log(timerID)

  timerID = setInterval(() => {
    time -= 1
    // Zero Occurence

    updateTimeDisplay()

  }, 100)
})

pauseButton.addEventListener("click", () => {
  clearInterval(timerID)
})

stopButton.addEventListener("click", () => {
  clearInterval(timerID)
  time = PHASE_TIME
  updateTimeDisplay()
})

