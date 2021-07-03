import './rightmenu.css';

export default function Rightmenu () {
let link = "#";
    return (
        <div>
            <div className="rightmenu">
                <div className="rightmenu-header">
                    <h5 className="title is-5">Latests Posts</h5>
                </div>
                <div className="rightmenu-content">
                    <div className="content">
                        <h6 className="title is-6 mb-0">Lorem ipsum</h6>
                        <small>
                            Lorem, ipsum dolor sit amet...
                        </small>
                        <a href={ link } className="link-small">More</a>
                    </div>
                    <div className="content">
                        <h6 className="title is-6 mb-0">Lorem ipsum</h6>
                        <small>
                            Lorem, ipsum dolor sit amet...
                        </small>
                        <a href={ link } className="link-small">More</a>
                    </div>
                    <div className="content">
                        <h6 className="title is-6 mb-0">Lorem ipsum</h6>
                        <small>
                            Lorem, ipsum dolor sit amet...
                        </small>
                        <a href={ link } className="link-small">More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}