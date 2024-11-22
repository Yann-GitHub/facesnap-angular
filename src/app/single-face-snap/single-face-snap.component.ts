import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
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

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unsnap();
    } else {
      this.snap();
    }
  }

  snap(): void {
    // this.faceSnap.addSnap();
    this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.userHasSnapped = true;
    this.snapButtonText = 'Unsnap';
  }

  unsnap(): void {
    // this.faceSnap.removeSnap();
    this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.userHasSnapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
}
