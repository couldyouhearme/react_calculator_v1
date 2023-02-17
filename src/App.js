import React, { useState, useEffect } from 'react'

function App() {
  const [firstInput, setfirstInput] = useState('')
  const [secondInput, setsecondInput] = useState('')
  const [res, setRes] = useState('')
  const [calDisabled, setCalDisabled] = useState(true)

  const handleCalculate = (e) => {
    switch (e.target.value) {
      case '1':
        setRes(parseInt(firstInput) + parseInt(secondInput))
        break
      case '2':
        setRes(parseInt(firstInput) - parseInt(secondInput))
        break
      case '3':
        setRes(parseInt(firstInput) * parseInt(secondInput))
        break
      case '4':
        setRes(parseInt(firstInput) / parseInt(secondInput))
        break
      default:
        console.log('Error!')
        setRes('')
    }
  }

  const handlClear = () => {
    setfirstInput('')
    setsecondInput('')
    setRes('')
  }

  // Disable numeric operators if two input are not filled
  useEffect(() => {
    (firstInput && secondInput) ? setCalDisabled(false) : setCalDisabled(true)
  }, [firstInput, secondInput])


  return (
    <div className='wrapper'>
      <div className='firstInput'>
        <label>
          Number 1:
          <input type='test' value={firstInput} onChange={e => setfirstInput(e.target.value)} />
        </label>
      </div>
      <div className='secondInput'>
        <label>
          Number 2:
          <input type='test' value={secondInput} onChange={e => setsecondInput(e.target.value)} />
        </label>
      </div>
      <div className='operator'>
        <button value={1} onClick={e => handleCalculate(e)} disabled={calDisabled} >+</button>
        <button value={2} onClick={e => handleCalculate(e)} disabled={calDisabled}>-</button>
        <button value={3} onClick={e => handleCalculate(e)} disabled={calDisabled}>*</button>
        <button value={4} onClick={e => handleCalculate(e)} disabled={calDisabled}>/</button>
        <button onClick={handlClear}>Clear</button>
      </div>
      <div className='displayResult'>
        <input value={res} placeholder={'Your result is...'} />
      </div>
    </div>
  )
}

export default App

