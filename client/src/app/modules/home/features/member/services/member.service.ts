import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MemberList } from '../models';
import { Observable, map, of } from 'rxjs';
import { MemberDetail } from '../models/memberDetail';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = environment.apiUrl;
  private members: MemberList[] = [];

  constructor(
    private http: HttpClient
  ) {
    console.log('Member service initialized');
  }

  public getMembers() {
    if (this.members.length > 0) return of(this.members);
    let params = new HttpParams();
    return this.http.get<MemberList[]>(this.baseUrl + 'Members/GetMembers', { params: params }).pipe(
      map((response: any) => {
        return response;
      })
    )
  }

  public getMemberWithPhotosById(memberId: number) {
    let params = new HttpParams()
      .append("id", memberId.toString());

    return this.http.get<MemberDetail[]>(this.baseUrl + 'Members/GetMemberWithPhotosById', { params: params }).pipe(
      map((response: any) => {
        return response;
      })
    )
  }
}
