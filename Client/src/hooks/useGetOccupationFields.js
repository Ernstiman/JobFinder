import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function useGetOccupationFields(){

    const [occupationFields, setOccupationFields] = useState([]);
    const [loadingOCcupationFields, setLoadingOccupationFields] = useState(true);

    useEffect(() => {

        setLoadingOccupationFields(true);
        fetch('/yrkesgrupper-v26.csv')
        .then(response => response.text()
        .then(text => Papa.parse(text, {
            header: true,
            complete: (result => {
                const data = Array.from(new Set(result.data.map(row => row.Yrkesområde))).filter(Boolean);
                setOccupationFields(data);
                setLoadingOccupationFields(false);
            })
        })
        ))
    }, [])

    return {occupationFields, loadingOCcupationFields};

}
