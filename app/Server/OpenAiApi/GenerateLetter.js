import { client } from "../server.js";
import convertPdf from "../utils/convertPdf.js";
import fs from 'fs'

export default async function GenerateLetter(ad){
    const text = ad.description.text;
    const jobType = ad.occupation.label;
    const employer = ad.employer.name;
    const resume = await convertPdf("./info/Resumé.pdf");
    const mall = fs.readFileSync('./info/mall.txt', "utf-8");

    const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: [
            {role: "system",
                content: `Jag vill att ni genererar ett personligt brev enligt den bifogade mallen. Jag vill att ni endast utgår ifrån informationen från mitt cv gällande erfarenheter.
                Ni får inte hitta på något förutom generella intressen som hade kunnat passa bra i känsten.
                Jag vill att ni utifrån jobbannonsens text får fram en ton lämplig för brevet och krav.`
            },
            {
                role: "user",
                content: `
                arbetsgivare: ${employer}
                jobbtitel: ${jobType}
                jobbannonsens text: ${
                    text
                }
                CV: ${resume},
                Mall: ${mall}`
            }
        ]
    })
    return response.output_text;
}