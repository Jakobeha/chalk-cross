export type ColorSupportLevel = 'none' | 'ansi' | 'ansi256' | 'ansi16m' | 'custom'

export interface ColorSupport {
  default: ColorSupportLevel
  stdout: ColorSupportLevel
  stderr: ColorSupportLevel
}
