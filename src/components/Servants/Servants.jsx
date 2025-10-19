// src/Servants.jsx
import Filter from "./Filters";
import ServantDetails from "./ServantDetails";
import SearchBar from "./SearchBar"; // Import the new SearchBar component
import { useState } from 'react'; // useRef and the old state/logic are no longer needed

export default function Servants() {
    // This state will hold the ID of the servant selected from the search bar
    const [selectedServantId, setSelectedServantId] = useState(null);

    return (
        <>
            <main>
                <Filter />
                {/* 
                    Replace the old search-function div with our new SearchBar.
                    The onSelectServant prop is the function that will be called
                    by the SearchBar to update the selectedServantId state.
                */}
                <div className="search-function">
                    <SearchBar onSelectServant={setSelectedServantId} />
                </div>
                
                {/* 
                    Conditionally render ServantDetails only if a servant ID has been selected.
                    This prevents it from rendering when the page first loads.
                */}
                {selectedServantId && <ServantDetails servantId={selectedServantId} />}
            </main>
        </>
    );
}
