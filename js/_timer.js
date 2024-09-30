function countDown(hours) {
  let maxTime = hours * 3600;

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  setInterval(() => {
    if(maxTime <= 0) {
      maxTime = hours * 3600;
    }
    maxTime--;
    const hourLeft = Math.floor(maxTime / 3600);
    const minutesLeft = Math.floor((maxTime % 3600) / 60);
    const secondsLeft = maxTime % 60;

    const formatedTime = `
      <span class='timer-hours timer-time'>${formatTime(hourLeft)}</span>
      <span class='timer-minutes timer-time'>${formatTime(minutesLeft)}</span>
      <span class='timer-seconds timer-time'>${formatTime(secondsLeft)}</span>
    `;
    document.querySelector('.timer').innerHTML = formatedTime;
  }, 1000)
}
countDown(0.5);
