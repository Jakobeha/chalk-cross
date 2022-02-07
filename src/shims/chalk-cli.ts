import { Chalk } from 'shims/chalk-common'
import { supportsColor } from 'shims/supports-color-cli'

export const chalk = new Chalk(supportsColor.default)
export const chalkStdout = new Chalk(supportsColor.stdout)
export const chalkStderr = new Chalk(supportsColor.stderr)

export type {
  ColorSupportLevel,
  ForegroundColor,
  BackgroundColor,
  Color,
  Modifiers,
  ChalkInstance
} from 'shims/chalk-common'
export { Chalk } from 'shims/chalk-common'
