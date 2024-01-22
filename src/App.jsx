import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'

function App() {

  const [displayVal, setDisplayVal] = useState("");

  const handleClickButton = (num) => {
    if(num === 'C') {
      setDisplayVal("");
    }
    else if(num === '=') {
      setDisplayVal(eval(displayVal));
    }
    else {
      const newVal = displayVal + num;
      setDisplayVal(newVal);
    }
  }



  const values = ['C', '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '+', '0', '=']


  return (
    <div className='outline-none w-full h-screen'>
      <div className=' w-60 mx-14 py-5 flex flex-col items-center border-solid border-2 rounded-lg border-black'>
        <input
          className='px-3 py-5 rounded-l border border-gray-500'
          type="text"
          placeholder='Enter amount'
          readOnly
          value={displayVal}
        />
        <div className='py-5 flex flex-wrap gap-4 px-2'>
          {values.map((elem) => (
            <Buttons val={elem} handleClickButton={handleClickButton} />
          ))}

        </div>


      </div>
    </div>
  )
}

export default App;
