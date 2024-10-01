import { mount } from "@vue/test-utils";
import Calendar from "@/components/home_apps/calendar/Calendar.vue";
import UpcomingEvents from "@/components/home_apps/calendar/UpcomingEvents.vue";
import CalendarCard from "@/components/home_apps/calendar/CalendarCard.vue";
import EventCard from "@/components/home_apps/calendar/EventCard.vue";
import { createPinia, setActivePinia } from "pinia";
import { useEventStore } from "@/stores/eventStore";

describe("CombinedComponent Tests", () => {
  let pinia;
  let eventStore;

  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);
    eventStore = useEventStore();
  });

  it("renders Calendar with UpcomingEvents and CalendarCard", () => {
    const wrapper = mount(Calendar);

    expect(wrapper.findComponent(UpcomingEvents).exists()).toBe(true);
    expect(wrapper.findComponent(CalendarCard).exists()).toBe(true);
  });

  it("applies background image in Calendar", () => {
    const wrapper = mount(Calendar);

    expect(wrapper.find("div").attributes("style")).toContain(
      "background-image"
    );
  });

  it("renders a list of upcoming events in UpcomingEvents", async () => {
    const wrapper = mount(UpcomingEvents);

    eventStore.upcomingEvents = [
      { id: 1, title: "Event 1", start_date: new Date() },
      { id: 2, title: "Event 2", start_date: new Date() },
    ];

    await wrapper.vm.$nextTick();

    expect(wrapper.findAllComponents(EventCard).length).toBe(2);
  });

  it("renders CalendarCard correctly", () => {
    const wrapper = mount(CalendarCard);

    expect(wrapper.exists()).toBe(true);
  });
});
