var Component = /** @class */ (function () {
    function Component(htmlElement) {
        this.htmlElement = htmlElement;
    }
    Component.prototype.start = function () {
        this.htmlElement.innerHTML = 'hello ts';
    };
    return Component;
}());
//# sourceMappingURL=component.js.map