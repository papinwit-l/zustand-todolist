import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const store = (set) => ({
  todo: [{ id: 1, title: "Test Todo", editing: false, done: false }],
  createTodo: (newValue) =>
    set((state) => ({
      todo: [
        ...state.todo,
        {
          id:
            state.todo.length > 0
              ? state.todo[state.todo.length - 1].id + 1
              : 1,
          title: newValue,
          editing: false,
          done: false,
        },
      ],
    })),
  deleteTodo: (idx) =>
    set((state) => ({
      todo: state.todo.filter((el) => el.id != idx),
    })),
  setEdit: (idx) =>
    set((state) => ({
      todo: state.todo.map((el) => {
        if (el.id == idx) {
          el.editing = !el.editing;
          return el;
        }
        return el;
      }),
    })),
  setTitle: (idx, value) =>
    set((state) => ({
      todo: state.todo.map((el) => {
        if (el.id == idx) {
          el.title = value;
          return el;
        }
        return el;
      }),
    })),
  setDone: (idx) =>
    set((state) => ({
      todo: state.todo.map((el) => {
        if (el.id == idx) {
          el.done = !el.done;
          return el;
        }
        return el;
      }),
    })),
});

const usePersist = {
  name: "myStore",
  storage: createJSONStorage(() => localStorage),
  partialize: (state) => ({ todo: state.todo }),
};
// const useStore = create(store);
const useStore = create(persist(store, usePersist));
console.log(usePersist);
export default useStore;
