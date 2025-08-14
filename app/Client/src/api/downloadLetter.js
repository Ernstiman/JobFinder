export default async function downloadLetter(letters){
    const response = await fetch("api/letter/download", {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({letters})
    });
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "letters.zip";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

}