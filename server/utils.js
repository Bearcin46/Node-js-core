const hours = new Date().getHours();
const mins = new Date().getMinutes();
const sec = new Date().getSeconds();

const time = hours + ":" + mins + ":" + sec;

const randomGenerate = () => {
  return Math.floor(Math.random() * 100) + 1;
};
module.exports = { randomGenerate, time };
