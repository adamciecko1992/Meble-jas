import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent implements OnInit {
  @Output() togglerClicked = new EventEmitter();
  constructor() { }
  faBars = faBars;
  ngOnInit(): void {
  }
  handleToggle = () => {
    this.togglerClicked.emit()
  }
}
