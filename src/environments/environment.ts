/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
};
export const apiKey = 'https://movie-services.herokuapp.com/api/';
export const statistic = 'https://movie-services.herokuapp.com/api/statistic/';
export const user = 'https://movie-services.herokuapp.com/api/user/';
export const order = 'https://movie-services.herokuapp.com/api/order/';
export const movie = 'https://movie-services.herokuapp.com/api/movie/';
export const deal = 'https://movie-services.herokuapp.com/api/deal/';
export const countView = 'https://movie-services.herokuapp.com/api/count-view/';

export const firebaseConfig = {
  apiKey: 'AIzaSyAm7T0pP_et17fn8Ofh1azkJkBuThMQfHI',
  authDomain: 'store-video-1a730.firebaseapp.com',
  databaseURL: 'https://store-video-1a730-default-rtdb.firebaseio.com',
  projectId: 'store-video-1a730',
  storageBucket: 'store-video-1a730.appspot.com',
  messagingSenderId: '1076267094115',
  appId: '1:1076267094115:web:0fb50e7d44c824afe32856',
  measurementId: 'G-1SJX2MVRVX',
};
