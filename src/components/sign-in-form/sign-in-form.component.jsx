import { useState } from "react";

import { signInWithGooglePropup, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { ButtonsContainer, H2, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const logGoogleUser = async () => {
        await signInWithGooglePropup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                    break;
                default:
                    console.log(error);
                    break;
            }
        }
    }

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignInContainer>
            <H2>Already have an account?</H2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={onChangeHandler} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={onChangeHandler} name="password" value={password} />
                <ButtonsContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">SIGN IN</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={logGoogleUser}>GOOGLE SIGN IN</Button>
                </ButtonsContainer>
                
            </form>
        </SignInContainer>
    )
}

export default SignInForm;