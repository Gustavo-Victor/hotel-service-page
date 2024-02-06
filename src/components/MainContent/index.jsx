import FeaturedContainer from "../FeaturedContainer";
import Grid from "../Grid";
import SearchContainer from "../SearchContainer";
import "./style.css"; 

export default function MainContent() {
    return ( 
        <main>
            <FeaturedContainer />
            <Grid />
            <SearchContainer />
        </main>
    )
}