import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgIf,
  NgStyle,
  UpperCasePipe,
} from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink,
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  // faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  // constructor injects dependency FaceSnapsService and ActivatedRoute
  constructor(
    private FaceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  // ngOnInit method is called when the component is initialized
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  ///// Simplified requests without getting the faceSnap again /////
  onSnap(faceSnapId: number): void {
    if (this.snapButtonText === 'Oh Snap!') {
      this.faceSnap$ = this.FaceSnapsService.snapFaceSnapById(
        faceSnapId,
        'snap'
      ).pipe(
        tap(() => {
          this.userHasSnapped = true;
          this.snapButtonText = 'Unsnap';
        })
      );
    } else {
      this.faceSnap$ = this.FaceSnapsService.snapFaceSnapById(
        faceSnapId,
        'unsnap'
      ).pipe(
        tap(() => {
          this.userHasSnapped = false;
          this.snapButtonText = 'Oh Snap!';
        })
      );
    }
  }

  private getFaceSnap() {
    const faceSnapId = Number(this.route.snapshot.params['id']);
    this.faceSnap$ = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  /////////////////////////////////// Used with data from the backend ///////////////////////////////////

  ///// Combined requests /////
  // onSnap(faceSnapId: number): void {
  //   if (this.snapButtonText === 'Oh Snap!') {
  //     this.FaceSnapsService.snapFaceSnapById(faceSnapId, 'snap')
  //       .pipe(
  //         // tap operator is used to perform side effects
  //         tap(() => {
  //           this.faceSnap$ = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  //           this.userHasSnapped = true;
  //           this.snapButtonText = 'Unsnap';
  //         })
  //       )
  //       .subscribe();
  //   } else {
  //     this.FaceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap')
  //       .pipe(
  //         tap(() => {
  //           this.faceSnap$ = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  //           this.userHasSnapped = false;
  //           this.snapButtonText = 'Oh Snap!';
  //         })
  //       )
  //       .subscribe();
  //   }
  // }

  /////////////////////////////////// Used with static data ///////////////////////////////////
  // onSnap(): void {
  //   if (this.userHasSnapped) {
  //     this.unsnap();
  //   } else {
  //     this.snap();
  //   }
  // }

  // snap(): void {
  //   this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  //   this.userHasSnapped = true;
  //   this.snapButtonText = 'Unsnap';
  // }

  // unsnap(): void {
  //   this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  //   this.userHasSnapped = false;
  //   this.snapButtonText = 'Oh Snap!';
  // }
  //////////////////////////////////////////////////////////////////////////////////////////////
}
