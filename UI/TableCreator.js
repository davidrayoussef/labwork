class TableCreator {
  rows = 0;
  columns = 0;

  handleRows = event => {
    const rows = event.target.value;
    this.rows = rows;
    this.createTable({ rows });
  };

  handleColumns = event => {
    const columns = event.target.value;
    this.columns = columns;
    this.createTable({ columns });
  };

  createTable({ rows = this.rows, columns = this.columns } = {}) {
    document.body.querySelectorAll('table').forEach(table => document.body.removeChild(table));
    const table = document.createElement('table');

    for (let i = 0; i < rows; i++) {
      const rowElement = document.createElement('tr');
      rowElement.id = `row-${i}`;
      table.appendChild(rowElement);
    }

    Array.from(table.rows).forEach((row, rowIndex) => {
      for (let i = 0; i < columns; i++) {
        const cell = document.createElement('td');
        cell.id = `cell-${rowIndex}-${i}`;
        cell.textContent = `cell-${rowIndex}-${i}`;
        row.appendChild(cell);
      }
    });
    document.body.appendChild(table);
  }

  render() {
    const rowInput = document.createElement('input');
    rowInput.addEventListener('change', this.handleRows);
    rowInput.placeholder = 'Enter number of rows';

    const columnInput = document.createElement('input');
    columnInput.addEventListener('change', this.handleColumns);
    columnInput.placeholder = 'Enter number of columns';

    document.body.appendChild(rowInput);
    document.body.appendChild(columnInput);
    this.renderCss();
  }

  renderCss() {
    const style = document.createElement('style');
    const css = `
    td {
      border: 1px solid gray;
      padding: .25rem;
    }
    `;
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
}

const table = new TableCreator();
table.render();
