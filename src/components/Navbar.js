import CartWidget from './CartWidget.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Navbar = () => {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              F.N. Comics
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sitio A
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Ingrese su búsqueda"
                  aria-label="Search"
                ></input>
                <button className="btn btn-outline-success" type="submit">
                  Buscar
                </button>
                <CartWidget/>
              </form>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;