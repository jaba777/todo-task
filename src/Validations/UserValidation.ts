import { mixed, object, string } from 'yup';

export const userSchema = object({
  photo: mixed(),
  username: string().nullable('please add your username').required(),
});
