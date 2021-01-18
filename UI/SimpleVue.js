class Vue {
  constructor({ element, data }) {
    this.element = document.querySelector(element);
    this.data = data;
  }

  render() {
    Object.keys(this.data).map(key => {
      this.element.innerHTML = this.element.innerHTML.replace(
        new RegExp(`{{ ${key} }}`, 'g'),
        this.data[key]
      );
    });
  }
}

document.body.innerHTML = `
  <div id="app">
    {{ message }}
  </div>
`;

const app = new Vue({
  element: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
app.render();
