import * as fromUser from './user.actions';

describe('loadUsers', () => {
  it('should return an action', () => {
    expect(fromUser.loadUsers().type).toBe('[User] Load Users');
  });
});
