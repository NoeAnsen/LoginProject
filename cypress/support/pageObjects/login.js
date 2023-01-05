import { getDataTestSelector } from '../cssSelectors';
class LoginElements {
    getUsernameTextbox() {
        return getDataTestSelector('username');
    }
    getPasswordTextbox() {
        return getDataTestSelector('password');
    }
    getLoginSubmitButton() {
        return getDataTestSelector('login-button');
    }
    getErrorMessage() {
        return getDataTestSelector('error');
    }

    }
    export default LoginElements