import resort1 from "../../assets/images/resort1.jpg";
import resort2 from "../../assets/images/resort2.jpg";
import resort3 from "../../assets/images/resort3.jpg";
import resort4 from "../../assets/images/resort4.jpg";

import "./style.css"

export default function Grid() {
    return (
        <section className="grid-section">
            <h3 className="grid-section-title">Conheça mais resorts</h3>
            <div className="grid-section-container">
                <div className="grid-single first group transition">
                    <div className="grid-single-text opacity-0 group-hover:opacity-100 transition-all duration-300 ease">Resort 1</div>
                    <img className="grid-single-image" src={resort1} alt="resort1" title="resort1" />
                </div>
                <div className="grid-single second group">
                <div className="grid-single-text opacity-0 group-hover:opacity-100 transition-all duration-300 ease">Resort 2</div>
                    <img className="grid-single-image" src={resort2} alt="resort2" title="resort2" />
                </div>
                <div className="grid-single third group">
                    <div className="grid-single-text opacity-0 group-hover:opacity-100 transition-all duration-300 ease">Resort 3</div>
                    <img className="grid-single-image" src={resort3} alt="resort3" title="resort3" />
                </div>
                <div className="grid-single fourth group">
                    <div className="grid-single-text opacity-0 group-hover:opacity-100 transition-all duration-300 ease">Resort 4</div>
                    <img className="grid-single-image" src={resort4} alt="resort4" title="resort4" />
                </div>
            </div>
        </section>
    )
}