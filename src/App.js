import React, { useState } from 'react';
import './App.css';
import "./testhtml";
import testHtml from './testhtml';
import newPage from './newPage'
import tableFun from './table';
import testcss from './testcss';
function App() {
  // const [count, setCount] = useState(0);
const [abc, setAbc] = useState(0);
const [def, setDef] = useState(0)
const someFunc = () =>{
  if(abc<3){
   setAbc(prevValue => {
   setDef(prevValue + 1)
   return prevValue + 1
 }
 )
 }
 }
 const ids = [1,2,3,4,5,6,7];
const listElements = ids.map((id)=>{
  return (
    <li className="body" key={id}>
     {id}
    </li>
  )
})

function FormValidation(props) {
  let [inputValue, setInputValue] = useState(props);
  let updateInput = e => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" value={inputValue} onChange={updateInput} />
      </form>
    </div>
  );
  }

 {console.log("test",someFunc(), abc,def)}
  // return (
  //   <div className='body'>
  //   test..
  //   {listElements}
  //   {FormValidation("test")}
  //   </div>
  // );
// return testHtml()
// return newPage()
// return tableFun()

return testcss()


}
export default App;
