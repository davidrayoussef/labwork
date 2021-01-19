class Accordian {
  constructor(data) {
    this.data = data;
  }

  render() {
    const containerDiv = document.createElement('div');
    this.data.forEach(({ heading, content }) => {
      const section = `
        <section>
          <h3>${heading}</h3>
          <p class="collapse">${content}</p>
        </section>
      `;
      containerDiv.innerHTML += section;
    });
    document.body.appendChild(containerDiv);
    document.querySelectorAll('h3').forEach(heading => {
      heading.addEventListener('click', this.handleHeadingClick);
    });
    this.renderStyle();
  }

  renderStyle() {
    const css = `
      h3 {
        font-weight: normal;
        font-size: 1.4rem;
        background: #f4f4f4;
        padding: .4rem;
        padding-left: .4rem;
        margin-bottom: .5rem;
        cursor: pointer;
      }
      p {
        font-size: 1rem;
        padding-left: .4rem;
      }
      .collapse {
        display: none;
      }
      .expand {
        display: block;
      }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  handleHeadingClick(event) {
    document.querySelectorAll('section p').forEach(p => {
      if (p.textContent !== event.target.nextElementSibling.textContent) {
        p.classList.remove('expand');
        p.classList.add('collapse');
      }
    });
    const p = event.target.nextElementSibling;
    if (p.classList.contains('expand')) {
      p.classList.remove('expand');
      p.classList.add('collapse');
    } else {
      p.classList.remove('collapse');
      p.classList.add('expand');
    }
  }
}

const accordian = new Accordian([
  { heading: 'Heading A', content: 'Content A' },
  { heading: 'Heading B', content: 'Content B' },
  { heading: 'Heading C', content: 'Content C' }
]);
accordian.render();
