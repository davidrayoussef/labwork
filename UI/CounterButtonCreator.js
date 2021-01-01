/*
Make a "Create Counter" button that, when clicked, adds a new button 
to the page. Each new button should display how many times it's been 
clicked. Each button should maintain its own count display. In other
words, clicking on an individual button should only increment
THAT button's count.
*/

class Counter {
  count = 0;
  button = document.createElement('button');

  increment = () => {
    this.count += 1;
    this.updateButton();
  };

  updateButton() {
    this.button.textContent = `Clicked ${this.count} times`;
  }

  renderButton() {
    this.updateButton();
    this.button.addEventListener('click', this.increment);
    document.body.appendChild(this.button);
  }
}

class ButtonCreator {
  renderCounter() {
    const counter = new Counter();
    counter.renderButton();
  }

  render() {
    const button = document.createElement('button');
    button.textContent = 'Create Counter';
    button.addEventListener('click', this.renderCounter);
    document.body.appendChild(button);
  }
}

const buttonCreator = new ButtonCreator();
buttonCreator.render();

// Counter button creator as regular function
const counterCreator = () => {
  const buttonCreator = document.createElement('button');
  buttonCreator.textContent = 'Create Counter';
  buttonCreator.addEventListener('click', renderCounter);
  document.body.appendChild(buttonCreator);

  function renderCounter() {
    let count = 0;
    const buttonCounter = document.createElement('button');

    updateCounter();
    buttonCounter.addEventListener('click', handleClick);
    document.body.appendChild(buttonCounter);

    function updateCounter() {
      buttonCounter.textContent = `Clicked ${count} times`;
    }

    function handleClick() {
      count++;
      updateCounter();
    }
  }
};

counterCreator();
