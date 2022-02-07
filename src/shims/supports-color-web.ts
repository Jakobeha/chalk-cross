/* eslint-env browser */

import { ColorSupport } from 'shims/chalk-common/supports-color'

const isBlinkBasedBrowser = /\b(Chrome|Chromium)\//.test(navigator.userAgent)

const colorSupport = isBlinkBasedBrowser ? 'ansi' : 'none'

export const supportsColor: ColorSupport = {
  default: 'custom',
  stdout: colorSupport,
  stderr: colorSupport
}

export default supportsColor
