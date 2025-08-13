import csv from 'csvtojson'
import { useState, useEffect } from 'react'
import Papa from 'papaparse'

export default function useGetCounty(){

    const [counties, setCounties] = useState([])
    const [loadingCounties, setLoadingCounties] = useState(true)

    useEffect(() => {
        setLoadingCounties(true)
        fetch('/svenska-stader.csv').then(response => {
            response.text().then(text => Papa.parse(text, {
                header: true,
                complete: (result => {
                    setCounties(Array.from(new Set(result.data.map(row => row.County))).filter(Boolean))
                })
            }));
        }).finally(() => setLoadingCounties(false))
    }, [])

    return {counties, loadingCounties}

}