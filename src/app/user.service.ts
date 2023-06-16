import { Injectable } from '@angular/core';
import { type } from 'os';

export type Role = 'CRM' | 'ADMIN';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly loggedUserRole: Role;

  constructor() {
    this.loggedUserRole = 'CRM';
  }
}
