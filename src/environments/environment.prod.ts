import { AuthMode } from '../app/auth/auth.enum'

export const environment = {
  production: true,
  baseUrl: 'http://localhost:3000',
  authMode: AuthMode.Firebase,
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
