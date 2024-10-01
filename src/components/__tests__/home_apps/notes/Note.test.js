import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import Notes from "@/components/home_apps/notes/Notes.vue";
import { createTestingPinia } from "@pinia/testing";

describe("Notes.vue", () => {
  it("opens full note modal when a note is clicked", async () => {
    const wrapper = mount(Notes, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    const note = {
      id: 1,
      title: "Test Note",
      content: "This is a test note.",
      date: new Date().toLocaleDateString(),
    };

    wrapper.vm.notesStore.notes.push(note);

    await wrapper.vm.$nextTick();

    await wrapper.find('button[aria-label="edit note"]').trigger("click");

    expect(wrapper.vm.fullNoteContent).toBe(note.content);
    expect(wrapper.vm.isFullNoteModalVisible).toBe(true);
  });
});
