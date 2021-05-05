import { Project } from "@core/interfaces/project";

export class ProjectData {
  static projects: Project[] = [
    {
      id: '140892',
      name: 'Sample Kanban Project',
      key: 'SKP',
      url: 'https://github.com/sldiaz04us/kanban-project-management',
      description: '',
      avatar: '',
      category: 'Software',
      createdAt: '2021-05-03T16:00:00.000Z',
      updatedAt: '2021-05-03T16:00:00.000Z',
      userIds: [
        'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        '7ac265f9-b9ac-443f-a2b2-795682e579a4',
        '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        '610451aa-10c8-4d7e-9363-311357c0b0dd',
        '081ccaa1-5595-4621-8074-ede4927e67b0'
      ],
      issueIds: [
        '9013',
        '9210',
        '9361',
        '9451',
        '9631',
        '9546',
        '9548',
        '9584',
        '9554',
        '9665',
        '9667'
      ],
    }
  ];
}
