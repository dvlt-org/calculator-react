import React, { useState } from 'react'
import "./App.css"

export default function App() {
  const [value, setValue] = useState("")

  function changeValue(event) {
    setValue(value + event.target.value)
  }

  function deFunction() {
    setValue(prevValue => prevValue.slice(0, -1))
  }

  function acFunction() {
    setValue("")
  }

  function equalFunction() {
    setValue(eval(value))
  }

  return (
    <div className='calculator'>
      <form>
        <input type="text" value={value} readOnly />
        <div>
          <input type="button" value="AC" onClick={acFunction} />
          <input type="button" value="DE" onClick={deFunction} />
          <input type="button" value="." onClick={changeValue} />
          <input type="button" value="/" onClick={changeValue} />
        </div>
        <div>
          <input type="button" value="7" onClick={changeValue} />
          <input type="button" value="8" onClick={changeValue} />
          <input type="button" value="9" onClick={changeValue} />
          <input type="button" value="*" onClick={changeValue} />
        </div>
        <div>
          <input type="button" value="4" onClick={changeValue} />
          <input type="button" value="5" onClick={changeValue} />
          <input type="button" value="6" onClick={changeValue} />
          <input type="button" value="+" onClick={changeValue} />
        </div>
        <div>
          <input type="button" value="1" onClick={changeValue} />
          <input type="button" value="2" onClick={changeValue} />
          <input type="button" value="3" onClick={changeValue} />
          <input type="button" value="-" onClick={changeValue} />
        </div>
        <div className='last-div'>
          <input type="button" value="00" onClick={changeValue} />
          <input type="button" value="0" onClick={changeValue} />
          <input type="button" value="=" onClick={equalFunction} className='equal' />
        </div>
      </form>
    </div>
  )
}
