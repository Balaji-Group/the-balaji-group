import { describe, expect, it } from "vitest";
import { cn, withBase } from "@/lib/utils";

describe("cn", () => {
  it("keeps the last conflicting Tailwind utility", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});

describe("withBase", () => {
  it("normalizes a leading slash for root deployments", () => {
    expect(withBase("/uploads/box.png")).toBe("/uploads/box.png");
  });
});