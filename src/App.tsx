import Button from './components/Button/Button'
import { MouseEvent } from "react";
import Input from './components/Input/Input';

function App() {

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button appearance='small' onClick={addCounter} >Button</Button>
      <Button appearance='big' onClick={addCounter} >Button</Button>
      <Input placeholder='Email'/>
    </>
  );
};

export default App
