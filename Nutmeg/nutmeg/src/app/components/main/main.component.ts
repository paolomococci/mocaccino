import {
  Component,
  OnInit,
  Input
} from '@angular/core'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @Input()
  title!: string

  constructor() { }

  ngOnInit(): void {
  }

}
