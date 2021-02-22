import pureFunctions from './pureFunctions'
import toDo from './toDoModule';

const T = toDo;
const F = pureFunctions();

it('find index from arr with name', () => {
  expect(T.findIdxWithName('title 1', [{'title': 'title 1'}, {'title': 'title 2'}])).toBe(0);
  expect(T.findIdxWithName('title 1', [{'title': 'title 1'}, {'title': 'title 2'}])).not.toBe(1);
  expect(T.findIdxWithName('title 2', [{'title': 'title 1'}, {'title': 'title 2'}])).toBe(1);
  expect(T.findIdxWithName('title 2', [{'title': 'title 1'}, {'title': 'title 2'}])).not.toBe(0);
})

it('class ToDo is working fine', () => {
  let testClass = new T.ToDo(
    'Test ToDo',
    'Test description',
    'Default'
  );
  expect(typeof testClass).toBe('object');
  expect(typeof testClass).not.toBe("string");
  expect(testClass.title).toBe('Test ToDo');
  expect(testClass.title).not.toBe("Some other Test ToDo");
  expect(testClass.description).toBe("Test description");
  expect(testClass.description).not.toBe("Other Test description");
})
