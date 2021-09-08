import ErrorRepository from '../index.js';

/*
correct input
*/
test('should return error msg', () => {
  const repo = new ErrorRepository();
  const actual = repo.translate('1');
  const expected = 'Error';

  expect(actual).toStrictEqual(expected);
});

test('should return error msg', () => {
  const repo = new ErrorRepository();
  const actual = repo.translate('4');
  const expected = 'Abandon ship!';

  expect(actual).toStrictEqual(expected);
});
/*
incorrect input
*/
test('should return UnknownError', () => {
  const repo = new ErrorRepository();
  const actual = repo.translate('srthryhrtyj');
  const expected = 'UnknownError';

  expect(actual).toStrictEqual(expected);
});
