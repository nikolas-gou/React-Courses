import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim() == '') {
      setEnteredName(false);
      return;
    }

    setEnteredName(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    
    setEnteredName('');
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={nameInputRef} 
          type='text' 
          id='name' 
          onChange={nameInputHandler} 
          value={enteredName}
        />
        {!enteredNameIsValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
