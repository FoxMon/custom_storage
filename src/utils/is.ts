export namespace Is {
  export function isArray(value: unknown): boolean {
    return Array.isArray(value);
  }

  export function isString(value: unknown): boolean {
    return typeof value === "string";
  }

  export function isNull(value: unknown): boolean {
    return value === null;
  }
}
