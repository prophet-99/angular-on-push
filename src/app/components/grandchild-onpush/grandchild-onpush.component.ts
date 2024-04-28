import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grandchild-onpush',
  template: `
    <p class="sh-grandchild-title">Grandchild (OnPush): {{ grandchildName }}</p>
  `,
  styleUrl: './grandchild-onpush.component.scss',
})
export class GrandchildOnpushComponent {
  @Input({ required: true }) public grandchildName!: string;
}
