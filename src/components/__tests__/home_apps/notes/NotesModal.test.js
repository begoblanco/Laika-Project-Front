import { mount } from '@vue/test-utils';
import NotesModal from '@/components/home_apps/notes/modals/NotesModal.vue';

describe('NotesModal.vue', () => {
  const note = {
    id: null,
    title: '',
    content: '',
  };

  it('renders correctly for a new note', () => {
    const wrapper = mount(NotesModal, {
      props: {
        note,
      },
    });

    // Verifica que el título del modal sea "New Note"
    expect(wrapper.find('h2').text()).toBe('New Note');
    // Verifica que los campos de entrada estén vacíos
    expect(wrapper.find('input').element.value).toBe('');
    expect(wrapper.find('textarea').element.value).toBe('');
  });

  it('renders correctly for an existing note', () => {
    const existingNote = {
      id: 1,
      title: 'Test Title',
      content: 'Test Content',
    };

    const wrapper = mount(NotesModal, {
      props: {
        note: existingNote,
      },
    });

    // Verifica que el título del modal sea "Edit Note"
    expect(wrapper.find('h2').text()).toBe('Edit Note');
    // Verifica que los campos de entrada contengan el valor correcto
    expect(wrapper.find('input').element.value).toBe(existingNote.title);
    expect(wrapper.find('textarea').element.value).toBe(existingNote.content);
  });

  it('emits save event with the note data when save button is clicked', async () => {
    const wrapper = mount(NotesModal, {
      props: {
        note: { id: null, title: 'New Title', content: 'New Content' },
      },
    });

    // Simula cambios en los campos
    await wrapper.find('input').setValue('New Title');
    await wrapper.find('textarea').setValue('New Content');

    // Simula un clic en el botón de guardar
    await wrapper.find('button.bg-purple-500').trigger('click');

    // Verifica que se emitió el evento 'save' con los datos correctos
    expect(wrapper.emitted('save')).toBeTruthy();
    expect(wrapper.emitted('save')[0]).toEqual([{ title: 'New Title', content: 'New Content', id: null }]);
  });

  it('emits close event when cancel button is clicked', async () => {
    const wrapper = mount(NotesModal, {
      props: {
        note,
      },
    });

    // Simula un clic en el botón de cerrar
    await wrapper.find('button.bg-gray-300').trigger('click');

    // Verifica que se emitió el evento 'close'
    expect(wrapper.emitted('close')).toBeTruthy();
  });
});
