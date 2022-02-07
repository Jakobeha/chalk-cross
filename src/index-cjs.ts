import { PLATFORM } from 'platform'
import { ChalkInstance } from 'shims/chalk-common'

function throw_ (error: Error): never {
  throw error
}

let chalks: {
  chalk: ChalkInstance
  chalkStdout: ChalkInstance
  chalkStderr: ChalkInstance
}
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
try {
  chalks =
    PLATFORM === 'web'
      ? require('shims/chalk-web')
      : PLATFORM === 'cli'
        ? require('shims/chalk-cli')
        : throw_(new Error(`Unsupported platform: ${PLATFORM}`))
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
