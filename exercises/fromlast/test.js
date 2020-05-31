const fromLast = require('./index');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

test('fromLast is a function', () => {
  expect(typeof fromLast).toEqual('function');
});

test('fromLast returns the node n elements from the end in list with 1 elements', () => {
  const l = new List();

  l.insertLast('a');

  expect(fromLast(l, 0).data).toEqual('a');
});

test('fromLast returns the node n elements from the end in list with 2 elements', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');

  expect(fromLast(l, 1).data).toEqual('a');
});

test('fromLast returns the node n elements from the end in list with 5 elements', () => {
  const l = new List();

  l.insertLast('a');
  l.insertLast('b');
  l.insertLast('c');
  l.insertLast('d');
  l.insertLast('e');

  expect(fromLast(l, 3).data).toEqual('b');
});
