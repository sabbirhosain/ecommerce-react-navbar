import "./Categories.css"

const Categories = () => {
  return (
    <>
      <div className="categories_box">
        
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#categories" aria-expanded="false" aria-controls="categories">All Categories</button>

        <div class="collapse" id="categories">
          <ul>
            <li><a href="#">Computer</a></li>
            <li><a href="#">Laptop</a></li>
          </ul>
        </div>





      </div>
    </>
  )
}

export default Categories