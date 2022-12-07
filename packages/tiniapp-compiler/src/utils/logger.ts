export function debug(message: string, ...optionalParams: any[]): void {
  if (process.env.TINIAPP_DEBUG) {
    console.log(`[TINIAPP-LOGGER] ${message}`, ...optionalParams);
  }
}

const logger = {
  render: (message: string, ...optionalParams: any[]) => {
    debug('render', message, optionalParams);
  },
  worker: (message: string, ...optionalParams: any[]) => {
    debug('worker', message, optionalParams);
  },
};

export const performance = {
  _startTime: 0,
  _endTime: 0,
  start: function () {
    this._startTime = new Date().getTime();
    debug('performance', 'start', this._startTime);
  },
  end: function () {
    this._endTime = new Date().getTime();
    debug('performance', 'end', this._endTime);
    debug('performance', 'result', `${this._endTime - this._startTime}ms`);

    this._startTime = 0;
    this._endTime = 0;
  },
};

export default logger;
