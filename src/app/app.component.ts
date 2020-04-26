import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Load replies through <i>ng-container</i> and <i>ng-template</i></h1>
    <ng-container
      *ngTemplateOutlet="replyThread; context: { $implicit: replies }"
    ></ng-container>
    <ng-template #replyThread let-childReplies>
      <ul>
        <li *ngFor="let reply of childReplies">
          <b>{{ reply.id }}:</b> {{ reply.value }}
          <ng-container *ngIf="reply.children">
            <ng-container
              *ngTemplateOutlet="
                replyThread;
                context: { $implicit: reply.children }
              "
            ></ng-container>
          </ng-container>
        </li>
      </ul>
    </ng-template>
    <hr />
    <h1>Load replies through <i>app-replay</i> component</h1>
    <app-reply [replies]="replies"></app-reply>
  `,
  styles: ["ul { list-style: none }"],
})
export class AppComponent {
  replies = [
    {
      id: 1,
      value: "Lorem",
      children: [
        {
          id: 1.1,
          value: "consectetur",
          children: [
            {
              id: "1.1.1",
              value: "adipiscing ",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      value: "Ipsum",
    },
    {
      id: 3,
      value: "Dolor",
      children: [
        {
          id: 3.1,
          value: "eiusmod",
        },
        {
          id: 3.2,
          value: "labore",
          children: [
            {
              id: "3.2.1",
              value: "aliqua",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      value: "Sit",
    },
  ];
}
