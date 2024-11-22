import { SnapType } from './snap-type.type';

// Definition of the FaceSnap class
export class FaceSnap {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps: number
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
    console.log(this);
  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  snap(snapType: SnapType): void {
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}

// Another way to write the FaceSnap class is to use the constructor shorthand:
// export class FaceSnap {
//     title: string;
//     description: string;
//     createdDate: Date;
//     snaps: number;
//     imageUrl: string;

//     constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
//       this.title = title;
//       this.description = description;
//       this.imageUrl = imageUrl;
//       this.createdDate = createdDate;
//       this.snaps = snaps;
//     }
//   }
