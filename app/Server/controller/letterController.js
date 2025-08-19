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
    const letter = req.body.letter;

    res.setHeader("Content-type", "application/png")
    res.setHeader("Content-Disposition", "attachment; filename=hej.png");

    const doc = new PDFDocument();

    doc.pipe(res)
    doc.fontSize(12).text(letter)
    doc.end();
        
    }