import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'Balance' : (arg_0: Principal) => Promise<bigint>,
  'getSymbol' : () => Promise<string>,
  'putMon' : () => Promise<string>,
  'transfer' : (arg_0: Principal, arg_1: bigint) => Promise<string>,
}
