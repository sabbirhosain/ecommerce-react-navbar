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
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>

            <li className="dropdown">
              <a class="dropdown-toggle ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Dropdown link 1</a>
              <ul class="dropdown-menu p-0 w-100">
                <li><a class="offcanvas_link" href="#">Another action</a></li>
                <li><a class="offcanvas_link" href="#">Another action</a></li>
                <li><a class="offcanvas_link" href="#">Another action</a></li>
              </ul>
            </li>

            <li className="dropdown">
              <a class="dropdown-toggle ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Dropdown link 2</a>

              <ul class="dropdown-menu p-0 w-100">
                <li><a class="offcanvas_link" href="#">Another action</a></li>
                <li><a class="offcanvas_link" href="#">Another action</a></li>
                <li><a class="offcanvas_link" href="#">Another action</a></li>

                <li className="dropdown">
                  <a class="dropdown-toggle ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Dropdown link 3</a>

                  <ul class="dropdown-menu p-0 w-100">
                    <li><a class="offcanvas_link" href="#">Another action</a></li>
                    <li><a class="offcanvas_link" href="#">Another action</a></li>
                    <li><a class="offcanvas_link" href="#">Another action</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a class="dropdown-toggle ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Dropdown link 4</a>

              <ul class="dropdown-menu p-0 w-100">
                <li><a class="offcanvas_link" href="#">Another action</a></li>
                <li><a class="offcanvas_link" href="#">Another action</a></li>
                <li><a class="offcanvas_link" href="#">Another action</a></li>

                <li className="dropdown">
                  <a class="dropdown-toggle ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Dropdown link 5</a>

                  <ul class="dropdown-menu p-0 w-100">
                    <li><a class="offcanvas_link" href="#">Another action</a></li>
                    <li><a class="offcanvas_link" href="#">Another action</a></li>
                    <li><a class="offcanvas_link" href="#">Another action</a></li>

                    <li className="dropdown">
                      <a class="dropdown-toggle ( offcanvas_btn )" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Dropdown link 6</a>

                      <ul class="dropdown-menu p-0 w-100">
                        <li><a class="offcanvas_link" href="#">Another action 1</a></li>
                        <li><a class="offcanvas_link" href="#">Another action 2</a></li>
                        <li><a class="offcanvas_link" href="#">Another action 3</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
            <li className="nav-item">
              <a className="offcanvas_link" href="#"><FaComputer />&ensp;Hello World</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Offcanvas