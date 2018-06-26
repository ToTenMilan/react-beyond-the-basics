import React from 'react';
import ReactDOM from 'react-dom';

const jsContainer = document.getElementById('js');
const reactContainer = document.getElementById('react');

const render = () => {
  jsContainer.innerHTML = `
    <div class="demo">
      Hello js
      <input />
      <p>${new Date()}</p>
    </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "hello react",
      React.createElement('input'),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
    reactContainer
  );
}

setInterval(render, 1000);
