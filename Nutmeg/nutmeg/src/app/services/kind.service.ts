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
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class KindService {

  private baseUrl: string = 'api/kinds'

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  }

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`KindService: ${message}`)
  }
}
