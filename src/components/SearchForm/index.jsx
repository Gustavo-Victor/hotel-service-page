import "./style.css";

export default function SearchForm() {
    return (
        <div className="search-form-container">
            <form className="search-form">
                <select className="search-form-select">
                    <option value="" selected disabled>Escolha o estado</option>
                    <option>Rio de Janeiro</option>
                    <option>São Paulo</option>
                    <option>Belo Horizonte</option>
                    <option>...</option>
                </select>

                <select className="search-form-select">
                    <option value="" selected disabled>Escolha a cidade</option>
                    <option>RJ</option>
                    <option>SP</option>
                    <option>MG</option>
                    <option>ES</option>
                    <option>...</option>
                </select>

                <button className="search-form-button">
                    <svg className="search-form-svg w-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                    </svg> 
                    Pesquisar
                </button>
            </form>
        </div>
    )
}