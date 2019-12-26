import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          name='email'
          type='email'
          value={email}
          required
          onChange={event => setEmail(event.target.value)}
        />
        <FormInput
          label='Password'
          name='password'
          type='password'
          value={password}
          required
          onChange={event => setPassword(event.target.value)}
        />

        <CustomButton type='submit'>Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          Sign In with Google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
