// https://www.omnicalculator.com/finance/price-to-sales-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const pricetosalesratioRadio = document.getElementById('pricetosalesratioRadio');
const salesRadio = document.getElementById('salesRadio');
const numberofsharesoutstandingRadio = document.getElementById('numberofsharesoutstandingRadio');
const pricepershareRadio = document.getElementById('pricepershareRadio');

let pricetosalesratio;
let sales = v1;
let numberofsharesoutstanding = v2;
let pricepershare = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

pricetosalesratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Sales';
  variable2.textContent = 'Number of shares outstanding';
  variable3.textContent = 'Price per share';
  sales = v1;
  numberofsharesoutstanding = v2;
  pricepershare = v3;
  result.textContent = '';
});

salesRadio.addEventListener('click', function() {
  variable1.textContent = 'Price to sales ratio';
  variable2.textContent = 'Number of shares outstanding';
  variable3.textContent = 'Price per share';
  pricetosalesratio = v1;
  numberofsharesoutstanding = v2;
  pricepershare = v3;
  result.textContent = '';
});

numberofsharesoutstandingRadio.addEventListener('click', function() {
  variable1.textContent = 'Price to sales ratio';
  variable2.textContent = 'Sales';
  variable3.textContent = 'Price per share';
  pricetosalesratio = v1;
  sales = v2;
  pricepershare = v3;
  result.textContent = '';
});

pricepershareRadio.addEventListener('click', function() {
  variable1.textContent = 'Price to sales ratio';
  variable2.textContent = 'Sales';
  variable3.textContent = 'Number of shares outstanding';
  pricetosalesratio = v1;
  sales = v2;
  numberofsharesoutstanding = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(pricetosalesratioRadio.checked)
    result.textContent = `Price to sales ratio = ${computepricetosalesratio().toFixed(2)}`;

  else if(salesRadio.checked)
    result.textContent = `Sales = ${computesales().toFixed(2)}`;

  else if(numberofsharesoutstandingRadio.checked)
    result.textContent = `Number of shares outstanding = ${computenumberofsharesoutstanding().toFixed(2)}`;

  else if(pricepershareRadio.checked)
    result.textContent = `Price per share = ${computepricepershare().toFixed(2)}`;
})

// calculation

function computepricetosalesratio() {
  return Number(pricepershare.value) / (Number(sales.value) / Number(numberofsharesoutstanding.value));
}

function computesales() {
  return (Number(pricepershare.value) / Number(pricetosalesratio.value)) * Number(numberofsharesoutstanding.value);
}

function computenumberofsharesoutstanding() {
  return Number(sales.value) / (Number(pricepershare.value) / Number(pricetosalesratio.value));
}

function computepricepershare() {
  return Number(pricetosalesratio.value) * (Number(sales.value) / Number(numberofsharesoutstanding.value));
}