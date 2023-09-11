type Email = {
  email: string;
  message: string;
};

type Request = {
  method: string;
  url: string;
  headers: Headers;
};

type SetHeaders = {
  [key: string]: string;
};

type Set = {
  headers: SetHeaders;
  status?: number | undefined;
};

type Context = {
  request: Request;
  store: {};
  set: Set;
  qi?: number;
  path: string;
};

export { Email, Context };
