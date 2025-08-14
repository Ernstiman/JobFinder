import fs from 'fs';
import path from 'path'
import pdfParse from "pdf-parse"

export default async function convertPdf(filePath){
    console.log(filePath, "filepath")
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text


}
