import { describe, it, expect } from "vitest";
import CoreStorage from "./index";

describe("Storage data", () => {
  it("Create storage", () => {
    const cs = new CoreStorage();
    expect(cs.length).toEqual(0);
  });
  it("Storage set data and get data", () => {
    const cs = new CoreStorage();
    cs.setItem("A", "Data-A");
    expect(cs.length).toEqual(1);
    cs.setItem("B", "Data-B");
    expect(cs.length).toEqual(2);
    const mockValue = "Data-A";
    expect(cs.getItem("A")).toEqual(mockValue);
  });
  it("Storage can be empty", () => {
    const cs = new CoreStorage();
    cs.setItem("1", "2");
    cs.setItem("B", "A");
    cs.clear();
    const data1 = cs.getItem("1");
    const data2 = cs.getItem("B");
    expect(data1).toEqual(null);
    expect(data2).toEqual(null);
  });
  it("Storage remove item", () => {
    const cs = new CoreStorage();
    cs.setItem("A", "Data-A");
    cs.removeItem("A");
    const data = cs.getItem("A");
    expect(data).toEqual(null);
  });
});
