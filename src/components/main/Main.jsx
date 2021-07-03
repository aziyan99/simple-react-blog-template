import Topbar from "./../layouts/topbar/Topbar";
import Sidemenu from "./../layouts/sidemenu/Sidemenu";
import Rightmenu from "../layouts/rightmenu/Rightmenu";
import Footer from "../layouts/footer/Footer";
import Content from "../content/Content";
// import Detail from "../detail/Detail";
import "./main.css";

function Main() {
  let link = "#";

  return (
    <div>
      <Topbar />
      <div className="container mt-5">
        <div className="columns mtop-large">
          <div className="column is-2 sm-d-none">
            <div className="border-top-bottom sidemenu">
              <Sidemenu />
            </div>
          </div>
          <div className="column is-6 p-sm">
            <div className="border-bottom">
              <h1 className="title pb-3">Post</h1>
            </div>
            <div>
              <Content />
              <Content />
              <Content />
              <Content />
              <Content />
              <Content />
              <nav
                className="pagination mt-5"
                role="navigation"
                aria-label="pagination"
              >
                <a href={link} className="pagination-previous">
                  Previous
                </a>
                <a href={link} className="pagination-next">
                  Next page
                </a>
                <ul className="pagination-list">
                  <li>
                    <a
                      href={link}
                      className="pagination-link"
                      aria-label="Goto page 1"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                  <li>
                    <a
                      href={link}
                      className="pagination-link"
                      aria-label="Goto page 45"
                    >
                      45
                    </a>
                  </li>
                  <li>
                    <a
                      href={link}
                      className="pagination-link is-current"
                      aria-label="Page 46"
                      aria-current="page"
                    >
                      46
                    </a>
                  </li>
                  <li>
                    <a
                      href={link}
                      className="pagination-link"
                      aria-label="Goto page 47"
                    >
                      47
                    </a>
                  </li>
                  <li>
                    <span className="pagination-ellipsis">&hellip;</span>
                  </li>
                  <li>
                    <a
                      href={link}
                      className="pagination-link"
                      aria-label="Goto page 86"
                    >
                      86
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="column is-3 sm-d-none">
            <Rightmenu />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
