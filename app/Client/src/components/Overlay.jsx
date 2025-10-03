
export default function Overlay({showState, setState, children}){

    return (
        <>
        {showState && <div onClick={() => setState(false)} className="overlay-container"/>}
        <div className="overlay" style={{zIndex: 1000}}>{children}</div>
        </>
    )
}