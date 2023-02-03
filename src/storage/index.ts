import CoreStorage from "./core";
import { Storage } from "../types/storage";
import { Is } from "../utils/is";

class Storage<T extends Storage.StorageData> {
  #storage: globalThis.Storage | CoreStorage;

  constructor(storage: globalThis.Storage | CoreStorage) {
    this.#storage = storage;
  }

  value(key: keyof T): string | undefined {
    const item = this.#storage.getItem(key as string);
    if (Is.isNull(item)) return undefined;
    return JSON.parse(item as string);
  }

  keys(): Array<string> | undefined {
    const len: number = this.#storage.length;
    if (!len) return undefined;
    const keyArr: Array<string> = [];
    for (let i = 0; i < len; i++) {
      const key = this.#storage.key(i);
      if (!Is.isNull(key)) keyArr.push(key as string);
    }
    return keyArr;
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

  set(key: string, value: string) {
    this.#storage.setItem(key, value);
  }

  get(key: string): string | undefined {
    const item = this.#storage.getItem(key);
    if (!Is.isNull(item)) return item as string;
    return undefined;
  }

  remove(key: string) {
    const item = this.#storage.getItem(key);
    if (item) this.#storage.removeItem(key);
  }

  removeAll() {
    const len = this.#storage.length;
    if (!len) return;
    this.#storage.clear();
  }

  get length(): number {
    return this.#storage.length;
  }

  static asInMemory<T extends Storage.StorageData>() {
    return new Storage<T>(new CoreStorage());
  }

  static asSessionMemory<T extends globalThis.Storage>() {
    return new Storage<T>(sessionStorage);
  }

  static asLocalMemory<T extends globalThis.Storage>() {
    return new Storage<T>(localStorage);
  }
}

Object.freeze(Storage);
export default Storage;
