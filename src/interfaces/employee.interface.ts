export interface IDataEmployee {
  id: number;
  name: string;
  salary: number;
}

export interface IResponsePromise {
  ok: boolean;
  message?: string;
  employee?: IDataEmployee;
}
