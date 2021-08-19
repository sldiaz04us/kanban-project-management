import { Comment } from '@core/interfaces/comment';

export class CommentData {
  static comments: Comment[] = [
    {
      id: '04b724aa-1dcd-437d-9914-a499c9896573',
      content: {
        ops: [
          { attributes: { bold: true }, insert: "It's done!" },
          { insert: '\n' },
        ],
      },
      createdAt: '2021-07-01T15:00:43.933Z',
      updatedAt: '2021-07-01T15:00:43.933Z',
      issueId: '9013',
      author: {
        id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        name: 'Richard Hendricks',
        email: 'richard@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
      },
      isEdited: false,
    },
    {
      id: 'f3668397-4984-4bd8-a677-a407d95e4667',
      content: {
        ops: [
          {
            attributes: { color: '#5c0000', bold: true },
            insert: 'Great job!',
          },
          { attributes: { header: 2 }, insert: '\n' },
        ],
      },
      createdAt: '2021-07-01T15:30:43.452Z',
      updatedAt: '2021-07-01T15:30:43.452Z',
      issueId: '9013',
      author: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      isEdited: false,
    },
    {
      id: '20c78548-14e7-4f0a-9879-1582bf698fa8',
      content: { ops: [{ insert: 'What do you think, Richard?\n' }] },
      createdAt: '2021-07-07T15:00:35.055Z',
      updatedAt: '2021-07-07T15:00:35.055Z',
      issueId: '9631',
      author: {
        id: '610451aa-10c8-4d7e-9363-311357c0b0dd',
        name: 'Dinesh',
        email: 'dinesh@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/dinesh.jpg',
      },
      isEdited: false,
    },
    {
      id: '7404015b-50d2-4187-a6be-5bb20af956f0',
      content: {
        ops: [{ insert: 'First comment.' }],
      },
      createdAt: '2021-06-05T22:16:08.025Z',
      updatedAt: '2021-06-05T22:16:08.025Z',
      issueId: '8542',
      author: {
        id: 'd65047e5-f4cf-4caa-9a38-6073dcbab7d1',
        name: 'Sergio Lopez Diaz',
        email: 'sergio@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg',
      },
      isEdited: false,
    },
    {
      id: 'c026b06f-0bd6-4601-b250-169d433c38c7',
      content: {
        ops: [{ insert: 'Another comment', attributes: { bold: true } }],
      },
      createdAt: '2021-06-05T20:16:08.025Z',
      updatedAt: '2021-06-05T20:16:08.025Z',
      issueId: '8542',
      author: {
        id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        name: 'Richard Hendricks',
        email: 'richard@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png',
      },
      isEdited: false,
    },
  ];
}
