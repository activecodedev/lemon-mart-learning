// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthMode } from '../app/auth/auth.enum'

export const environment = {
  production: false,
  baseUrl: 'http://localhost:3000',
  authMode: AuthMode.InMemory,
  firebase: {
    projectId: 'active-store-learning',
    appId: '1:846214862875:web:a6ed827ecc50bd592580be',
    storageBucket: 'active-store-learning.firebasestorage.app',
    apiKey: 'AIzaSyDmygXsQ6GbPa4ASD6YADWokSdbc6CVaZM',
    authDomain: 'active-store-learning.firebaseapp.com',
    messagingSenderId: '846214862875',
    measurementId: 'G-6VBGQFCWZ4',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
