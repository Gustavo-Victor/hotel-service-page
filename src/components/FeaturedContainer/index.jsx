import "./style.css";

export default function FeaturedContainer() {
    return (
        <div className="featured-container">
            <div className="featured-flex">
                <div className="featured-content">
                    <h3 className="featured-content-small">Resort em destaque</h3>
                    <h2 className="featured-content-title">Ecoresort Praia do Forte Bahia</h2>
                    <span className="featured-content-review">Hotel qualidade 5 estrelas</span>
                    <p className="featured-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptatum aperiam molestiae? Error quas voluptatem quibusdam, temporibus illo consectetur repudiandae iste, soluta, facilis totam adipisci tempore! Quisquam quod eveniet commodi?</p>
                    <p className="featured-content-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="featured-button">
                        Solicitar Reserva
                        <svg className="featured-svg w-4 inline-block ml-2" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                        </svg>
                     </button>
                </div>
                <div className="featured-image"></div>
            </div>
        </div>
    )
}