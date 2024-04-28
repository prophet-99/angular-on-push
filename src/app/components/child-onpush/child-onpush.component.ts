import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-onpush',
  template: `
    <h3 class="sh-child-title">Child (OnPush): {{ childName }}</h3>
    <app-grandchild-onpush [grandchildName]="grandchildName" />
  `,
  styleUrl: './child-onpush.component.scss',
})
export class ChildOnpushComponent {
  @Input({ required: true }) public childName!: string;
  @Input({ required: true }) public grandchildName!: string;
}
