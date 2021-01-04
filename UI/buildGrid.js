/* 
Given a JSON object, build a grid of items from a list that meets 
specific design parameters (e.g., # items per row, color of title, border, 
margins, padding).
*/

function buildGrid(options) {
  const {
    items,
    itemsPerRow,
    titleColor,
    borderWidth,
    borderColor,
    margin,
    padding,
    title
  } = options;

  renderHTML();
  renderStyle();

  function renderHTML() {
    const html = `
      <h3 class="title">${title}</h3>
      <ul class="grid">
        ${items.map(item => '<li>' + item + '</li>').join('')}
      </ul>
    `;
    document.body.innerHTML = html;
  }

  function renderStyle() {
    const css = `
      .title {
        color: ${titleColor};
        text-indent: .25rem;
        margin-bottom: 0;
      }
      .grid {
        display: grid; 
        grid-template-columns: repeat(${itemsPerRow}, 200px);
        list-style: none; 
        padding: 0;
        margin-top: .25rem;
      }
      .grid li {
        border: ${borderWidth}px solid ${borderColor};
        margin: ${margin};
        padding: ${padding};
      }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
}

buildGrid({
  itemsPerRow: 4,
  titleColor: '#1245A8',
  borderWidth: 1,
  borderColor: '#999',
  margin: '5px',
  padding: '10px',
  title: 'Grid Title',
  items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9']
});
