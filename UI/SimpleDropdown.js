class Dropdown {
  handleDropdownClick(event) {
    event.currentTarget.querySelector('.menu').classList.toggle('show');
  }

  renderStyles() {
    const css = `
      li {
        list-style: none;
      }
      nav {
        display: flex;
        gap: 1rem;
        width: 20rem;
        padding: .75rem;
      }
      nav > li {
        cursor: pointer;
      }
      .icon-dropdown {
        font-size: .6rem;
      }
      .menu {
        display: none;
        padding: 0;
        box-shadow: 0 0 1px;
        margin-top: .5rem;
      }
      .menu > li {
        padding: .5rem;
      }
      .menu > li:hover {
        background-color: rgba(0,0,0,.05);
      }
      .show {
        display: block;
      }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  render() {
    const navBar = document.createElement('nav');
    const lis = `
      <li>Home</>
      <li>Contact</li>
      <li class="dropdown">
        <span>Dropdown</span>
        <span class="icon-dropdown">&#9660</span>
        <ul class="menu">
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </li>
    `;
    navBar.innerHTML = lis;
    document.body.appendChild(navBar);
    this.renderStyles();
    document.querySelector('.dropdown').addEventListener('click', this.handleDropdownClick);
  }
}

const dropdown = new Dropdown();
dropdown.render();
