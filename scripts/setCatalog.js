import { data } from "../data/dataset.js";

const cardTemplate = document.getElementById("card-list-item-template").content;

export function setCatalog(country, container) {
  //Карточки для отображения
  const dataCatalog = data[country] ?? [];

  container.replaceChildren();

  dataCatalog.forEach(card => {
    const cloneCard = cardTemplate.cloneNode(true);
    const catalogCard = cloneCard.firstElementChild;

    const cardImg = catalogCard.querySelector(".card__img");
    const cardAuthor = catalogCard.querySelector(".card__desc-author");
    const cardTitle = catalogCard.querySelector(".card__desc-title");
    const cardProps = catalogCard.querySelector(".card__desc-props");
    const cardPrice = catalogCard.querySelector(".card__desc-price");
    const cardButton = catalogCard.querySelector(".card__button");

    cardImg.alt = card.title;
    cardImg.src = `../images${card.src}`
    cardAuthor.textContent = card.author;
    cardTitle.textContent = card.title;
    cardProps.textContent = card.props;
    cardPrice.textContent = card.price;
    cardButton.textContent = "В коризну";

    container.append(catalogCard);
  });
}
