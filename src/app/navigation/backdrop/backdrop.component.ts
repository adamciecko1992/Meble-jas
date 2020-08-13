import { Component, OnInit, ElementRef, Input, Output, EventEmitter, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit, OnDestroy {
  @Output() backdropClicked = new EventEmitter();
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.addEventListener("click", (e) => {
      e.target.style.display = "none"
      this.handleClick()
    })
    document.body.appendChild(this.el.nativeElement)
  }
  ngOnDestroy() {
    document.body.removeChild(this.el.nativeElement)
  }
  handleClick() {
    this.backdropClicked.emit()
  }

}
