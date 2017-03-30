```js
const expected = div('hello world');
const actual = div('hello world');

snabbdomLooksLike(expected, actual);
```

```js
// I want to know if this vnode is in there somewhere

const expected = div([
  wildcard(),
  div('hello world'),
  wildcard()
]);

const actual = div([
  div('other things'),
  div('hello world'),
  p('random text')
]);

snabbdomLooksLike(expected, actual);
```

```js
// I want to know if this vnode is at the top of my tree

const expected = div([
  p('hello world'),
  wildcard()
]);

const actual = div([
  p('hello world'),
  p('I am a tree')
]);

snabbdomLooksLike(expected, actual);
```

```js
// or at the bottom of my tree

const expected = div([
  wildcard(),
  p('hello world')
]);

const actual = div([
  div('some stuff'),
  p('hello world')
]);

snabbdomLooksLike(expected, actual);
```

I want to be able to use the `anything` keyword:

```js
const expected = div([
  p('.this-thing', anything)
]);

const actual = div([
  p('.this-thing', 'with stuff')
])
```
