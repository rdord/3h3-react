import React, { useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('sign-up error', error.message);
    }
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          label='Display Bame'
          name='displayName'
          type='text'
          value={displayName}
          required
          onChange={event => setDisplayName(event.target.value)}
        />
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
        <FormInput
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          required
          onChange={event => setConfirmPassword(event.target.value)}
        />

        <div className='buttons'>
          <CustomButton type='submit'>Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
