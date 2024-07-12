import { useState, useEffect, useRef } from 'react';
import Test from './Checkbox';
import { addNumber as add } from './utlis';

function App() {
  const [inputValue, setInputValue] = useState('');
  const ref = useRef(0);
  const ref2 = useRef(0);

  const addNumber = () => {
    console.log('from component');
  };

  useEffect(() => {
    ref.current = ref.current + 1;
    add();
    addNumber();
    // console.log(`renderd ${ref.current}`);
    // console.log(`empty array`);
  }, []);

  useEffect(() => {
    ref.current = ref.current + 1;

    // console.log(`renderd ${ref.current}`);
    // console.log(`with ref value in array`);
  }, [ref.current, ref2.current]);

  return (
    <>
      {/*   <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // ref={ref}
      />

      <h1>Render Count: {ref.current}</h1> */}

      <Test />
    </>
  );
}

export default App;
