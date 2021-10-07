import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';

export interface iCircularMenuOption {
  icon: string;
  styles?: iStyle;
}

export interface iCircularMenuWing {
  icon: string;
  title: string;
  styles?: iStyle;
}

interface iStyle {
  [key: string]: string;
}


@Component({
  selector: 'app-circular-menu',
  templateUrl: './circular-menu.component.html',
  styleUrls: ['./circular-menu.component.scss']
})
export class CircularMenuComponent implements OnInit {

  @Input()
  menuOptions!: iCircularMenuOption;
  @Input() wings!: iCircularMenuWing[];
  @Input() disabled: boolean = false;  
  opened = false;
  showUpwards = false;
  showDownwards = true;
  showLeftSide = false;
  showRightSide = false;

  constructor() { }

  ngOnInit(): void {
  }

}
