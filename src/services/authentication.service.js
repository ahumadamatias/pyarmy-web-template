import axios from "axios";
import { SettingsService } from "./settings.service";

export class AuthenticationService extends SettingsService {
    async register(user) {
        let userPrueba = JSON.stringify(user);
        const query = await axios.post(`${this.apiUrl}/auth/users`, userPrueba, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return query.data;
    }

    async login(userCredentials) {
        userCredentials = JSON.stringify(userCredentials);
        const query = await axios.post(`${this.apiUrl}/login`, userCredentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return query.data;
    }

    async showCurrentUser() {
        const jwt = JSON.parse(localStorage.getItem('jwt'));
        const query = await axios.get(`${this.apiUrl}/auth/current_user`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt['jwt']}`
            },
        });

        return query.data;
    }
} 