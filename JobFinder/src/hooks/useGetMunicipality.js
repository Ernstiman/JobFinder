import Papa from 'papaparse'
import { useEffect } from 'react';
import { useState } from 'react'


export default function useGetMunicipality(county){

    const [municipality, setMunicipality] = useState();
    const [loadingMunicipality, setLoadingMunicipality] = useState();

    useEffect(() => {

        setLoadingMunicipality(true);
        fetch('/svenska-stader.csv').then(response => {
            response.text().then(text => Papa.parse(text, {
                header: true,
                complete: (result => {
                    const filteredData = result.data.filter(row => row.County === county);
                    console.log(filteredData, "filteredData");
                    const data = Array.from(new Set(filteredData.map(row => row.Municipality))).filter(Boolean);
                    setMunicipality(data);
                })
            }))
        })
        .finally(() => {
            setLoadingMunicipality(false);
        })

    }, [county])
    return {municipality, loadingMunicipality}
}
