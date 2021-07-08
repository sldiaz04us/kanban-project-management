import { Comment } from "@core/interfaces/comment";

export class CommentData {
  static comments: Comment[] = [
    {
      id: "7404015b-50d2-4187-a6be-5bb20af956f0",
      content: {
        ops: [
          { insert: 'First comment.' }
        ]
      },
      createdAt: "2021-06-05T22:16:08.025Z",
      updatedAt: "2021-06-05T22:16:08.025Z",
      issueId: '8542',
      user: {
        id: "d65047e5-f4cf-4caa-9a38-6073dcbab7d1",
        name: "Sergio Lopez Diaz",
        email: 'sergio@kanban.com',
        avatarUrl: "https://res.cloudinary.com/comparte/image/upload/v1625469572/my-linkedin-avatar.jpg"
      },
      isEdited: false
    },
    {
      id: "c026b06f-0bd6-4601-b250-169d433c38c7",
      content: {
        ops: [
          { insert: 'Another comment', attributes: { bold: true } }
        ]
      },
      createdAt: "2021-06-05T20:16:08.025Z",
      updatedAt: "2021-06-05T20:16:08.025Z",
      issueId: '8542',
      user: {
        id: '94502aad-c97f-43e1-a9d1-28cf3e4937a7',
        name: 'Richard Hendricks',
        email: 'richard@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/richard-hendricks.png'
      },
      isEdited: false
    },
    {
      id: "14109de6-67fd-41b1-900c-b0920d8ff097",
      content: {
        ops: [
          { insert: 'Another comment', attributes: { bold: true } }
        ]
      },
      createdAt: "2021-06-05T20:16:08.025Z",
      updatedAt: "2021-06-05T20:16:08.025Z",
      issueId: '9210',
      user: {
        id: '610451aa-10c8-4d7e-9363-311357c0b0dd',
        name: 'Dinesh',
        email: 'dinesh@kanban.com',
        avatarUrl:
          'https://res.cloudinary.com/comparte/image/upload/c_scale,w_48/v1620181672/dinesh.jpg'
      },
      isEdited: false
    }
  ];
}
