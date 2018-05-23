import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() activeForm: string;
  @Output() tab: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickOnTab(tab: string): void {
    this.tab.emit(tab);
  }

}
