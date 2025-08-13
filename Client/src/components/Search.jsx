import { useContext } from "react"
import { MainContext } from "../App"
import { useState } from "react";


export default function Search(){

    const {setSearchValue, searchValue} = useContext(MainContext);

    return (
        <label htmlFor="search">
            <input type="text" name="search" id="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        </label>
    )
}