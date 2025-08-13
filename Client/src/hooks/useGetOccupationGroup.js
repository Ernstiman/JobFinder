import { useEffect, useState } from "react";
import Papa from 'papaparse'

export default function useGetOccupationGroup(occupationField){

    const [occupationGroups, setOccupationGroups] = useState();
    const [loadingOccupationGroups, setLoadingOccupationGroups] = useState();


    useEffect(() => {
        setLoadingOccupationGroups(true);
        fetch('./yrkesgrupper-v26.csv')
        .then(response => response.text()
    .then(text => Papa.parse(text, {
        header: true,
        complete: (result => {

            const filteredData = result.data.filter(row => row.Yrkesområde === occupationField);
            const data = Array.from(new Set(filteredData.map(row => row.Yrkesgrupp))).filter(Boolean)
            setOccupationGroups(data);
            setLoadingOccupationGroups(false);
        })
    })))
    }, [occupationField])

    return {occupationGroups, loadingOccupationGroups}
}