import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function message(){
  alert("Hey!!!")
}


ReactDOM.render(

  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={message} />
  </div>,
  document.getElementById('root')
)