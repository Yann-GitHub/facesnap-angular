import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
  {
    path: 'facesnaps',
    loadChildren: () =>
      import('./face-snaps/face-snaps.routes').then((m) => m.FACESNAPS_ROUTES),
  },
  { path: '', component: LandingPageComponent },
  { path: 'auth/login', component: LoginComponent },
];

////////////////////////// Implementation without lazy loading //////////////////////////
// import { Routes } from '@angular/router';
// import { FaceSnapListComponent } from './face-snaps/components/face-snap-list/face-snap-list.component';
// import { LandingPageComponent } from './landing-page/components/landing-page.component';
// import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
// import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';

// export const routes: Routes = [
//   { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
//   { path: 'facesnaps', component: FaceSnapListComponent },
//   { path: '', component: LandingPageComponent },
//   { path: 'create', component: NewFaceSnapComponent },
// ];
