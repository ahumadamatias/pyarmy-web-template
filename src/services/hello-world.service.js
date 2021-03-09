import { SettingsService } from './settings.service';
import axios from 'axios';

export class HelloWorldService extends SettingsService {
    async showHelloWorld() {
        const jwt = JSON.parse(localStorage.getItem('jwt'))
            ? JSON.parse(localStorage.getItem('jwt'))
            : '';
        const query = await axios.get(`${this.apiUrl}/auth/current_user`, {
            headers: jwt
                ? {
                      Authorization: `Bearer ${jwt}`,
                  }
                : {},
        });

        return query.data;
    }
}
