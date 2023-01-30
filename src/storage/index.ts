import CoreStorage from "./core";
import { Storage } from "../types/storage";
import { Is } from "../utils/is";

class Storage<T extends Storage.StorageData> {
  #storage: CoreStorage;

  constructor(storage: CoreStorage) {
    this.#storage = storage;
  }

  get length(): number {
    return this.#storage.length;
  }

  value(key: keyof T): string | undefined {
    const item = this.#storage.getItem(key as string);
    if (Is.isNull(item)) return undefined;
    return JSON.parse(item as string);
  }

  keys(): Array<string> | undefined {
    const len: number = this.#storage.length;
    if (!len) return undefined;
    return Object.keys(this.#storage);
  }

  values(): Array<string> | undefined {
    const len: number = this.#storage.length;
    if (!len) return undefined;
    const valueArr: Array<string> = [];
    this.keys()?.forEach((key: string) => {
      const item = this.#storage.getItem(key);
      if (item) valueArr.push(item);
    });
    return valueArr;
  }
}

Object.freeze(Storage);
export default Storage;
