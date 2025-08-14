import GenerateLetter from "../OpenAiApi/GenerateLetter.js";
import PDFDocument from "pdfkit"
import archiver from "archiver";

export const getLetter = async (req, res) => {
    const jobAds = req.body.ads;
    const resArr = []

    for(let ad of jobAds){
        const id = ad.id
        try{
            const text = await GenerateLetter(ad);
            resArr.push({id, text})
        }
        catch(e){
            console.log("something went wrong when trying to generate letter", e)
        }
    }

    res.json(resArr);
}

export const downloadLetter = async (req, res) => {
    const letters = req.body.letters;

    res.setHeader("Content-type", "application/zip")
    res.setHeader("Content-Disposition", "attachment; filename=letters.zip");

    const archive = archiver("zip", {zlib: { level: 9}});
    archive.pipe(res)

    for (let record of letters){
        const doc = new PDFDocument();
        archive.append(doc, {name: `Personlig Brev: ${record.ad.employer.name}.pdf`})
    
        doc.fontSize(12).text(record.letter)
        doc.end();
    }
    archive.finalize();
    
}