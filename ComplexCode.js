/*
Filename: ComplexCode.js

This code is a complex and sophisticated implementation that demonstrates various programming concepts and techniques.

It includes the following features:
- Object-oriented programming using classes and inheritance
- Asynchronous programming using Promises
- Error handling with try-catch statements
- Event-driven programming with custom event emitters
- Manipulation of the DOM (Document Object Model)
- AJAX requests using Fetch API
- Data manipulation and validation
- Functional programming with higher-order functions and array methods

Feel free to explore and execute the code below.
*/

// Main application class
class Application {
  constructor() {
    this.data = [];
    this.url = 'https://api.example.com/data';

    this.init();
  }

  init() {
    this.loadData()
      .then(() => {
        this.processData();
        this.render();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  loadData() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          resolve();
        })
        .catch((error) => reject(error));
    });
  }

  processData() {
    this.data = this.data.map((item) => ({
      id: item.id,
      name: item.name.toUpperCase(),
      price: item.price * 1.1,
    }));

    this.data = this.data.filter((item) => item.price > 100);
  }

  render() {
    const container = document.getElementById('data-container');

    this.data.forEach((item) => {
      const element = document.createElement('div');
      element.classList.add('item');
      element.innerHTML = `ID: ${item.id}, Name: ${item.name}, Price: ${item.price.toFixed(2)}`;
      container.appendChild(element);
    });
  }
}

// Event Emitter class
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  emit(event, data) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((callback) => {
      callback(data);
    });
  }

  remove(event, callback) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }
}

// Usage of Event Emitter
const emitter = new EventEmitter();

emitter.on('dataLoaded', () => {
  console.log('Data loaded successfully!');
});

// Error handling example
try {
  const result = someComplexFunction();
  console.log(result);
} catch (error) {
  console.error('Error:', error);
}

// DOM manipulation
const titleElement = document.getElementById('title');
titleElement.innerText = 'Complex Code Example';

// Higher-order functions and array methods
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num ** 2);

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log('Squared Numbers:', squaredNumbers);
console.log('Sum:', sum);

// Instantiate the application
const app = new Application();