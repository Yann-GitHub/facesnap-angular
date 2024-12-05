import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private auht: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onLogin(): void {
    console.log('Logging in... Bravo!');
    this.auht.login();
    this.router.navigateByUrl('/facesnaps');
  }
}
