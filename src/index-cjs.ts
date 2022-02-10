import { PLATFORM } from 'platform'
import { ChalkInstance } from 'shims/chalk-common'

let chalks: {
  chalk: ChalkInstance
  chalkStdout: ChalkInstance
  chalkStderr: ChalkInstance
}
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
try {
  if (PLATFORM === 'web') {
    chalks = require('shims/chalk-web')
  } else if (PLATFORM === 'cli') {
    const module = require('shims/chalk-cli')
    module.initModule({ os: require('os'), tty: require('tty') })
    chalks = module
  } else {
    // noinspection ExceptionCaughtLocallyJS
    throw new Error(`Unsupported platform: ${PLATFORM}`)
  }
} catch (error) {
  // Try block is needed to suppress esbuild warning
  throw error
}
/* eslint-enable no-useless-catch */
/* eslint-enable @typescript-eslint/restrict-template-expressions */
/* eslint-enable @typescript-eslint/no-var-requires */

export const {
  chalk,
  chalkStdout,
  chalkStderr
} = chalks

export * from 'shims/chalk-common'
