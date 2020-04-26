import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-reply [replies]="replies"></app-reply>
  `
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
