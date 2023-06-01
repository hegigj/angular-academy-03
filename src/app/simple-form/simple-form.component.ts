import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {
  idCard: string;
  gender: string;

  constructor(private userService: UserService) {
    this.idCard = '';
    this.gender = '';
  }

  ngOnInit(): void {}

  add(event: SubmitEvent): void {
    event.preventDefault();
    if (
      this.idCard &&
      this.idCard.length === 10 &&
      this.gender &&
      ['0', '1'].includes(this.gender)
    ) {
      this.userService.createUser({
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: +this.gender,
        idCard: this.idCard
      }).subscribe();
    }
  }
}
