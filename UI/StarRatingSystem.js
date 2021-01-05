class StarSystem {
  products = [
    { name: 'Item 1', rating: '☆☆☆☆☆' },
    { name: 'Item 2', rating: '☆☆☆☆☆' },
    { name: 'Item 3', rating: '☆☆☆☆☆' },
    { name: 'Item 4', rating: '☆☆☆☆☆' }
  ];

  handleClick(event) {
    const clickedStarIndex = event.target.dataset['index'];
    Array.from(event.target.parentElement.children).forEach((star, i) => {
      if (star.textContent === '☆' && clickedStarIndex >= i) {
        star.textContent = '★';
      } else if (star.textContent === '★' && clickedStarIndex < i) {
        star.textContent = '☆';
      }
    });
  }

  getLiHtmlString(product) {
    return `
      <div>${product.name}</div>
        <div>${product.rating
          .split('')
          .map((star, index) => `<span class="star" data-index="${index}">${star}</span>`)
          .join('')}
        </div>
      </div>`;
  }

  renderProducts() {
    const ul = document.createElement('ul');
    this.products.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = this.getLiHtmlString(product);
      li.addEventListener('click', this.handleClick);
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
    this.renderStyle();
  }

  renderStyle() {
    const css = `
      body {
        padding: 1rem;
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        padding: .5rem;
        font-size: 1rem;
      }
      .star {
        cursor: pointer;
        font-size: 1.5rem;
      }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
}

const starSystem = new StarSystem();
starSystem.renderProducts();
