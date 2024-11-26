import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { AsyncPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common';

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

  // FormBuilder is a service that provides convenient methods for generating instances of FormControl, FormGroup, and FormArray
  constructor(private formBuilder: FormBuilder) {}

  // ngOnInit method is called when the component is initialized to create a new FormGroup instance with the FormBuilder service
  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null],
    });

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
    console.log(this.snapForm.value);
  }
}
