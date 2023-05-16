import View from './view';
import icons from '../img/icons.svg';
class PaginationView extends View {
  _errorMessage =
    'No recipes found for your entry! Please try again with a different entry';
  _message = '';
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      console.log(btn);
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }
  _generateMarkup() {
    const currentPage = this._data.page;
    //page1 there are athor pages
    const numPages = Math.ceil(
      this._data.result.length / this._data.resultPerpage
    );
    console.log(numPages);

    if (currentPage === 1 && numPages > 1) {
      return `
       <button data-goto="${
         currentPage + 1
       }" class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}g#icon-arrow-right"></use>
      </svg>
    </button>
    `;
    }
    //
    //
    //
    if (currentPage === numPages && numPages > 1) {
      return `
      <button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>`;
    }
    ///
    ///
    if (currentPage < numPages) {
      return ` 
      <button data-goto="${
        currentPage - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${currentPage - 1}</span>
    </button>
    <button data-goto="${
      currentPage + 1
    }"  class="btn--inline pagination__btn--next">
    <span>Page ${currentPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}g#icon-arrow-right"></use>
    </svg>
  </button>
    `;
    }

    // Page 1 , and there are no other pages
    return '';
  }
}
export default new PaginationView();
