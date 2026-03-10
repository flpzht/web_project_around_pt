class Card {
    constructor(text, link) {
        this._text = text;
        this._link = link;
    };
    _getTemplate() {
        const cardElement = document
            .querySelector('#card-template')
            .content
            .querySelector('.card')
            .cloneNode(true);
        return cardElement;
    }
}

export default Card;