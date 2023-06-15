import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() fullScreen!: boolean;
  @Input() setting!: boolean;
  @Input() tableShow!: boolean;
  @Input() data: any;
  constructor() {
    this.title = '';
  }
  ngOnInit(): void {
  }
}
