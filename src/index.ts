import { PLATFORM } from 'platform'

/* eslint-disable @typescript-eslint/restrict-template-expressions */
const chalks = await (
  PLATFORM === 'web'
    ? import('shims/chalk-web')
    : PLATFORM === 'cli'
      ? import('shims/chalk-cli')
      : Promise.reject(new Error(`Unsupported platform: ${PLATFORM}`))
)
/* eslint-enable @typescript-eslint/restrict-template-expressions */

export const {
  chalk,
  chalkStdout,
  chalkStderr
} = chalks

export * from 'shims/chalk-common'
