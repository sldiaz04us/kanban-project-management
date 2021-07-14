import { Issue, IssuePriority, IssueStatus } from "@core/interfaces/issue";

export class IssueData {
  static issues: Issue[] = [
    {
      id: '9013',
      title: 'Instructions for creating a project in Kanban Project Management',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "To create a project you must:" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: "Select the option  " },
          { attributes: { background: "#bbbbbb" }, insert: " + Create project " },
          { insert: " in the projects menu of the navigation toolbar." },
          { attributes: { list: "bullet" }, insert: "\n" },
          { insert: "Fill in the form without errors and click the " },
          { attributes: { background: "#0047b2", color: "#ffffff" }, insert: " Create " },
          { insert: " button." },
          { attributes: { list: "bullet" }, insert: "\n" },
          { insert: "\n" },
          { attributes: { bold: true }, insert: "Demo" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133806/create-project.gif" } }
        ]
      },
      type: 'Task',
      status: IssueStatus.DONE,
      priority: IssuePriority.HIGH,
      listPosition: 0,
      createdAt: '2021-07-01T14:40:01.262Z',
      updatedAt: '2021-07-01T14:40:01.262Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      assignees: [
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png'
        }
      ],
      projectId: '140892'
    },
    {
      id: '9210',
      title: 'As an admin user, I want to be able to assign people to a project so that I can later assign these people to any issue',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "Steps to assign people to a project:" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: "Select the option " },
          { attributes: { background: "#bbbbbb" }, insert: " People " },
          { insert: " in the Project settings menu of the navigation sidebar." },
          { attributes: { list: "bullet" }, insert: "\n" },
          { insert: "Click the " },
          { attributes: { background: "#0047b2", color: "#ffffff" }, insert: " Add people " },
          { insert: " button located in the upper right corner of the page." },
          { attributes: { list: "bullet" }, insert: "\n" },
          { insert: "Search people by names." },
          { attributes: { list: "bullet" }, insert: "\n" },
          { insert: "Click the " },
          { attributes: { background: "#0047b2", color: "#ffffff" }, insert: " Add " },
          { insert: " button to assign the selected people to the project." },
          { attributes: { list: "bullet" }, insert: "\n" },
          { insert: "\n" },
          { attributes: { bold: true }, insert: "Demo" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133827/assign-users-to-project.gif" } }
        ]
      },
      type: 'Story',
      status: IssueStatus.DONE,
      priority: IssuePriority.MEDIUM,
      listPosition: 1,
      createdAt: '2021-07-02T14:40:01.262Z',
      updatedAt: '2021-07-02T14:40:01.262Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
        },
      ],
      projectId: '140892'
    },
    {
      id: '9361',
      title: 'Instructions for creating an issue in Kanban Project Management',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "Demo" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133834/create-issue.gif" } }
        ]
      },
      type: 'Task',
      status: IssueStatus.DONE,
      priority: IssuePriority.HIGHEST,
      listPosition: 2,
      createdAt: '2021-07-03T14:40:01.346Z',
      updatedAt: '2021-07-03T14:40:01.346Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
      },
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
        }
      ],
      projectId: '140892'
    },
    {
      id: '9451',
      title: 'As an admin user, I want to be able to edit an issue so that I can later change the issue type, summary, description, status, priority, assigned users and reporter user',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "An admin user can edit the following fields in an issue:" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: "Type" },
          { attributes: { list: "ordered" }, insert: "\n" },
          { insert: "Summary" },
          { attributes: { list: "ordered" }, insert: "\n" },
          { insert: "Description" },
          { attributes: { list: "ordered" }, insert: "\n" },
          { insert: "Status" },
          { attributes: { list: "ordered" }, insert: "\n" },
          { insert: "Assignees" },
          { attributes: { list: "ordered" }, insert: "\n" },
          { insert: "Reporter" },
          { attributes: { list: "ordered" }, insert: "\n" },
          { insert: "Priority" },
          { attributes: { list: "ordered" }, insert: "\n" },
          { insert: "\n" },
          { attributes: { bold: true }, insert: "Demonstration of how to edit an issue" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133840/edit-issue.gif" } },
          { insert: "\n\n\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133846/assing-users-to-issue.gif" } }
        ]
      },
      type: 'Story',
      status: IssueStatus.IN_REVIEW,
      priority: IssuePriority.HIGHEST,
      listPosition: 0,
      createdAt: '2021-07-04T14:40:01.262Z',
      updatedAt: '2021-07-04T14:48:00.807Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
      },
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
        }
      ],
      projectId: '140892'
    },
    {
      id: '9584',
      title: 'Filter issues by summary, by users and recently updated in the Kanban board',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "Demonstration of how to filter issues" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133853/filter-issue.gif" } },
        ]
      },
      type: 'Task',
      status: IssueStatus.IN_REVIEW,
      priority: IssuePriority.LOW,
      listPosition: 1,
      createdAt: '2021-07-05T14:40:00.000Z',
      updatedAt: '2021-07-05T14:51:00.000Z',
      reporter: {
        id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        name: 'Richard Hendricks',
        email: 'richard@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png'
      },
      assignees: [
        {
          id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
          name: 'Gilfoyle',
          email: 'gilfoyle@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/gilfoyle.png'
        },
        {
          id: '610451aa-10c8-4d7e-9363-311357c0b0dd',
          name: 'Dinesh',
          email: 'dinesh@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/dinesh.jpg',
        },
      ],
      projectId: '140892'
    },
    {
      id: '9558',
      title: 'As an admin user, I want to be able to manage projects so that I can switch between projects and see all the problems for each of them, as well as be able to edit or delete a project',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "Demo" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133863/manage-projects.gif" } }
        ]
      },
      type: 'Story',
      status: IssueStatus.IN_REVIEW,
      priority: IssuePriority.HIGH,
      listPosition: 2,
      createdAt: '2021-07-06T14:40:00.000Z',
      updatedAt: '2021-07-06T14:51:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
      },
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png'
        }
      ],
      projectId: '140892'
    },
    {
      id: '9631',
      title: 'As an admin user, I want to be able to drag and drop an issue on the Kanban board so that I can change the issue status without showing the issue detail first',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "Demo" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133849/drag-drop-issue.gif" } }
        ]
      },
      type: 'Story',
      status: IssueStatus.IN_PROGRESS,
      priority: IssuePriority.LOWEST,
      listPosition: 0,
      createdAt: '2021-07-07T14:40:01.350Z',
      updatedAt: '2021-07-07T14:51:09.653Z',
      reporter: {
        id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        name: 'Richard Hendricks',
        email: 'richard@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png'
      },
      assignees: [
        {
          id: '610451aa-10c8-4d7e-9363-311357c0b0dd',
          name: 'Dinesh',
          email: 'dinesh@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/dinesh.jpg',
        }
      ],
      projectId: '140892'
    },
    {
      id: '9628',
      title: 'As a user, I want to be able to create, edit, and delete my own comments so that I can communicate with other users assigned to the same issue',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "Demonstration of how to create, edit, and delete a comment on an issue" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626135505/manage-comments.gif" } }
        ]
      },
      type: 'Story',
      status: IssueStatus.IN_PROGRESS,
      priority: IssuePriority.LOW,
      listPosition: 1,
      createdAt: '2021-07-08T14:40:00.000Z',
      updatedAt: '2021-07-08T14:51:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
      },
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png'
        }
      ],
      projectId: '140892'
    },
    {
      id: '9554',
      title: 'Delete an issue',
      description: {
        ops: [
          { attributes: { bold: true }, insert: "Demo" },
          { attributes: { header: 3 }, insert: "\n" },
          { insert: { image: "https://res.cloudinary.com/comparte/image/upload/v1626133858/delete-issue.gif" } }
        ]
      },
      type: 'Task',
      status: IssueStatus.IN_PROGRESS,
      priority: IssuePriority.MEDIUM,
      listPosition: 2,
      createdAt: '2021-07-09T14:40:00.000Z',
      updatedAt: '2021-07-09T14:51:00.000Z',
      reporter: {
        id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        name: 'Richard Hendricks',
        email: 'richard@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png'
      },
      assignees: [
        {
          id: '081ccaa1-5595-4621-8074-ede4927e67b0',
          name: 'Big Head',
          email: 'bighead@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/big-head.jpg'
        }
      ],
      projectId: '140892'
    },
    {
      id: '9398',
      title: 'Backend implementation using NestJS',
      description: {
        ops: [
          { attributes: { color: "#24292e" }, insert: "Currently this project use " },
          { attributes: { color: "#0047b2", link: "https://github.com/angular/angular/tree/master/packages/misc/angular-in-memory-web-api" }, insert: "angular-in-memory-web-api " },
          { attributes: { color: "#24292e" }, insert: "to emulates CRUD operations over a REST API, so the application data is stored in memory and every time the web is reloaded, the data will be restored. In the future, the backend will be implemented with " },
          { attributes: { color: "#a10000", bold: true }, insert: "NestJS," },
          { attributes: { color: "#24292e" }, insert: " a progressive Node.js framework for building efficient, reliable and scalable server-side applications." },
          { attributes: { blockquote: true }, insert: "\n" }
        ]
      },
      type: 'Bug',
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGHEST,
      listPosition: 0,
      createdAt: '2021-07-10T14:40:00.000Z',
      updatedAt: '2021-07-10T14:51:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
      },
      assignees: [],
      projectId: '140892'
    },
    {
      id: '9038',
      title: 'Implementation of an Authentication System',
      description: {
        ops: [
          { insert: "The application uses the same user by default. In a real product, the application must have an authentication system, where users can register and participate in the entire development process of one or more projects." },
          { attributes: { blockquote: true }, insert: "\n" }
        ]
      },
      type: 'Bug',
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGHEST,
      listPosition: 1,
      createdAt: '2021-07-11T14:40:00.000Z',
      updatedAt: '2021-07-11T14:51:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg'
      },
      assignees: [],
      projectId: '140892'
    },
    {
      id: '8542',
      title:
        'Kanban boards are often divided into streams of work, aka Swimlanes. By default, Kanban boards include an "Expedite" swimlane for items marked with the highest priority (like this one)',
      description: "",
      type: 'Task',
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGH,
      listPosition: 0,
      createdAt: '2021-04-04T15:30:00.000Z',
      updatedAt: '2021-04-04T16:30:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      assignees: [],
      projectId: '130921'
    },
    {
      id: '8543',
      title:
        'As teams develop with Kanban they get better at reducing average resolution time (aka Cycle time). The Control Chart in the Reports shows this information',
      description: "",
      type: 'Bug',
      status: IssueStatus.IN_PROGRESS,
      priority: IssuePriority.HIGH,
      listPosition: 0,
      createdAt: '2021-04-04T16:30:00.000Z',
      updatedAt: '2021-04-04T17:30:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      assignees: [{
        id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
        name: 'Gilfoyle',
        email: 'gilfoyle@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/gilfoyle.png',
      }],
      projectId: '130921'
    },
    {
      id: '8544',
      title:
        'Filters at the top of the board allow you to quickly cut down the shown items >> Try clicking the "Recently Updated" to hide work items not updated in the past day',
      description: "",
      type: 'Bug',
      status: IssueStatus.IN_PROGRESS,
      priority: IssuePriority.LOW,
      listPosition: 1,
      createdAt: '2021-04-04T16:40:00.000Z',
      updatedAt: '2021-04-04T17:40:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
        }
      ],
      projectId: '130921'
    },
    {
      id: '8545',
      title:
        'Add work items with "+ Create Issue" at the top right of the screen >> Try adding a new card now',
      description: "",
      type: 'Story',
      status: IssueStatus.IN_REVIEW,
      priority: IssuePriority.HIGHEST,
      listPosition: 0,
      createdAt: '2021-04-04T16:50:00.000Z',
      updatedAt: '2021-04-04T17:50:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      assignees: [
        {
          id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
          name: 'Gilfoyle',
          email: 'gilfoyle@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/gilfoyle.png',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
        }
      ],
      projectId: '130921'
    },
    {
      id: '8546',
      title:
        'Work items are ranked in priority order (from top to bottom) >> Try dragging this card over the card below to rank its priority lower',
      description: "",
      type: 'Bug',
      status: IssueStatus.DONE,
      priority: IssuePriority.HIGH,
      listPosition: 0,
      createdAt: '2021-04-05T18:30:00.000Z',
      updatedAt: '2021-04-05T19:30:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      assignees: [{
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      }],
      projectId: '130921'
    },
    {
      id: '8547',
      title:
        'Kanban boards are often divided into streams of work, aka Swimlanes. By default, Kanban boards include an "Expedite" swimlane for items marked with the highest priority (like this one)',
      description: "",
      type: 'Task',
      status: IssueStatus.DONE,
      priority: IssuePriority.HIGH,
      listPosition: 1,
      createdAt: '2021-04-06T15:30:00.000Z',
      updatedAt: '2021-04-06T16:30:00.000Z',
      reporter: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      assignees: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          email: 'sergio@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          email: 'richard@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
        },
        {
          id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
          name: 'Gilfoyle',
          email: 'gilfoyle@kanban.com',
          avatarUrl: 'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/gilfoyle.png',
        }
      ],
      projectId: '130921'
    },
  ]
}
