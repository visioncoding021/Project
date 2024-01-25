const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Ringtone = ["ring/tune-1.mp3", "ring/tune-2.mp3", "ring/tune-3.mp3"];

const Hours = document.querySelector(".hours");
const Minutes = document.querySelector(".minutes");
const Seconds = document.querySelector(".seconds");
const AmPm = document.querySelector(".AM-PM");
const DateBoard = document.querySelector(".date-board");
const AlarmBtn = document.querySelector(".set-alarm");
const countDownBtn = document.querySelector(".start-count-down");
const AlarmBoard = document.querySelector(".alarm-board");
const countDownBorad = document.querySelector(".countDown");
const valueInsert = document.querySelectorAll(".valueInsert");

const setBtn = document.querySelector(".set");
const HourSet = document.querySelector(".HoursValues");
const MinuteSet = document.querySelector(".MinutesValue");
const SecondSet = document.querySelector(".SecondsValue");

let setHourValue = null;
let setMinuteValue = null;
let setSecondValue = null;
let countDownInterval;

function SetTimeToBoard() {
  const DateAndTime = new Date();
  const TodayDate = DateAndTime.toLocaleDateString("en-US", options);
  const TodayHour = DateAndTime.getHours();
  const TodayMinutes = DateAndTime.getMinutes();
  const TodaySeconds = DateAndTime.getSeconds();
  Hours.innerHTML = TodayHour;
  Minutes.innerHTML = TodayMinutes;
  Seconds.innerHTML = TodaySeconds;
  DateBoard.innerHTML = TodayDate;

  AmPm.innerHTML = TodayHour >= 12 ? "PM" : "AM";
}

SetTimeToBoard();
setInterval(SetTimeToBoard, 1000);

AlarmBtn.addEventListener("click", setAlarm);
setBtn.addEventListener("click", startTime);
countDownBtn.addEventListener("click", setCounter);

function setAlarm() {
  setBtn.classList.remove("counter");
  setBtn.classList.add("setAlarm");

  valueInsert.forEach((element) => {
    element.className = "border";
    element.setAttribute("contentEditable", "true");
  });
}

function setCounter() {
  setBtn.classList.remove("setAlarm");
  setBtn.classList.add("counter");

  valueInsert.forEach((element) => {
    element.className = "border";
    element.setAttribute("contentEditable", "true");
  });
}

function startTime() {
  if (setBtn.classList.contains("setAlarm")) {
    alarm();
  } else {
    countDown();
  }
}

function alarm() {
  setHourValue = Number(HourSet.value);
  setMinuteValue = Number(MinuteSet.value);
  setSecondValue = Number(SecondSet.value);

  if (isValidTime(setHourValue, setMinuteValue, setSecondValue)) {
    AlarmBoard.innerHTML = `${formatTime(
      setHourValue
    )}:${formatTime(setMinuteValue)}:${formatTime(setSecondValue)}`;
    setInterval(alarmchecker, 1000);
  } else {
    alert("Not a valid time");
  }

  resetInputFields();
}

function countDown() {
  setHourValue = Number(HourSet.value);
  setMinuteValue = Number(MinuteSet.value);
  setSecondValue = Number(SecondSet.value);

  if (isValidTime(setHourValue, setMinuteValue, setSecondValue)) {
    countDownBorad.innerHTML = `${formatTime(
      setHourValue
    )}:${formatTime(setMinuteValue)}:${formatTime(setSecondValue)}`;
    countDownInterval = setInterval(countDownUpdate, 1000);
  } else {
    alert("Not a valid time");
  }

  resetInputFields();
}

function alarmchecker() {
  const currentTime = new Date();
  const targetTime = new Date();
  targetTime.setHours(setHourValue);
  targetTime.setMinutes(setMinuteValue);
  targetTime.setSeconds(setSecondValue);

  if (
    currentTime.getHours() === targetTime.getHours() &&
    currentTime.getMinutes() === targetTime.getMinutes() &&
    currentTime.getSeconds() === targetTime.getSeconds()
  ) {
    const audio = new Audio(Ringtone[0]);
    audio.play();
  }
}

function countDownUpdate() {
  setSecondValue--;
  if (setSecondValue < 0) {
    setSecondValue = 59;
    setMinuteValue--;

    if (setMinuteValue < 0) {
      setMinuteValue = 59;
      setHourValue--;

      if (setHourValue < 0) {
        // Countdown is complete
        clearInterval(countDownInterval);

        alert("Countdown Complete!");
        return;
      }
    }
  }

  countDownBorad.innerHTML = `${formatTime(
    setHourValue
  )}:${formatTime(setMinuteValue)}:${formatTime(setSecondValue)}`;
}

function isValidTime(hour, minute, second) {
  return (
    typeof hour === "number" &&
    typeof minute === "number" &&
    typeof second === "number" &&
    !isNaN(hour) &&
    !isNaN(minute) &&
    !isNaN(second) &&
    hour >= 0 &&
    minute >= 0 &&
    second >= 0 &&
    hour <= 23 &&
    minute <= 59 &&
    second <= 59
  );
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function resetInputFields() {
  HourSet.value = "";
  MinuteSet.value = "";
  SecondSet.value = "";
}