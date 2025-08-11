import useGetCounty from "../hooks/useGetCounty"
import County from "./County";

export default function DropDownCounty(){

    const {counties, loadingCounties} = useGetCounty();
    console.log(counties, loadingCounties);
    return (
        <div className="dropdown-ort-container">
            <button>Ort ▼</button>
            <div className="dropdown">
                {!loadingCounties && counties.map((county, i) => (
                    <div key={i} className="county-item">
                        <County county={county}/>
                    </div>
                ))}
            </div>
        </div>
    )
}