import { Issue, IssuePriority, IssueStatus } from "@core/interfaces/issue";

export class IssueData {
  static issues: Issue[] = [
    {
      id: '9013',
      title: 'Set up project structure ⛏️⛏️',
      description: "",
      type: 'Task',
      status: IssueStatus.DONE,
      priority: IssuePriority.HIGHEST,
      listPosition: 0,
      createdAt: '2021-05-03T14:40:01.262Z',
      updatedAt: '2021-05-03T14:40:01.262Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: [
        '7ac265f9-b9ac-443f-a2b2-795682e579a4',
      ],
      projectId: '140892'
    },
    {
      id: '9210',
      title: 'TailwindCSS configuration 😭😭😭 TailwindCSS configuration 😭😭😭 ',
      description: "",
      type: 'Task',
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.MEDIUM,
      listPosition: 0,
      createdAt: '2021-05-03T14:40:01.262Z',
      updatedAt: '2021-05-03T14:40:01.262Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: [
        'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
      ],
      projectId: '140892'
    },
    {
      id: '9361',
      title: 'Try leaving a comment on this issue.',
      description: '',
      type: 'Story',
      status: IssueStatus.IN_PROGRESS,
      priority: IssuePriority.LOWEST,
      listPosition: 0,
      createdAt: '2021-05-03T14:40:01.346Z',
      updatedAt: '2021-05-03T14:40:01.346Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['081ccaa1-5595-4621-8074-ede4927e67b0'],
      projectId: '140892'
    },
    {
      id: '9451',
      title: 'Preparing backend API with GraphQL',
      description: '',
      type: 'Story',
      status: IssueStatus.IN_PROGRESS,
      priority: IssuePriority.MEDIUM,
      listPosition: 1,
      createdAt: '2021-05-03T14:40:01.262Z',
      updatedAt: '2021-05-03T14:48:00.807Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
      projectId: '140892'
    },
    {
      id: '9631',
      title:
        'Each issue has a single reporter but can have multiple assignees.',
      description: "",
      type: 'Task',
      status: IssueStatus.IN_REVIEW,
      priority: IssuePriority.LOW,
      listPosition: 0,
      createdAt: '2021-05-03T14:40:01.350Z',
      updatedAt: '2021-05-03T14:51:09.653Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: [
        '610451aa-10c8-4d7e-9363-311357c0b0dd',
        '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
      ],
      projectId: '140892'
    },
    {
      id: '9546',
      title: 'Set up Akita state management',
      description: '',
      type: 'Story',
      status: IssueStatus.IN_REVIEW,
      priority: IssuePriority.HIGH,
      listPosition: 1,
      createdAt: '2021-05-03T14:40:01.304Z',
      updatedAt: '2021-05-03T14:52:02.173Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
      projectId: '140892'
    },
    {
      id: '9548',
      title: 'Make the CDK Drag and Drop animation smoother',
      description: "",
      type: 'Bug',
      status: IssueStatus.DONE,
      priority: IssuePriority.LOW,
      listPosition: 1,
      createdAt: '2021-05-03T14:40:01.304Z',
      updatedAt: '2021-05-03T14:52:02.173Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
      projectId: '140892'
    },
    {
      id: '9584',
      title: 'What is Angular Jira clone application? Well this is another cloned project of Jira using Kanban Board, and using NgRx as State Management.',
      description: "",
      type: 'Task',
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.MEDIUM,
      listPosition: 1,
      createdAt: '2021-05-03T14:40:00.000Z',
      updatedAt: '2021-05-03T14:51:00.000Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: [
        '081ccaa1-5595-4621-8074-ede4927e67b0',
        '610451aa-10c8-4d7e-9363-311357c0b0dd',
      ],
      projectId: '140892'
    },
    {
      id: '9554',
      title: 'Who is the author of Angular Jira clone? The author is a another software development',
      description: "",
      type: 'Task',
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGH,
      listPosition: 2,
      createdAt: '2021-05-03T14:40:00.000Z',
      updatedAt: '2021-05-03T14:51:00.000Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
      projectId: '140892'
    },
    {
      id: '9665',
      title: 'Angular router not working on Netlify on refresh',
      description: "",
      type: 'Bug',
      status: IssueStatus.DONE,
      priority: IssuePriority.HIGH,
      listPosition: 2,
      createdAt: '2021-04-12T14:40:00.000Z',
      updatedAt: '2021-04-12T14:51:00.000Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: [
        '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        '7ac265f9-b9ac-443f-a2b2-795682e579a4',
      ],
      projectId: '140892'
    },
    {
      id: '9667',
      title:
        'When creating an issue, the assignee list is not working properly on searching',
      description: "",
      type: 'Bug',
      status: IssueStatus.IN_PROGRESS,
      priority: IssuePriority.HIGH,
      listPosition: 2,
      createdAt: '2021-04-28T15:30:00.000Z',
      updatedAt: '2021-04-28T16:30:00.000Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
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
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
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
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['7ac265f9-b9ac-443f-a2b2-795682e579a4'],
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
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: [
        'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        '94502aad-c97f-43e1-a9d1-28cf3e4937a7'
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
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: [
        'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        '610451aa-10c8-4d7e-9363-311357c0b0dd'
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
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
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
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: [
        'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        '610451aa-10c8-4d7e-9363-311357c0b0dd'
      ],
      projectId: '130921'
    },
  ]
}
