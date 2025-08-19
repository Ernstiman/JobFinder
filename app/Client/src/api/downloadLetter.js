export default async function downloadLetter(letter, ad){
    console.log(ad, "ad")
    const response = await fetch("api/letter/download", {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({letter})
    });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${ad.employer.name}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

}