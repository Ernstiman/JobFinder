import { useRef, useState } from "react";
import { useEffect } from "react";

export default function useGetMenuRef(){

    const menuRef = useRef()
    const [show, setShow] = useState(true);
    useEffect(() => {
        function handleMouseDown(e){
            console.log("hej")
            if(menuRef.current){
                setShow(menuRef.current.contains(e.target));
            }
        }
        document.addEventListener("mousedown", handleMouseDown);
        return () => document.removeEventListener("mousedown", handleMouseDown);
    }, [])

    return {show, menuRef}
}