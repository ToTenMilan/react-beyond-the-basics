import React from 'react';
import ReactDOM from 'react-dom';

const jsContainer = document.getElementById('js');
const reactContainer = document.getElementById('react');

const render = () => {
  // jsContainer.innerHTML = `
  //   <div class="demo">
  //     Hello js
  //     <input />
  //     <p>${new Date()}</p>
  //   </div>
  // `;

  ReactDOM.render(
    // React.createElement(
    //   "div",
    //   { className: "demo" },
    //   "hello react yolo",
    //   React.createElement('input'),
    //   React.createElement(
    //     "p",
    //     null,
    //     new Date().toString()
    //   )
    // ),
    <div className="demo">
      Hello World
      <input />
      <p>{new Date().toString()}</p>
    </div>,
    reactContainer
  );
}

setInterval(render, 1000);
