export namespace Core {
  export interface CoreStorageDataType {
    [key: string]: any;
  }

  export interface CoreStorageType {
    clear: () => void;
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
    removeItem: (key: string) => void;
  }
}
