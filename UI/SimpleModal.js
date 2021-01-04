class Modal {
  constructor({ title = 'Are you sure?', content = '' }) {
    this.title = title;
    this.content = content;
  }

  handleClose() {
    document.querySelector('.overlay').classList.remove('show');
  }

  handleClickOutside = event => {
    if (!document.body.querySelector('.modal-container').contains(event.target)) {
      this.handleClose();
    }
  };

  addEventListeners = () => {
    document.body.querySelector('.button__cancel').addEventListener('click', this.handleClose);
    document.body.querySelector('.overlay').addEventListener('click', this.handleClickOutside);
  };

  render() {
    const { title, content } = this;
    const html = `
      <div class="overlay">
        <section class="modal-container">
          <header>${title}</header>
          ${content && '<section class="modal-content">' + content + '</section>'}
          <footer>
            <button class="button__cancel">CANCEL</button>
            <button class="button__delete">DELETE</button>
          </footer>
        </section>
      </div>
    `;
    document.body.innerHTML += html;
    this.addEventListeners();
  }
}

const modal = new Modal({
  title: 'Are you sure you want to delete?',
  content: 'This action cannot be undone.'
});
modal.render();
renderOpenModalButton();
renderStyles();

function renderOpenModalButton() {
  const button = document.createElement('button');
  button.innerText = 'DELETE';
  button.addEventListener('click', handleClick);
  document.body.appendChild(button);
  function handleClick() {
    document.querySelector('.overlay').classList.add('show');
  }
}

function renderStyles() {
  const css = `
    .overlay {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,.5);
      align-items: center;
      justify-content: center;
    }
    .overlay.show {
      display: flex;
    }
    .modal-container {
      width: 100%;
      height: 200px;
      background: white;
      display: grid;
      align-items: center;
      box-shadow: 0 0 7px #555;
      text-align: center;
    }
    .modal-container header {
      font-size: 1.25rem;
    }
    .modal-content {
      font-size: 1rem;
    }
    .modal-container footer {
      justify-self: flex-end;
      align-self: flex-end;
      padding-right: 1rem;
      padding-bottom: 1rem;
      margin-top: -1rem;
    }
    .modal-container button {
      padding: .5rem .75rem;
      margin-left: .25rem;
      border: none;
      cursor: pointer;
      color: white;
    }
    .modal-container .button__cancel {
      background: #888;
    }
    .modal-container .button__delete {
      background: #d9544f;
    }
    @media only screen and (min-width: 1000px) {
      .modal-container {
        width: 400px;
      }
    }
  `;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}
