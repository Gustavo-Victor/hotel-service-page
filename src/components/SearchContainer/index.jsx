import SearchForm from "../SearchForm";
import "./style.css"

export default function SearchContainer() {
    return (
        <section className="search-section">
            <div className="container mx-auto px-4 flex items-center justify-center">
                <SearchForm />
            </div>
        </section>
    )
}