<h1 align="center">Kanban Project Management</h1>

Kanban Project Management is a web application to manage software development projects.

> **Kanban** is a workflow management method for defining, managing, and improving services that deliver knowledge work. It aims to help you visualize your > work, maximize efficiency, and improve continuously.

## Demo

Check out the live application on:

- **Frontend application only** -> [https://kanban-project-managemen-69aa2.web.app/](https://kanban-project-managemen-69aa2.web.app/)
- **Full Stack application** -> [https://kanban-project-management.netlify.app](https://kanban-project-management.netlify.app)

![demo](https://user-images.githubusercontent.com/61401062/125845756-a2bc1f07-c0b1-4585-aa92-8a8745df7eee.gif)

## Features 🚀

Some of the things you can do with **Kanban Project Management**:

- Create, read, update, delete and list [(CRUDL)](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) projects.
- Filter and sort projects.
- Add users to a project.
- Create, read, update, delete and list issues of each project
- Filter issues.
- Assign issues to users.
- Drag and drop an issue onto the kanban board.
- Create, read, update, delete and list comments of each issue.

## Built with 🛠️

### Frontend

![Frontend Tech stack](https://res.cloudinary.com/comparte/image/upload/v1626413844/tech-stack.png)

- [Angular](https://angular.io/) - An Application Design Framework and Development Platform for creating efficient and sophisticated single-page apps.
- [NgRx](https://ngrx.io/) - NgRx Store provides reactive state management for Angular apps inspired by Redux.
- [NG-ZORRO](https://ng.ant.design/docs/introduce/en) - An enterprise-class Angular UI component library based on Ant Design.
- [ngx-quill](https://github.com/KillerCodeMonkey/ngx-quill) - An Angular module for the [Quill Rich Text Editor](https://quilljs.com/)
- [RxJS](https://rxjs.dev/) - A javascript library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
- [angular/cdk/drag-drop](https://material.angular.io/cdk/drag-drop/overview) - Provides you with a way to easily and declaratively create drag-and-drop interfaces.

### Backend

![Backend Tech Stack](https://user-images.githubusercontent.com/61401062/130734976-e6c69175-1738-4841-8e0b-cb0d3b94cd7e.png)

- [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database.
- [mongoose](https://mongoosejs.com/) - An elegant mongodb object modeling for Node.js
- [mongoose-sequence](https://github.com/ramiel/mongoose-sequence) - This plugin lets you create fields which autoincrement their value.

## Getting started 🏁

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/sldiaz04us/kanban-project-management)

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

- `git clone https://github.com/sldiaz04us/kanban-project-management.git`
- `cd kanban-project-management/`
- `npm run install:all` to install all dependencies (frontend and backend)

> You can install the **frontend** and **backend** dependencies individually with `npm run install:frontend` and `npm run install:backend` respectively.

> To start the **backend** and **frontend** applications, you must run the commands on two different terminals.

### Backend application

Before you run the application, you'll also need:

- Set up [MongoDB Atlas](https://www.mongodb.com/en/cloud/atlas), a cloud MongoDB service.

  The reason why I recommend this option is due to the use of transactions to execute multiple operations in isolation and potentially undo all the operations if one of them fails. In the application, when a project is deleted, all its issues and the comments for each of those issues are also deleted.

  To execute transactions, there must be replicas of the database, and MongoDB Atlas offers this configuration out of the box.

  If you want a local configuration of mongodb, take a look at this article [Creating a MongoDB replica set using Docker](https://www.sohamkamani.com/blog/2016/06/30/docker-mongo-replica-set/).

- In the backend folder of the project, you'll find the file `.env.stage.dev`, change the value of MONGODB_URI with the **database connection string** from the previous step.

  ```
  MONGODB_URI=mongodb+srv://admin:<password>@cluster0.dmpdr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
  ```

  > Replace **\<password\>** with the password for the admin user. Replace **myFirstDatabase** with the name of the database that connections will use by default.

- `npm run start:backend`, this command runs the backend application implemented in NestJS.
- The server is listening on `http://localhost:3000/`
- `npm run seed:database`, this command, as its name suggests, seeds the database with some data.

> Since there is no Authentication System in place, for the application to work as expected, there must be at least one user in the database.

> After the database is seeded, you'll find:
>
> - A Sample Kanban Project with one issue.
> - Five predefined users
>   - Myself (Sergio Lopez Diaz)
>   - Richard Hendricks
>   - Gilfoyle
>   - Dinesh
>   - Big Head

> You can run the command to seed the database whenever you want, there is no need to stop the backend application for that.

### Frontend application

- `npm run start:frontend`, this command runs the frontend application implemented in Angular.
- Navigate to `http://localhost:4200/`

## What's missing❓

### An Authentication and Authorization System

The application uses the same user by default. In a real product, the application must have an authentication system, where users can register and participate in the entire development process of one or more projects.

### Unit/Integration tests 🧪

I skipped writing test for this project.

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
