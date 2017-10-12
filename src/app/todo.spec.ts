import { Todo } from './todo';

describe('amit', () => {

  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

it('should accept value in the constructor',() =>{ 
 
let todo = new Todo({title:'hello1',complete:true});

expect(todo.title).toEqual('hello1');
expect(todo.complete).toEqual(true);

})


});
