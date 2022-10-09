class ListBinding {
    constructor(_element) {
        this.listElement = _element;
        this.textList = [];
        this.update();
    }

    /* Makes an <li>text</li> element/tag */
    static createListItem(_text) {
        const span = document.createElement("span");
        span.textContent = _text;

        const button = document.createElement("button");
        button.textContent = "Remove";
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });

        const li = document.createElement("li");
        li.appendChild(span);
        li.appendChild(button);
        return li;
    }

    set _textList(_textList) {
        this.textList = _textList;
        this.update();
    }

    get _textList() {
        return this.textList;
    }

    update() {
        /* Remove all existing <li> element/tags */
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }

        /* Add new <li> element/tags */
        for (const text of this.textList) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    add(_text) {
        this.textList.push(_text);
        this.update();
    }

    remove(_text) {
        const index = this.textList.indexOf(_text);
        if (index >= 0) {
            this.textList.splice(index, 1);
            this.update();
        }
    }
}
