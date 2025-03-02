
import cryptoRandomString from "crypto-random-string";
import { FileRequest, Item } from "../type";


export const randomString = (): string => {
  return cryptoRandomString({ length: 1024 + 512, type: "url-safe" });
};

export const genArray = (length: number): Item[] => {
  return Array.from({ length }, () => ({ value: randomString() }));
}

export const genRequest = (items: Item[]): FileRequest => {
  return {
    fileName: 'test.json',
    items
  }
}