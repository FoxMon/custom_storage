import { describe, it, expect } from "vitest";
import Storage from "./index";

describe("Storage test", () => {
  it("Create Storage and Storage length test", () => {
    const st = Storage.asInMemory();
    st.set("A", "Data-A");
    st.set("B", "Data-B");
    expect(st.length).toBe(2);
  });
  it("Storage get test", () => {
    const st = Storage.asInMemory();
    st.set("A", "Data-A");
    st.set("B", "Data-B");
    expect(st.get("A")).toBe("Data-A");
    expect(st.get("B")).toBe("Data-B");
  });
  it("Storage keys test", () => {
    const st = Storage.asInMemory();
    st.set("A", "Data-A");
    st.set("B", "Data-B");
    const tempArr = ["A", "B"];
    const keys = st.keys();
    expect(tempArr).toEqual(keys);
  });
  it("Storage values test", () => {
    const st = Storage.asInMemory();
    st.set("A", "Data-A");
    st.set("B", "Data-B");
    const tempArr = ["Data-A", "Data-B"];
    const values = st.values();
    expect(tempArr).toEqual(values);
  });
  it("Storage remove & remove all & get test", () => {
    const st = Storage.asInMemory();
    st.set("A", "Data-A");
    st.remove("A");
    expect(st.length).toBe(0);
    expect(st.get("A")).toEqual(undefined);
    st.set("B", "Data-B");
    st.set("C", "Data-C");
    st.removeAll();
    expect(st.length).toBe(0);
    expect(st.get("B")).toEqual(undefined);
    expect(st.get("C")).toEqual(undefined);
  });
});
