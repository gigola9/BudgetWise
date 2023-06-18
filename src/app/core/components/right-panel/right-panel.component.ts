import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../../containers';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {

  checked1 = true;

  checked2 = true;

  checked3 = false;

  checked4 = false;

  checked5 = false;

  checked6 = false;

  checked7 = false;

  checked8 = false;

  constructor(public app: MainComponent) {
  }

  ngOnInit(): void {
  }

}
