import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

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