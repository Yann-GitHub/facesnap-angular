import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

// The FaceSnapsService class is an Angular service that provides the FaceSnap objects to the components of the application.

// The decorator @Injectable() allows Angular to inject the FaceSnapsService class into other classes.
@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  // hard-coded array of FaceSnap objects
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      1,
      'Archibalde',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
      new Date(),
      10
    ),

    new FaceSnap(
      2,
      'Barnabé',
      'Un bon gars !',
      'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png',
      new Date(),
      200
    ).withLocation('à Paris'),

    new FaceSnap(
      3,
      'Cunégonde',
      'Sans commentaire...',
      'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      new Date(),
      1
    ),
  ];

  // method to get the face snaps from the service class and return a shallow copy of the faceSnaps array using the spread operator (...)
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps]; // shallow copy
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(
      (faceSnap: FaceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error(`FaceSnap with id ${faceSnapId} not found`);
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: number, snapType: SnapType): void {
    const faceSnap: FaceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

  // addFaceSnap(formValue: {
  //   title: string;
  //   description: string;
  //   imageUrl: string;
  //   location?: string;
  // }): void {
  //   const faceSnap: FaceSnap = {
  //     ...formValue,
  //     snaps: 0,
  //     createdAt: new Date(),
  //     id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
  //   };
  //   this.faceSnaps.push(faceSnap);
  // }

  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): void {
    const faceSnap: FaceSnap = new FaceSnap(
      this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      formValue.title,
      formValue.description,
      formValue.imageUrl,
      new Date(),
      0
    );
    if (formValue.location) {
      faceSnap.setLocation(formValue.location);
    }
    this.faceSnaps.push(faceSnap);
  }
}
