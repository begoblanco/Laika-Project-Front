import { mount } from "@vue/test-utils";
import FullNoteModal from "@/components/home_apps/notes/modals/FullNotesModal.vue";

describe("FullNoteModal.vue", () => {
  it("renders content correctly", () => {
    const content = "This is a test note content";
    const wrapper = mount(FullNoteModal, {
      props: {
        content,
      },
    });

    expect(wrapper.find("p").text()).toBe(content);
  });

  it("emits close event when close button is clicked", async () => {
    const wrapper = mount(FullNoteModal, {
      props: {
        content: "This is a test note content",
      },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted("close")).toBeTruthy();
  });
});
