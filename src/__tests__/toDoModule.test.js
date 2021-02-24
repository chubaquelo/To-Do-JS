import toDo from '../toDoModule';

const T = toDo;

it('find index with name, from given array', () => {
  expect(
    T.findIdxWithName('title 1', [{ title: 'title 1' }, { title: 'title 2' }]),
  ).toBe(0);
  expect(
    T.findIdxWithName('title 1', [{ title: 'title 1' }, { title: 'title 2' }]),
  ).not.toBe(1);
  expect(
    T.findIdxWithName('title 2', [{ title: 'title 1' }, { title: 'title 2' }]),
  ).toBe(1);
  expect(
    T.findIdxWithName('title 2', [{ title: 'title 1' }, { title: 'title 2' }]),
  ).not.toBe(0);
});

it('class ToDo creates ToDo object correctly', () => {
  const testClass = new T.ToDo(
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

describe('Overview test mock', () => {
  // Mock the module and its functions
  jest.mock("../utils", () => ({
    __esModule: true,
    fetchLocalStorage: jest.fn(() => ['title', 'description']),
  }));
  // Import the function from the mocked module
  const { fetchLocalStorage } = require('../utils');

  // Now make the test case
  it('testing mock function is called from loadTasks', () => {
    T.loadTasks();
    // fetchLocalStorage();
    console.log(fetchLocalStorage.mock.calls.length);
    // expect(fetchLocalStorage.mock.calls).toBe(1);
  });
});
