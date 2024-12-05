import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { interval, Observable, Subject, take, takeUntil, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, FormsModule, AsyncPipe, CommonModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  // faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>; // Observable is a class that represents a stream of values over time

  private destroy$!: Subject<boolean>;

  // constructor injects dependency FaceSnapsService
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    // this.faceSnaps = this.faceSnapsService.getFaceSnaps(); // Static data
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps();

    this.destroy$ = new Subject<boolean>();

    // test Observable memory leak - create multiple instances of the observable
    // interval(1000)
    //   .pipe(tap((value) => console.log(value)))
    //   .subscribe();

    // test Observable memory leak - create a single instance of the observable
    //   interval(1000)
    //     .pipe(
    //       take(1),
    //       tap((value) => console.log(value))
    //     )
    //     .subscribe();
    // }

    // test Observable memory leak - using takeUntil operator to unsubscribe from the observable
    interval(1000)
      .pipe(
        takeUntil(this.destroy$),
        tap((value) => console.log(value))
      )
      .subscribe();
  }

  // ngOnDestroy method is called when the component is destroyed - Lifecycle hook
  ngOnDestroy(): void {
    // unsubscribe from the observable
    this.destroy$.next(true);
    console.log('FaceSnapListComponent destroyed');
  }
}
