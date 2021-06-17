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
      users: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          avatarUrl:
            'https://media-exp1.licdn.com/dms/image/C4D03AQGQfOf-CYNm_Q/profile-displayphoto-shrink_400_400/0/1560970587851?e=1625702400&v=beta&t=HrFDMHO2f49RfJd9iJMZExZ8XANAboTWFcphDfrXm34',
        },
        {
          id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
          name: 'Gilfoyle',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/gilfoyle.png',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
        },
        {
          id: '610451aa-10c8-4d7e-9363-311357c0b0dd',
          name: 'Dinesh',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/dinesh.jpg',
        }
      ]
    },
    {
      id: '130921',
      name: 'Another Kanban Project',
      key: 'AKP',
      url: 'https://github.com/sldiaz04us/kanban-project-management',
      description: '',
      avatar: '',
      category: 'Software',
      createdAt: '2021-04-03T16:00:00.000Z',
      updatedAt: '2021-04-03T16:00:00.000Z',
      users: [
        {
          id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
          name: 'Sergio Lopez Diaz',
          avatarUrl:
            'https://media-exp1.licdn.com/dms/image/C4D03AQGQfOf-CYNm_Q/profile-displayphoto-shrink_400_400/0/1560970587851?e=1625702400&v=beta&t=HrFDMHO2f49RfJd9iJMZExZ8XANAboTWFcphDfrXm34',
        },
        {
          id: '7ac265f9-b9ac-443f-a2b2-795682e579a4',
          name: 'Gilfoyle',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/gilfoyle.png',
        },
        {
          id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
          name: 'Richard Hendricks',
          avatarUrl:
            'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
        }
      ]
    }
  ];
}
