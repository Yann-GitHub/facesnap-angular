import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // variable for observable use the $ suffix to indicate that it is an observable !!
    const interval$ = interval(1000);

    // subscribe to the observable and log the value to the console
    interval$.subscribe((value) => {
      console.log(value);
    });
  }
}
