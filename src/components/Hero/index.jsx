import SearchForm from "../SearchForm";
import "./style.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-align">
                    <div className="hero-cta">
                        <h1 className="hero-cta-title">Aonde você quer ir?</h1>
                        <p className="hero-cta-description">Escolhe o estado e cidade para achar os melhores resorts</p>
                    </div>

                    <SearchForm />
                </div>
            </div>
        </section>
    )
}