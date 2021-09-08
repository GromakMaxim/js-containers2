export default class ErrorRepository {
  constructor() {
    this.errRepository = new Map([
      ['1', 'Error'],
      ['2', 'CriticalError'],
      ['3', 'FatalError'],
      ['4', 'Abandon ship!'],
    ]);
  }

  translate(code) {
    const errMsg = this.errRepository.get(code);

    if (!errMsg) return 'UnknownError';
    return errMsg;
  }
}
