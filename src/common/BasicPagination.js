//Этот код создает класс BasicPagination, который генерирует интерфейс пагинации с кнопками,
// количество которых определяется параметром totalPages. При создании объекта:
// Кнопки страниц отображаются в указанном контейнере (containerId).
// При нажатии на кнопку вызывается метод changePage, который обновляет текущую страницу и активирует соответствующую кнопку

class BasicPagination {
  constructor(totalPages, containerId) {
    this.totalPages = totalPages;
    this.currentPage = 0;
    this.container = document.getElementById(containerId);

    // Проверяем, был ли найден контейнер
    if (!this.container) {
      console.error(`Container with ID "${containerId}" not found`);
      return;
    }

    this.onPageChange = null;
    this.renderPagination();
  }

  renderPagination() {
    // Проверяем, существует ли контейнер перед рендерингом
    if (!this.container) {
      console.error("Container is null or undefined during renderPagination");
      return;
    }

    // Очищаем содержимое контейнера
    this.container.innerHTML = "";
    for (let i = 0; i < this.totalPages; i++) {
      const button = document.createElement("button");
      button.classList.add("page-button");
      button.textContent = i + 1;
      button.onclick = () => this.changePage(i);
      this.container.appendChild(button);
    }
  }

  changePage(pageIndex) {
    // Проверка на валидный индекс страницы
    if (pageIndex < 0 || pageIndex >= this.totalPages) return;

    this.currentPage = pageIndex;

    // Вызываем функцию обратного вызова, если она определена
    if (typeof this.onPageChange === "function") {
      this.onPageChange(pageIndex);
    }

    this.updateActiveButton();
  }

  updateActiveButton() {
    // Проверяем, существует ли контейнер перед выбором кнопок
    if (!this.container) {
      console.error("Container is null or undefined during updateActiveButton");
      return;
    }

    const buttons = this.container.querySelectorAll(".page-button");
    buttons.forEach((button, index) => {
      button.classList.toggle("active", index === this.currentPage);
    });
  }
}

export default BasicPagination;
