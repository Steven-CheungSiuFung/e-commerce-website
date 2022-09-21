import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import FormInput from "../form-input/form-input.component";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ButtonsContainer, H2, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <H2>Already have an account?</H2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
            SIGN IN
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logGoogleUser}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
