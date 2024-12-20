import { Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

export const FACESNAPS_ROUTES: Routes = [
  {
    path: 'create',
    loadComponent: () =>
      import('./components/new-face-snap/new-face-snap.component').then(
        (m) => m.NewFaceSnapComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/face-snap-list/face-snap-list.component').then(
        (m) => m.FaceSnapListComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./components/single-face-snap/single-face-snap.component').then(
        (m) => m.SingleFaceSnapComponent
      ),
    canActivate: [AuthGuard],
  },
];

//////////// Implementation without lazy loading //////////////
// import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
// import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
// import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';

// export const FACESNAPS_ROUTES: Routes = [
//   { path: 'create', component: NewFaceSnapComponent },
//   { path: '', component: FaceSnapListComponent },
//   { path: ':id', component: SingleFaceSnapComponent },
// ];
