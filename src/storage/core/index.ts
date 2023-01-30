import { Core } from "../../types/core";

class CoreStorage implements Core.CoreStorageType {
  #datas: Core.CoreStorageDataType = {};

  constructor() {}

  get length(): number {
    return Object.keys(this.#datas).length;
  }

  clear() {
    this.#datas = {};
  }

  getItem(key: string): string | null {
    return this.#datas[key] ?? null;
  }

  setItem(key: string, value: string) {
    this.#datas[key] = value;
  }

  removeItem(key: string) {
    delete this.#datas[key];
  }
}

export default CoreStorage;
