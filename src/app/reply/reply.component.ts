import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-reply",
  template: `
    <ul>
      <li *ngFor="let reply of replies">
        <b>{{ reply.id }}:</b> {{ reply.value }}
        <!-- 🚨 Note the usage of component inside same component -->
        <app-reply *ngIf="reply.children" [replies]="reply.children"></app-reply>
      </li>
    </ul>
  `,
  styles: ["ul { list-style: none }"],
})
export class ReplyComponent implements OnInit {
  @Input() replies: { id: string | number; value: string; children: any[] }[];

  constructor() {}

  ngOnInit(): void {}
}
