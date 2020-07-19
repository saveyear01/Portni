import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  public isMarketCollapsed: boolean = true;
  public isPortCollapsed: boolean = true;

  
  constructor() { }

  ngOnInit(): void {
  }

}
