import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput((name) => name.trim() !== '');
  
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput((name) => name.trim() !== '');


  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput((email) => email.includes('@'));

  let formIsValid = false;

  if(enteredEmailIsValid && enteredFirstNameIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.prevent.default();

    if(!formIsValid)
      return;

    // console.log("Submitted!\n", enteredFirstName, enteredLastName, enteredEmail)
    console.log('koble');
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const firstNameClasses = firstNameInputHasError 
    ? 'form-control invalid'
    : 'form-control';
  
    const lastNameClasses = lastNameInputHasError 
    ? 'form-control invalid'
    : 'form-control';
  
    const emailClasses = emailInputHasError 
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredFirstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}  
          />
          {firstNameInputHasError && <p className="error-text">First Name must not be empty.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}  
          />
          {lastNameInputHasError && <p className="error-text">Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler} 
        />
        {!enteredEmailIsValid && emailInputHasError && <p className="error-text">Email is not valid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
