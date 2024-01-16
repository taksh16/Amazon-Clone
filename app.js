const fs = require('fs');

// Create a JSON object
const jsonObject = {
  name: 'Taksh Shah',
  age: 19,
  city:'Ahmedabad',
};
const replacer = ["name:Het","city:Baroda"];

const jsonString = JSON.stringify(jsonObject,replacer, 2);

const filePath = 'output.json';

fs.writeFile(filePath, jsonString, 'utf-8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('JSON object has been stored in', filePath);
  }
});
