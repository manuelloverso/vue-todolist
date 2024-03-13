const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: "",
      toDoList: [
        { text: "Haircut", done: true },
        { text: "Wash the car", done: false },
        { text: "Shopping at the supermarket", done: false },
        { text: "Go to the doctor", done: true },
      ],
    };
  },

  methods: {
    removeTask(index) {
      this.toDoList.splice(index, 1);
    },
  },
}).mount("#app");
