import { FaComputer } from "react-icons/fa6";
import "./Offcanvas.css"

const Offcanvas = () => {
  return (
    <>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Offcanvas</button>

      <div class="offcanvas offcanvas_box offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">All Categories</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul className="navbar-nav list-group">
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>

            <li className="dropdown list-group">
              <button class="dropdown-toggle list-group-item d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Dropdown link 1</span></button>

              <ul class="dropdown-menu p-0 w-100">
                <li> <a href="" className="list-group-item"><FaComputer />&ensp;Hello World 1</a></li>
                <li> <a href="" className="list-group-item"><FaComputer />&ensp;Hello World 1</a></li>
                <li> <a href="" className="list-group-item"><FaComputer />&ensp;Hello World 1</a></li>
                <li> <a href="" className="list-group-item"><FaComputer />&ensp;Hello World 1</a></li>
                <li> <a href="" className="list-group-item"><FaComputer />&ensp;Hello World 1</a></li>
              </ul>
            </li>

            <li className="dropdown list-group">
              <button class="dropdown-toggle list-group-item d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Dropdown link 1</span></button>

              <ul class="dropdown-menu p-0 w-100">
                <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>

                <li className="dropdown list-group">
                  <button class="dropdown-toggle list-group-item d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Dropdown link 1</span></button>

                  <ul class="dropdown-menu p-0 w-100">
                    <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                    <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                    <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                    <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown list-group">
              <button class="dropdown-toggle list-group-item d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Dropdown link 1</span></button>

              <ul class="dropdown-menu p-0 w-100">
                <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>

                <li className="dropdown list-group">
                  <button class="dropdown-toggle list-group-item d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Dropdown link 1</span></button>

                  <ul class="dropdown-menu p-0 w-100">
                    <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                    <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                    <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                    <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>

                    <li className="dropdown list-group">
                      <button class="dropdown-toggle list-group-item d-flex align-items-center justify-content-between" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"><span><FaComputer />&ensp;Dropdown link 1</span></button>

                      <ul class="dropdown-menu p-0 w-100">
                        <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                        <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                        <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                        <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>
            <li><a href="" className="list-group-item"><FaComputer />&ensp;Hello World</a></li>

          </ul>
        </div>
      </div>
    </>
  )
}

export default Offcanvas