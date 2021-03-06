export interface IError {
  error: {
    message: string;
    errors: { field: string; message: string }[];
  };
  message: string;
  name: string;
  ok: boolean;
  status: number;
  statusText: string;
}
