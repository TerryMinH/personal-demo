import { Component, OnInit, AfterViewInit } from '@angular/core';
import { range,fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-app';

  ngOnInit(): void {
    const source$ = range(0, 10);
    console.log(source$);
    source$.pipe(
      filter(x => x % 2 === 0),
      map(x => x),
      // scan((acc, x) => acc + x, 0)
    ).subscribe(x => console.log(x))

  }

  ngAfterViewInit() {
    const button = document.querySelector('button');
    fromEvent(button, 'click')
      .subscribe(() => console.log('Clicked!'));

  }
}
