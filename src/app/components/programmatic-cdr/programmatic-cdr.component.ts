import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-programmatic-cdr',
  template: ` <p class="sh-programmatic">programmatic-cdr - {{ myUser }}</p> `,
  styles: `.sh-programmatic{text-align:center; padding: 2em}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgrammaticCdrComponent implements OnInit, AfterViewInit {
  public myUser!: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.myUser = 'Prophet Code 🐱‍👓';
  }

  ngAfterViewInit(): void {
    this.myUser = 'Prophet Code Update!!!🐱‍🚀';
    this.changeDetectorRef.reattach();
  }
}
