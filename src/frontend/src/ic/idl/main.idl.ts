import { IDL } from '@dfinity/candid';

export const mainIdlFactory = ({ IDL }: any) => {
  return IDL.Service({
    analyzeText: IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};

export interface MainCanisterInterface {
  analyzeText(text: string): Promise<string>;
}
