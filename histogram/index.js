const url = 'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new';
const histogram = document.querySelector('.histogram');
const xAxis = document.querySelector('.x-axis');
const yAxis = document.querySelector('.y-axis');
const coordinantesWrapper = document.querySelector('.coordinantes-wrapper');

let maxValue = 0;
let occurances = {};

fetch(url)
  .then( response => response.text())
  .then( data => {
    handleData(data);})
  .catch( error => {
    console.error('There was a problem with the fetch operation:', error);
  });
// const data = '1,2,3';
// handleData(data);

function handleData(data) {
  mapValues(data);
  createSequencesForYAxis();
  renderXAxis();
}

function mapValues(data) {
  const array = data.split('\n').map(Number);
  occurances = array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  
  maxValue = Math.max(...Object.values(occurances));

  console.log(occurances);
}

function createSequencesForYAxis() {
  let stepSize = Math.round(maxValue / 3);
  let sequences = [];

  for (let i = 0; i <= 3; i++) {
      sequences.push(stepSize * i);
  }

  sequences[3] = maxValue;

  renderYAxis(sequences);
}

function renderXAxis() {
  const array = [...Object.keys(occurances)];

  for(let num of array) {
    const div = document.createElement('div');

    div.className = 'x-span';
    div.textContent = num;

    xAxis.appendChild(div);
    
    createBar(num);
  }
}

function renderYAxis(sequences) {
  for(let number of sequences) {
    const yCoordinate = 0 + ( histogram.clientHeight / maxValue ) * number;
    const div = document.createElement('div');

    yAxis.style.height = `${histogram.clientHeight}px`;
    div.className = 'y-span';
    div.style.bottom = `${yCoordinate}px`;
    div.textContent = number;

    coordinantesWrapper.appendChild(div);
  }
}

function createBar(num) {
  const height = calculateHeight(num, occurances);
  const bar = document.createElement('div');

  bar.className = 'bar';
  bar.style.height = `${height}%`;

  histogram.appendChild(bar);
}

function calculateHeight(num) {
  const barHeight = (occurances[num] * 100) / maxValue;

  return barHeight;
}
