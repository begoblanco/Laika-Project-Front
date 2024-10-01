import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import RegisterPage from "@/components/auth/SignUp.vue";
import { createTestingPinia } from "@pinia/testing";

describe("RegisterPage.vue", () => {
  it("renders registration form correctly", () => {
    const wrapper = mount(RegisterPage, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.find("h2").text()).toBe("Laika-Chan is waiting for you!");
    expect(wrapper.find("p").text()).toBe("Sign up to meet her!");

    expect(wrapper.find("input#username").exists()).toBe(true);
    expect(wrapper.find("input#password").exists()).toBe(true);
    expect(wrapper.find("input#password2").exists()).toBe(true);

    expect(wrapper.find('button[type="submit"]').text()).toBe("Sign Up");

    expect(wrapper.find("a").text()).toBe("Sign in");
  });
});
