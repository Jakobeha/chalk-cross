import { Chalk, ChalkInstance } from 'shims/chalk-common'
import { initModule as initDependency1, supportsColor } from 'shims/supports-color-cli'

export function initModule (imports: {
  os: typeof import('os')
  tty: typeof import('tty')
}): void {
  initDependency1(imports)
  const { default: default_, stdout, stderr } = supportsColor()
  chalk = new Chalk(default_)
  chalkStdout = new Chalk(stdout)
  chalkStderr = new Chalk(stderr)
}

export let chalk: ChalkInstance = null as any
export let chalkStdout: ChalkInstance = null as any
export let chalkStderr: ChalkInstance = null as any

export type {
  ColorSupportLevel,
  ForegroundColor,
  BackgroundColor,
  Color,
  Modifiers,
  ChalkInstance
} from 'shims/chalk-common'
export { Chalk } from 'shims/chalk-common'
