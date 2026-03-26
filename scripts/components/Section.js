export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    const data = items || this._renderedItems;
    data.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
}