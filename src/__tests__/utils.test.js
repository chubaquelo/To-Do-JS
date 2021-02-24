import {
  fetchLocalStorage,
  saveLocalStorage,
  urlDashedName,
  urlUndashedName,
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

// fetchLocalStorage = () => "{'Default': 'data'}";

// it("fetchLocalStorage Mock works correctly", () => {
//   // console.log(localStorage.getItem('Default'))
//   console.log(fetchLocalStorage('Default'));
// })
