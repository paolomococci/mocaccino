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

  private handleError<T>(
    operation = 'operation', result?: T
  ) {
    return (error: any): Observable<T> => {
      console.error(error)
      this.log(
        `${operation} failed: ${error.message}`
      )
      return of(result as T)
    }
  }

  /* POST HTTP method */
  create(kind: Kind): Observable<Kind> {
    return this.httpClient.post<Kind>(
      this.baseUrl,
      kind,
      this.httpOptions
    )
      .pipe(
        tap((newKind: Kind) => this.log(
          `create new kind id=${newKind.id}`
        )),
        catchError(this.handleError<Kind>('create'))
      )
  }


  /* GET HTTP method */
  readError404<Data>(id: number): Observable<Kind> {
    const url = `${this.baseUrl}/?id=${id}`
    return this.httpClient
      .get<Kind[]>(url)
      .pipe(
        map(kinds => kinds[0]),
        tap(temp => {
          const outcome = temp ? 'retrieved' : 'not found'
          this.log(`${outcome} kind id=${id}`)
        }),
        catchError(this.handleError<Kind>(`read id=${id}`))
      )
  }

  /* GET HTTP method */
  read(id: number): Observable<Kind> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient
      .get<Kind>(url)
      .pipe(
        tap(_ => this.log(`retrieved kind by id=${id}`)),
        catchError(this.handleError<Kind>(`read id=${id}`))
      )
  }

  /* GET HTTP method */
  readAll(): Observable<Kind[]> {
    return this.httpClient
      .get<Kind[]>(
        this.baseUrl
      ).pipe(
        tap(
          _ => this.log('retrieved kinds')
        ),
        catchError(
          this.handleError<Kind[]>(
            'readAll',
            []
          )
        )
      )
  }

  /* PUT HTTP method */
  update(kind: Kind): Observable<any> {
    return this.httpClient
      .put(
        this.baseUrl,
        kind,
        this.httpOptions
      )
      .pipe(
        tap(_ => this.log(`updated kind id=${kind.id}`)),
        catchError(this.handleError<any>('update'))
      )
  }

  /* DELETE HTTP method */
  delete(id: number): Observable<Kind> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient
      .delete<Kind>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted kind id=${id}`)),
        catchError(this.handleError<Kind>('delete'))
      )
  }
}
