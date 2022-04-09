import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed, signOutSuccess, signOutFailed, emailSignUpFailed } from "./user.action";

import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePropup, signInUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser } from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePropup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signUpWithEmail({payload: {displayName, email, password}}) {
    try {
        const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
        user.displayName = displayName;
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(emailSignUpFailed(error));
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield call(signInUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signOutSaga() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutSaga)
}

export function* onEmailSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, signUpWithEmail)
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onEmailSignUpStart), call(onSignOutStart)]);
}
