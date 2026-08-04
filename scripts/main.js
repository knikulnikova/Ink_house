import { setCatalog } from "./setCatalog.js";

//Контейнер с каталогом
const catalog = document.querySelector(".catalog__card-list");
//Меню кнопок
const catalogMenu = document.querySelector(".catalog__menu-list");

catalogMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("catalog__menu-button")) {
    catalogMenu.querySelectorAll(".catalog__menu-button").forEach((button) => {
      button.classList.toggle(
        "catalog__menu-button_active",
        button === e.target,
      );
    });
    setCatalog(e.target.dataset.country, catalog);
  }
});

//Первоначальная отрисовка карточек
setCatalog("france", catalog);
