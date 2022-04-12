export default class AuthService {

    static async login(email, password) {
        if (email == 'olliehovey@gmail.com' && password == 'testpassword') {
            return {
                checked: true,
                loggedIn: true,
                premiumUser: false,
                username: 'easynumbers123',
                token: '#abcfefg1234567890',
                organizationHashId: '#nidsnvkndvsk924u93ru2fn',
                organizationName: 'SyonCreative',
                organizationTeamCount: '3',
                organizationMemberCount: '9'
            }
        }

        return false;
    }

    static logout(email, password) {

    }

    static checkAuth(token) {

    }
}