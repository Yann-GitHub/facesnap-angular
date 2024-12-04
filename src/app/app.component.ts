import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './core/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { filter, interval, map, Observable, tap } from 'rxjs';
// import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>;

  ngOnInit(): void {
    // variable for observable use the $ suffix to indicate that it is an observable !!
    // this.interval$ = interval(1000).pipe(
    //   filter((value) => value % 3 === 0),
    //   map((value) =>
    //     value % 2 === 0
    //       ? `Je suis ${value} et je suis pair`
    //       : `Je suis ${value} et je suis impair`
    //   ),
    //   tap((text) => this.logger(text))
    // );
  }

  // logger(text: string): void {
  //   console.log(text);
  // }
}
