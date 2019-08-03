import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit {

  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }

}
