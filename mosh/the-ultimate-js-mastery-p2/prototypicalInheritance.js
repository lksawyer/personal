function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focus");
};

function HtmlSelectElement(items) {
  // This is one way to Set Default Values in JavaScript: items || [];
  // - items || []
  // - if value left of || is truthy, that value is used
  // - if value left of || is falsy, value right of || is used
  this.items = items || [];

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splce(this.items.indecOf(item), 1);
  };
}

HtmlSelectElement.prototype = new HtmlElement();
