import { signInWithGooglePropup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePropup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Propup
            </button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;