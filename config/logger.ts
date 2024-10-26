/* eslint-disable no-console */
import { MODE } from './env'

const logger = {
  log: (...args: any[]) => {
    if (MODE !== 'production') {
      console.log(...args)
    }
  },
  info: (...args: any[]) => {
    if (MODE !== 'production') {
      console.info(...args)
    }
  },
  warn: (...args: any[]) => {
    if (MODE !== 'production') {
      console.warn(...args)
    }
  },
  error: (...args: any[]) => {
    console.error(...args)
  },
}

export default logger
