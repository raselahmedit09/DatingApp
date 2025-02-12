
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
        console.log('Message service initialized');
    }

    sendMessage(username: string, content: string) {
        return this.http.post<Message>(this.baseUrl + 'messages',
            { recipientUsername: username, content });
    }
}
