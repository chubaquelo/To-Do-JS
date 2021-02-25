/* eslint-disable global-require */
// eslint-disable-next-line quotes
import { loadTasks, findIdxWithName, ToDo, addTasksListeners } from "../toDo";

it('find index with name, from given array', () => {
  expect(
    findIdxWithName('title 1', [{ title: 'title 1' }, { title: 'title 2' }]),
  ).toBe(0);
  expect(
    findIdxWithName('title 1', [{ title: 'title 1' }, { title: 'title 2' }]),
  ).not.toBe(1);
  expect(
    findIdxWithName('title 2', [{ title: 'title 1' }, { title: 'title 2' }]),
  ).toBe(1);
  expect(
    findIdxWithName('title 2', [{ title: 'title 1' }, { title: 'title 2' }]),
  ).not.toBe(0);
});

it('class ToDo creates ToDo object correctly', () => {
  const testClass = new ToDo(
    'Test ToDo',
    'Test description',
    'Default',
  );
  expect(typeof testClass).toBe('object');
  expect(typeof testClass).not.toBe('string');
  expect(testClass.title).toBe('Test ToDo');
  expect(testClass.title).not.toBe('Some other Test ToDo');
  expect(testClass.description).toBe('Test description');
  expect(testClass.description).not.toBe('Other Test description');
});
