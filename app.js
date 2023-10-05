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
const phaseDisplay = document.querySelector(".phase-display")

// UI Functions
const updateTimeDisplay = () => {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  timeDisplay.innerText = `${minutes}:${seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2
  })}`
}

const updatePhaseDisplay = () => {
  phaseDisplay.innerText = phaseTitle
}

startButton.addEventListener("click", () => {
  addActiveStyle(startButton)
  timerID = setInterval(() => {
    time -= 1

    // Zero Occurence
    if (time === 0) {
      clearInterval(timerID)
      handlePhaseChange()
      updatePhaseDisplay()
    }
    updateTimeDisplay()

  }, 1000)
})

pauseButton.addEventListener("click", () => {
  addActiveStyle(pauseButton)
  clearInterval(timerID)
})

stopButton.addEventListener("click", () => {
  addActiveStyle(stopButton)
  clearInterval(timerID)
  time = PHASE_TIME
  updateTimeDisplay()
})

// HANDLE PHASE CHANGE
const updatePhase = (newPhaseID, newTime, newTitle) => {
  time = newTime
  PHASE_TIME = newTime
  phaseID = newPhaseID
  phaseTitle = newTitle
}

const handlePhaseChange = () => {
  switch (phaseID) {
    case 1:
      updatePhase(2, 300, "Break")
      break
    case 2:
      updatePhase(3, 1500, "Work")
      break
    case 3:
      updatePhase(4, 300, "Break")
      break
    case 4:
      updatePhase(5, 1500, "Work")
      break
    case 5:
      updatePhase(6, 300, "Break")
      break
    case 6:
      updatePhase(7, 1500, "Work")
      break
    case 7:
      updatePhase(8, 1800, "Break")
      break
    case 8:
      updatePhase(1, 1500, "Work")
      break
  }
}

const addActiveStyle = (buttonToUpdate) => {
  const buttons = [startButton, pauseButton, stopButton]
  buttons.forEach((button) => {
    button.classList.remove("active")
  })
  buttonToUpdate.classList.add("active")
}

