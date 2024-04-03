import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../models';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = environment.apiUrl;
  private members: Member[] = [];

  constructor(
    private http: HttpClient
  ) {
    console.log('Member service initialized');
  }

  public getMembers() {
    if (this.members.length > 0) return of(this.members);
    let params = new HttpParams();
    return this.http.get<Member[]>(this.baseUrl + 'Members/GetMembersWithPhoto', { params: params }).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
}
