<h1 align="center">Kanban Project Management</h1>

Kanban Project Management is a web application to manage software development projects.
> **Kanban** is a workflow management method for defining, managing, and improving services that deliver knowledge work. It aims to help you visualize your > work, maximize efficiency, and improve continuously.

## Demo
Check out the **live application** -> [https://kanban-project-managemen-69aa2.web.app/](https://kanban-project-managemen-69aa2.web.app/)

![demo](https://user-images.githubusercontent.com/61401062/125845756-a2bc1f07-c0b1-4585-aa92-8a8745df7eee.gif)


## Features 🚀
Some of the things you can do with **Kanban Project Management**:
- Create, read, update, delete and list [(CRUDL)](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) projects.
- Filter and sort projects.
- Create, read, update, delete and list issues of each project
- Filter issues.
- Drag and drop an issue onto the kanban board.
- Create, read, update, delete and list comments of each issue.


## Built with 🛠️
![Tech stack](https://res.cloudinary.com/comparte/image/upload/v1626413844/tech-stack.png)
- [Angular](https://angular.io/) - An Application Design Framework and Development Platform for creating efficient and sophisticated single-page apps.
- [NgRx](https://ngrx.io/) - NgRx Store provides reactive state management for Angular apps inspired by Redux.
- [NG-ZORRO](https://ng.ant.design/docs/introduce/en) - An enterprise-class Angular UI component library based on Ant Design.
- [ngx-quill](https://github.com/KillerCodeMonkey/ngx-quill) - An Angular module for the [Quill Rich Text Editor](https://quilljs.com/)
- [RxJS](https://rxjs.dev/) - A javascript library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
- [angular/cdk/drag-drop](https://material.angular.io/cdk/drag-drop/overview) - Provides you with a way to easily and declaratively create drag-and-drop interfaces.
- [angular-in-memory-web-api](https://github.com/angular/angular/tree/master/packages/misc/angular-in-memory-web-api) - An in-memory web api for Angular demos and tests that emulates CRUD operations over a REST API.


## Getting started 🏁
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/sldiaz04us/kanban-project-management)

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

- `git clone https://github.com/sldiaz04us/kanban-project-management.git`
- `cd kanban-project-management/frontend/` 
- `npm install` to install all dependencies
- `npm run start` this command runs the frontend application implemented in angular.
- Navigate to `http://localhost:4200/`

This project mimics communication with a remote data server by using the [in-memory-web-api](https://github.com/angular/angular/tree/master/packages/misc/angular-in-memory-web-api) module. By default this service adds a 500ms delay to all data requests to simulate round-trip latency, but you can change or eliminate the latency by setting a different `delay` value:

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    HttpClientInMemoryWebApiModule.forRoot(AppData, { delay: 10 }), // 10ms delay
    ...
  ],
  providers: [
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## What's missing❓
### A Real Backend Api
Currently this project use **angular-in-memory-web-api** to emulates CRUD operations over a REST API, so the application data is stored in memory and every time the web is reloaded, the data will be restored. In the future, the backend will be implemented with NestJS, a progressive Node.js framework for building efficient, reliable and scalable server-side applications.

### An Authentication and Authorization System
The application uses the same user by default. In a real product, the application must have an authentication system, where users can register and participate in the entire development process of one or more projects.

### Unit/Integration tests 🧪
I skipped writing test for this project. I might do it for the real backend api with NestJS.

### Accessibility ♿
Not all components have properly defined [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), visual focus indicators, etc.


## Author: Sergio López Díaz ✍️
You can find out more about me and my projects on:
- [![](https://img.shields.io/badge/Follow-blue?style=social&logo=linkedin&logoColor=blue&labelColor=blue&color=gray)](https://www.linkedin.com/in/sldiaz04us "Sergio Lopez Diaz")
- [![](https://img.shields.io/badge/Follow-blue?style=social&logo=twitter&logoColor=blue&labelColor=blue&color=gray)](https://twitter.com/sldiaz04us "Sergio Lopez Diaz")


## Support 🤝
Give a ⭐️ if you like this project!

Thanks a lot for stopping by and supporting me!


## You may also like ⁉️
- [Angular Weather App](https://github.com/sldiaz04us/angular-weather-app " Weather PWA") - A PWA to get the weather forecast.


## Credits
Inspired by [trungk18/jira-clone-angular](https://github.com/trungk18/jira-clone-angular) and [Jira Software](https://www.atlassian.com/software/jira)


## License 📝
Feel free to use my code on your project. Please put a reference to this repository.

This project is under the MIT license. See the [LICENSE](https://github.com/sldiaz04us/kanban-project-management/blob/main/LICENSE) for more information.
