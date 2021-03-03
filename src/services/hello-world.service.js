import { SettingsService } from './settings.service';
import axios from 'axios';

export class HelloWorldService extends SettingsService {
    async showHelloWorld() {
        const query = await axios.get(`${this.apiUrl}/auth/current_user`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return query.data;
    }
}
