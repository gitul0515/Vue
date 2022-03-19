const app = new Vue({
  el: "#app",
  data: {
    todos: [
      { text: 'Javascript 배우기'},
      { text: 'Vue 배우기'},
      { text: '무언가 멋진 것을 만들기'}
    ]
  }
})

app.todos.push({ text: 'New item' });