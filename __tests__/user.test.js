import User from '../src/js/user.js';

describe('User', ()=>{
  test("Should correctly create User class with user's age",()=>{
    user=new User(35);
    expect(user.age).toEqual(35);
  });
});
