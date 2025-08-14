
export default async function postAd(selectedAds){
    const res = await fetch("/api/letter/get-letter", {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({ads: selectedAds})
    })

    const data = await res.json();
    return data;
}