export default function Sidmenu (props) {
    const link = "#";

    return (
        <div className="p-3">
            <div className="my-2">
                <a href={ link }>Post</a>
            </div>
            <div className="my-3">
                <a href={ link }>Category</a>
            </div>
            <div className="my-2">
                <a href={ link }>Setting</a>
            </div>
        </div>
    );
}