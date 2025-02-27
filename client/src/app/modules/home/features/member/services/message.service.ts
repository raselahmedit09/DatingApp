
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
        console.log('Message service initialized');
    }

    sendMessage(model: any) {
        return this.http.post<Message>(this.baseUrl + 'Messages/Send', model).pipe(
            map((response: Message) => {
                if (response) {

                }
            })
        )
    }
}
