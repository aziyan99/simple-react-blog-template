import './topbar.css';

function Topbar () {
let link = "#";
    return (
        <div>
            <nav className="p-3 border navbar is-fixed-top has-border-width-3" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href={ link }>
                        <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
                    </a>
                    <a role="button" href={ link } className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="topMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="topMenu"  className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href={ link }>
                            Home
                        </a>
                        <a className="navbar-item" href={ link }>
                            Documentation
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" href={ link }>
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light" href={ link }>
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

export default Topbar;