import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  let link = "#";
  return (
    <div>
      <nav
        className="p-3 border navbar is-fixed-top has-border-width-3"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              className="writer-avatar"
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Wayfarers&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Black&clotheType=ShirtScoopNeck&clotheColor=Pink&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Twinkle&skinColor=Tanned"
              alt="avatar"
            />
          </Link>
          <a
            role="button"
            href={link}
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="topMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="topMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-light" href={link}>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
