import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  userEmail!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onContinue() {
    this.router.navigate(['/facesnaps']);
    console.log('Navigating to /facesnaps');
  }

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
    // console.log(this.userEmail);
  }
}
