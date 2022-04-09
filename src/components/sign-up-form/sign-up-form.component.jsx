import { useState } from "react";
import { useDispatch } from "react-redux";

import { emailSignUpStart } from "../../store/user/user.action";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { H2, SignUpContainer } from "./sign-up-form.styles.jsx";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match!");
            return;
        } else if (password.length < 6) {
            alert("the length of password must be at least 6 characters");
            return;
        }

        try {
            dispatch(emailSignUpStart(displayName, email, password));
            resetFormFields();
        } catch (error) {
            console.log("user creation encountered an error", error);
        }
    }

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignUpContainer>
            <H2>Don't have an account?</H2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={onChangeHandler} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" required onChange={onChangeHandler} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={onChangeHandler} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" required onChange={onChangeHandler} name="confirmPassword" value={confirmPassword} />
                <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;