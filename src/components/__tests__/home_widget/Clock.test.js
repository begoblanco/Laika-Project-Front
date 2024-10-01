import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import Clock from "./../../home_widget/Clock.vue";

describe("Clock.vue", () => {
  it("should display the correct time and update every second", async () => {
    vi.useFakeTimers();

    const mockDate = new Date("2023-10-01T12:34:56");
    vi.setSystemTime(mockDate);

    const wrapper = mount(Clock);

    expect(wrapper.text()).toContain("12 : 34 : 56");

    vi.advanceTimersByTime(1000);

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("12 : 34 : 57");

    vi.useRealTimers();
  });
});
