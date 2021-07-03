import './content.css';

export default function Content () {
let link = "#"

return (
<div className="divider">
    <div className="content-container">
        <a href={ link } className="title is-6">Lorem ipsum</a>
        <p>
            Saya ingin mencoba menggunakan tkinter tetapi di python. Saya telah membuat script tkinter untuk menampilkan
            sebuah gui yang simple. Masalahnya adalah saya mendapatkan error jika s...
        </p>
        <div className="tags mt-2">
            <span className="tag">One</span>
            <span className="tag">Two</span>
            <span className="tag">Three</span>
        </div>
    </div>
</div>
);
}