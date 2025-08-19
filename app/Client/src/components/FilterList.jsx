import { useContext, useState } from "react";
import Overlay from "./Overlay";
import { MainContext } from "../App";
import { useEffect } from "react";

export default function FilterList(){

    const{selectedFilters, setSelectedFilters} = useContext(MainContext);
    const[showFilter, setShowFilter] = useState(false);
    const[selectedJobDuration, setSelectedJobDuration] = useState();

    useEffect(() => {
        setSelectedFilters(selectedJobDuration)
    }, [selectedJobDuration])

    function handleCheck(e){
        const value = e.target.value;
        const checked = e.target.checked

        setSelectedJobDuration(prev => {
            return checked ? 
            value : 
            ""
        })
    }
    return (
        <Overlay showState={showFilter} setState={setShowFilter}>
            <button onClick={() => setShowFilter(!showFilter)}>Filter {showFilter ? "▲" : "▼"}</button>
            
            {showFilter && <div className="filter-list-container">
                <fieldset>
                <legend></legend>
                    
                <h3 className="filter-list-header">Omfattning</h3>
                <ul>
                    <li>
                        <label>
                        <input type="checkbox" 
                        name={"FilterRadio"} 
                        value={"Säsongsanställning"} 
                        checked={"Säsongsanställning" === selectedJobDuration} 
                        onChange={handleCheck}/>
                        Sommarjobb
                        </label>
                    </li>
                </ul>
                </fieldset>
            </div>}
            

        </Overlay>
    )
}