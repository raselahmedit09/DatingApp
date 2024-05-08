import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit {

  public memberRegistrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

  ) {

  }


  ngOnInit(): void {
    this.intitForm();
  }

  private intitForm(): void {
    this.memberRegistrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

  }



  public onSubmit(): void {

  }


}
