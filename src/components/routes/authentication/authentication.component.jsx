import SignInForm from "../../sign-in-form/sign-in-form.component";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

import { AutenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {

    return (
        <AutenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AutenticationContainer>
    )
}

export default Authentication;

