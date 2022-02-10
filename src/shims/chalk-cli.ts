import { Chalk } from 'shims/chalk-common'
import { initModule as initDependency1, supportsColor } from 'shims/supports-color-cli'

export function initModule (imports: {
  os: typeof import('os')
  tty: typeof import('tty')
}): void {
  initDependency1(imports)
}

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
