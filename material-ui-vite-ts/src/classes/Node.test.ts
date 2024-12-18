import Node from './Node';
import { expect, test } from 'vitest';
import { MockBookmarkTreeNode } from './mockdata';

test('should be created ', () => {

  const item: MockBookmarkTreeNode = {
    title: "",
    id: ""
  };
  const n = new Node(item);
  expect(n).not.toBe(null);

});


