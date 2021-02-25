import {
  urlDashedName,
  urlUndashedName,
  saveLocalStorage,
  fetchLocalStorage,
} from '../utils';

it('returns dashed name', () => {
  expect(urlDashedName('hello world')).toBe('hello-world');
});

it("don't returns undashed name", () => {
  expect(urlDashedName('hello world')).not.toBe('hello world');
});

it('returns undashed name', () => {
  expect(urlUndashedName('hello-world')).toBe('hello world');
});

it("don't return dashed name", () => {
  expect(urlUndashedName('hello-world')).not.toBe('hello-world');
});

// Mocking localStorage functionality
const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || [];
    },
    setItem(key, value) {
      store[key] = JSON.stringify(value);
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

it('check if saveLocalStorage and fetchLocalStorage is working correctly', () => {
  const testObj = {
    project: 'proyecto',
    title: 'titulo',
    description: 'descripcion',
    done: false,
  };
  saveLocalStorage('Name', testObj);
  expect(fetchLocalStorage('Name')).toBe(
    '{"project":"proyecto","title":"titulo","description":"descripcion","done":false}',
  );
  expect(fetchLocalStorage('Name')).not.toBe(undefined);
});