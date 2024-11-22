import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
      new Date(),
      10
    ),

    new FaceSnap(
      'Barnabé',
      'Un bon gars !',
      'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_960_720.png',
      new Date(),
      200
    ).withLocation('à Paris'),

    new FaceSnap(
      'Cunégonde',
      'Sans commentaire...',
      'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      new Date(),
      1
    ),
  ];

  // method to get the face snaps from the service class and return a copy of the faceSnaps array using the spread operator (...)
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps]; // shallow copy
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap: FaceSnap | undefined = this.faceSnaps.find(
      (faceSnap: FaceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error(`FaceSnap with id ${faceSnapId} not found`);
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap: FaceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}
