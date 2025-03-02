import { FileRequest } from '../type';
import { instance } from './axios.instance';

export const sendFileReq = async (req: FileRequest) => {
  try {
    const res = await instance.put('/file', req);
    return res.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}