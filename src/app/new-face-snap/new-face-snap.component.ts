import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { AsyncPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, DatePipe, AsyncPipe, NgIf],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss',
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup; // FormGroup is a class that tracks the value and validity state of a group of FormControl instances
  faceSnapPreview$!: Observable<FaceSnap>; // Observable is a class that represents a stream of values over time
  urlRegex!: RegExp;

  // FormBuilder is a service that provides convenient methods for generating instances of FormControl, FormGroup, and FormArray
  constructor(
    private formBuilder: FormBuilder,
    private faceSnapService: FaceSnapsService,
    private router: Router
  ) {}

  // ngOnInit method is called when the component is initialized to create a new FormGroup instance with the FormBuilder service
  ngOnInit(): void {
    this.urlRegex = this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group(
      {
        title: [null, Validators.required],
        description: [null, Validators.required],
        imageUrl: [
          null,
          [Validators.required, Validators.pattern(this.urlRegex)],
        ],
        location: [null],
      },
      { updateOn: 'blur' }
    );

    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0,
      }))
    );
  }

  onSubmitForm(): void {
    // console.log(this.snapForm.value);
    // this.faceSnapService.addFaceSnap(this.snapForm.value); // TODO
    this.router.navigate(['/facesnaps']);
  }
}
