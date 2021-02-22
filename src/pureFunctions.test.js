import pureFunctions from './pureFunctions';

const P = pureFunctions();

it('returns dashed name', () => {
  expect(P.urlDashedName('hello world')).toBe('hello-world');
});

it("don't returns undashed name", () => {
  expect(P.urlDashedName('hello world')).not.toBe('hello world');
});

it('returns undashed name', () => {
  expect(P.urlUndashedName('hello-world')).toBe('hello world');
});

it("don't return dashed name", () => {
  expect(P.urlUndashedName('hello-world')).not.toBe('hello-world');
});
