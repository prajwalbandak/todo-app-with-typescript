import React from 'react';
import "./App.css";
import InputField from './components/InputField';

let name : string =  "prjawal";

console.log(name);
// React.FC is functional component
const App: React.FC = () =>  {
  return (
    <div className="App">
     <span className="heading">Taskify</span>
     <InputField/>
    </div>
  );
}

export default App;
