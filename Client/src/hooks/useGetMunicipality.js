import Papa from 'papaparse'
import { useEffect } from 'react';
import { useState } from 'react'


export default function useGetMunicipality(county){

    const [municipalities, setMunicipalities] = useState();
    const [loadingMunicipalities, setLoadingMunicipalities] = useState();

    useEffect(() => {

        setLoadingMunicipalities(true);
        fetch('/svenska-stader.csv').then(response => {
            response.text().then(text => Papa.parse(text, {
                header: true,
                complete: (result => {
                    const filteredData = result.data.filter(row => row.County === county);
                    const data = Array.from(new Set(filteredData.map(row => row.Municipality))).filter(Boolean);
                    setMunicipalities(data);
                })
            }))
        })
        .finally(() => {
            setLoadingMunicipalities(false);
        })

    }, [county])
    
    return {municipalities, loadingMunicipalities}
}
