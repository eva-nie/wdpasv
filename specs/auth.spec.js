import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('Successful login', async () => {
        await LoginPage.login('nipixid409@naymeo.com', '123456');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });

    it('Wrong credentials throw error', async () => {
        await LoginPage.login('invalid@example.com', 'invalid');
        await expect(LoginPage.notification).toHaveTextContaining('Auth failed');
    });

    it('Email format validation', async () => {
        await LoginPage.inputEmail.setValue('invalid');
        await expect(LoginPage.emailValidation).toHaveTextContaining('\'email\' is not a valid email');
    });

    it('Email required validation', async () => {
        await LoginPage.inputEmail.setValue('invalid@example.com');
        await LoginPage.inputEmail.smartClear();
        await expect(LoginPage.emailValidation).toHaveTextContaining('Required');
    });

    it('Password required validation', async () => {
        await LoginPage.inputPassword.setValue('invalid');
        await LoginPage.inputPassword.smartClear();
        await expect(LoginPage.passwordValidation).toHaveTextContaining('Required');
    });
});




