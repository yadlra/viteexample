import { getCurrentTime, greet } from "./utils.js";


document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector("#counter");
  const button = document.querySelector("#increment");

  let count = 0;
  button.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });

  //color changer

  const colorButton = document.createElement("button");
  colorButton.textContent = 'Change color';
  document.body.appendChild(colorButton);

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
  let colorIndex = 0;

  colorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  });



// clock and greeting in a card

const newCard = document.createElement('div');
newCard.className = 'card';

  //clock code

  const clockDiv = document.createElement('div');
  // document.body.appendChild(clockDiv);

  setInterval(() => {
    clockDiv.textContent = getCurrentTime();
  }, 1000);

  // greeting code
  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Enter your name:';

  const greetingDiv = document.createElement('div');

  newCard.appendChild(clockDiv);
  newCard.appendChild(nameInput);
  newCard.appendChild(greetingDiv);
  document.body.appendChild(newCard);

  // document.body.appendChild(nameInput);
  // document.body.appendChild(greetingDiv);

  nameInput.addEventListener('input', (e) => {
   greetingDiv.textContent = greet(e.target.value);
  })


  //todo list code
  const todoSection = document.createElement('div');
  todoSection.clasName = 'card';

  const todoInput = document.createElement('input');
  todoInput.placeholder = 'Add new todo';

  const todoButton = document.createElement('button');
  todoButton.textContent = 'Add';
  todoButton.className = 'fancy-button';

  const todoList = document.createElement('ul');

  todoSection.appendChild(todoInput);
  todoSection.appendChild(todoButton);
  todoSection.appendChild(todoList);
  document.body.appendChild(todoSection);


  //load savedfor the todos

  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo;
    todoList.appendChild(li);
  });


  todoButton.addEventListener('click', () => {
    if (todoInput.value) {
      const li = document.createElement('li');
      li.textContent = todoInput.value;
      todoList.appendChild(li);
      todos.push(todoInput.value);
      localStorage.setItem('todos', JSON.stringify(todos));
      todoInput.value = '';
    }
  })



});
