import Filter from "./Filters";
import ServantDetails from "./ServantDetails";
import SearchBar from "./SearchBar";
import ServantList from "./ServantList";
import { useState } from 'react';

export default function Servants() {

    const [selectedServantId, setSelectedServantId] = useState(null);

    return (
        <>
            <main>
                <Filter />
                <div className="search-function">
                    <SearchBar onSelectServant={setSelectedServantId} />
                </div>
                <ServantList />
                {selectedServantId && <ServantDetails servantId={selectedServantId} />}
            </main>
        </>
    );
}
