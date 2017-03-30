import {h} from 'snabbdom';
import {expect} from 'chai';
import {deepEqual} from 'assert';

function snabbdomLooksLike (expected, actual) {
  try {
    deepEqual(expected, actual);

    return true;
  } catch (err) {
    return false;
  };
}

describe('divs are equal', () => {
  it('returns true when divs are equal', () => {
    const expected = h('div', ('hello world'));
    const actual = h('div', ('hello world'));

    const result = snabbdomLooksLike(expected, actual);
    expect(result).to.be.ok;
  });

  it('returns false when something is different', () => {
    const expected = h('div', ('hello world'));
    const actual = h('div', ('hello jorld'));

    const result = snabbdomLooksLike(expected, actual);
    expect(result).to.be.false;
  });
});
