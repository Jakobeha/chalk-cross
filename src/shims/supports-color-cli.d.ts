import { ColorSupport } from 'shims/chalk-common/supports-color'

export declare function initModule (imports: {
  os: typeof import('os')
  tty: typeof import('tty')
}): void

export declare const supportsColor: ColorSupport
