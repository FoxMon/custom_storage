export namespace Storage {
  export interface StorageData {
    [key: string]: string | number | Array<unknown> | StorageData | null;
  }
}
