import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <hr>
        <div>${item.favorite ? '<i class="fa fa-star" aria-hidden="true"></i>' : ''}</div>
        <button class="btn btn-success">
        <i class="fa fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
          </button>
        <button class="btn-info"><i class="fa fa-edit" id="update-author--${item.firebaseKey}"></i></button>

        <button class="btn btn-danger"><i class="fa fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i></button>
        
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showAuthors, emptyAuthors };
