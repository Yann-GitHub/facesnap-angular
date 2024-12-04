import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  // snapButtonText!: string;
  // userHasSnapped!: boolean;
  // myLargeNumber: number = 123456.76;
  // myPercentage: number = 0.3367;
  // myPrice: number = 336.75;

  // constructor(private FaceSnapsService: FaceSnapsService) {}

  // ngOnInit(): void {
  //   this.snapButtonText = 'Oh Snap!';
  //   this.userHasSnapped = false;
  // }

  // onSnap(): void {
  //   if (this.userHasSnapped) {
  //     this.unsnap();
  //   } else {
  //     this.snap();
  //   }
  // }

  // snap(): void {
  //   // this.faceSnap.addSnap();
  //   this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  //   this.userHasSnapped = true;
  //   this.snapButtonText = 'Unsnap';
  // }

  // unsnap(): void {
  //   // this.faceSnap.removeSnap();
  //   this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  //   this.userHasSnapped = false;
  //   this.snapButtonText = 'Oh Snap!';
  // }

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    console.log('Navigating to /facesnaps/' + this.faceSnap.id);
  }
}
