const startBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

let stream;

const handleStop = () => {
  startBtn.innerText = "Start Recording";
  startBtn.addEventListener("click", handleStart);
  startBtn.removeEventListener("click", handleStop);
};

const handleStart = () => {
  startBtn.innerText = "Stop Recording";
  startBtn.removeEventListener("click", handleStart);
  startBtn.addEventListener("click", handleStop);
  const recorder = new MediaRecorder(stream);
  console.log(recorder);
  recorder.ondataavailable = (e) => {
    console.log("recording done");
    console.log(e);
    console.log(data);
  };
  recorder.start();
  console.log(recorder);
  recorder.stop();
  setTimeout(() => {
    recorder.stop();
  }, 10000);
};

const init = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: { width: 200, height: 100 },
  });
  video.srcObject = stream;
  video.onplay();
};

init();

startBtn.addEventListener("click", handleStart);
