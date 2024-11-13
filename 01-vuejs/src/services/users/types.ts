export type User = {
  _id: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
  role: string;
  accountType: string;
  isActive: boolean;
  codeId: string;
  codeExpired: Date;
}

export type InputCreateUser = {
  _id: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
  role: string;
  accountType: string;
  isActive: boolean;
  codeId: string;
  codeExpired: Date;
};

export type InputUpdateUser = {
  _id: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  image: string;
  role: string;
  accountType: string;
  isActive: boolean;
  codeId: string;
  codeExpired: Date;
};