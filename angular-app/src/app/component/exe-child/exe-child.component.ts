import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exe-child',
  templateUrl: './exe-child.component.html',
  styleUrls: ['./exe-child.component.less']
})
export class ExeChildComponent implements OnInit {
  @Input() pname: string;

  constructor() {
    console.log('ChildComponent constructor', this.pname);
  }

  ngOnInit(): void {
    console.log('ChildComponent ngOnInit', this.pname);
  }

}
