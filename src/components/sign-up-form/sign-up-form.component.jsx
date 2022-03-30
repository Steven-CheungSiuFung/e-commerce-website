import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
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
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            user.displayName = displayName;
            const userDocRef = await createUserDocumentFromAuth(user);
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
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={onChangeHandler} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" required onChange={onChangeHandler} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={onChangeHandler} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" required onChange={onChangeHandler} name="confirmPassword" value={confirmPassword} />
                <Button buttonType="" type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;