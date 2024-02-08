import "./Categories.css"

const Categories = () => {
  return (
    <>
      <div className="categories_box">

        <button class="btn btn-primary mx-auto" type="button" data-bs-toggle="collapse" data-bs-target="#categories" aria-expanded="false" aria-controls="categories">All Categories</button>

        <div class="collapse" id="categories">
          <ul class="list-group list-unstyled categories_list">
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
            <li> <a href="" class="list-group-item">An item</a></li>
          </ul>
        </div>





      </div>
    </>
  )
}

export default Categories