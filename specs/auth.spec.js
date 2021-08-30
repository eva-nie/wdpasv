import LoginPage from  '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Auth', () => {
    it('Successful login', async () => {
        await LoginPage.open();
        await LoginPage.login('nipixid409@naymeo.com', '123456');
        expect(ProfilePage.iconAvatar).toBeDisplayed();
    });
});


