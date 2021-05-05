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
      listPosition: 1,
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
      listPosition: 2,
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
      listPosition: 3,
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
      status: IssueStatus.TESTING,
      priority: IssuePriority.LOW,
      listPosition: 2,
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
      status: IssueStatus.TESTING,
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
      listPosition: 2,
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
      listPosition: 3,
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
      listPosition: 1,
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
      listPosition: 1,
      createdAt: '2021-04-28T15:30:00.000Z',
      updatedAt: '2021-04-28T16:30:00.000Z',
      reporterId: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
      userIds: ['d65047e5-f4cf-4caa-9a38-6073dcbab7d1'],
      projectId: '140892'
    },
  ]
}
