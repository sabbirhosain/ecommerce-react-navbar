import { HiMiniBarsArrowDown } from 'react-icons/hi2'
import { FaSearch, FaUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlineDashboardCustomize } from "react-icons/md";


import "./Header.css"
import Offcanvas from './Offcanvas/Offcanvas';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          {/* <Offcanvas /> */}
          {/* icons for mobile devices */}
          <div className='d-flex align-items-center d-lg-none ms-auto me-3'>

            <div class="dropdown order-last">
              <button class="btn btn-secondary dropdown-toggle dropdown_toggle_icon" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item justify-content-start" href="#"><CiLogin />&ensp;Login</a></li>
                <li><a class="dropdown-item justify-content-start" href="#"><SiGnuprivacyguard />&ensp;Register</a></li>
                <li><a class="dropdown-item justify-content-start" href="#"><MdOutlineDashboardCustomize />&ensp;Dashbord</a></li>
              </ul>
            </div>

            <div className='me-3 order-2'>
              <button class="btn btn-secondary position-relative dropdown_toggle_icon">
                <IoMdCart />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
              </button>
            </div>

            <div class="dropdown position-static me-3 order-1">
              <button class="btn btn-secondary dropdown-toggle dropdown_toggle_icon" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                <FaSearch />
              </button>
              <form class="dropdown-menu w-100 p-4">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search items..." aria-describedby="search-box" />
                  <button type='submit' class="input-group-text bg-primary" id="srarch-box">Search</button>
                </div>
              </form>
            </div>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><HiMiniBarsArrowDown /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>

              {/* single dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

              {/* multi dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Multi Dropdown</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                  {/* ===== */}
                  <li className="nav-item dropend">
                    <a className="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Sub Dropdown</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      {/* ===== */}
                      <li className="nav-item dropend">
                        <a className="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Sub Dropdown</a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                          {/* ===== */}
                          <li className="nav-item dropstart">
                            <a className="dropdown-item dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Sub Dropdown</a>
                            <ul className="dropdown-menu">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li><a className="dropdown-item" href="#">Another action</a></li>
                              <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              {/* mega munu dropdown */}
              <li className="nav-item dropdown position-static">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Mega Dropdown</a>
                {/* mega menu list */}
                <div className="dropdown-menu w-100">
                  <div className="px-md-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 py-4">
                          <h5>Hello World 1</h5>
                          <div className="list-group">
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 py-4">
                          <h5>Hello World 1</h5>
                          <div className="list-group">
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 py-4">
                          <h5>Hello World 1</h5>
                          <div className="list-group">
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 py-4">
                          <h5>Hello World 1</h5>
                          <div className="list-group">
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                            <a href="" className="list-group-item">Hello World</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href='#'>Disabled</a>
              </li>

            </ul>
            <form className="d-none d-sm-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header