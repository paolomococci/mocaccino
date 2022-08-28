import { Injectable } from '@angular/core'

import {
  Observable,
  of
} from 'rxjs'

import {
  catchError,
  map,
  tap
} from 'rxjs/operators'

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http'

import { Kind } from '../models/kind.model'

@Injectable({
  providedIn: 'root'
})
export class KindService {

  constructor() { }
}
