class Tabs {
  tabs = [
    { tabText: 'Tab 1', content: 'Content for Tab 1' },
    { tabText: 'Tab 2', content: 'Content for Tab 2' },
    { tabText: 'Tab 3', content: 'Content for Tab 3' }
  ];

  setTabsContainerStyle(style) {
    style.display = 'flex';
    style.listStyle = 'none';
    style.gridGap = '1rem';
    style.cursor = 'pointer';
  }

  render() {
    const tabsContainer = document.createElement('ul');
    this.setTabsContainerStyle(tabsContainer.style);
    document.body.appendChild(tabsContainer);

    const contentContainer = document.createElement('div');
    contentContainer.className = 'content-container';
    document.body.appendChild(contentContainer);

    this.tabs.forEach(tab => {
      const tabElement = document.createElement('li');
      tabElement.innerText = tab.tabText;
      tabElement.tabIndex = '0';
      tabElement.addEventListener('click', () => {
        const child = contentContainer.children[0];
        if (child) contentContainer.removeChild(contentContainer.children[0]);
        const tabSection = document.createElement('section');
        tabSection.innerText = tab.content;
        contentContainer.appendChild(tabSection);
      });
      tabsContainer.appendChild(tabElement);
    });
  }
}

const tabs = new Tabs();
tabs.render();
