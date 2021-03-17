// import React and useState from react
import React, { useState } from 'react';
// import the validateEmail helper
import { validateEmail } from '../../utils/helpers';

function Contact () {
    // hook that manages the form data and clears the fields on page reloading
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // set the initial state of the error message to an empty string
    // set the hook to handle the error messages
    const [errorMessage, setErrorMessage] = useState('');
    // destructure fromState into it's named properties
    const { name, email, message } = formState;

    // prevent the default action from the form submit and handle submit error message
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
    // sync the internal state of the component formState with the use input from the DOM
    const handleChange = (e) => {
      // validate the email
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        // conditional validation where if it is truthy it is assigned an empty string
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
        // check the message and name form elements to see if they are left blank.
        // if the fields are left blank send a message to the bottom of the contact form
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        // update the formState for each property
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };
    // render the contact form
    return (
        <div>
            <h3>Contact Me</h3>
            <div className="form-content">
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor='name'>Name:</label>
                        </div>
                        <div>
                            <input type='text' defaultValue={name} onBlur={handleChange} name='name' /> 
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='email'>Email Address:</label>
                        </div>
                        <div>
                            <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='message'>Message:</label>
                        </div>
                        <div>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;