import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import LoginPage from "@/components/auth/Login.vue";
import { createTestingPinia } from "@pinia/testing";

describe("LoginPage.vue", () => {
  it("renders login form correctly", () => {
    const wrapper = mount(LoginPage, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.find("h2").text()).toBe("Laika-Chan is waiting for you!");

    expect(wrapper.find("input#username").exists()).toBe(true);
    expect(wrapper.find("input#password").exists()).toBe(true);

    expect(wrapper.find("button").text()).toBe("Sign in");
  });
});
