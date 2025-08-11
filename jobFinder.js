import express from 'express';

const app = express();

async function findJob(){
const lau_codes = await findTaxology();
const str_lau_codes = lau_codes.map(code => `municipality=${code}`).join('&');
const result = await fetch(`https://jobsearch.api.jobtechdev.se/search?${str_lau_codes}`, {
  headers: {
    'content-type': 'application/json',
    accept: 'application/json'
  }
})
const data = await result.json();
console.log(data);
}


async function findTaxology(){
  const result = await fetch(`https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/municipality?preferred_label=skåne kommun`,{
    headers: {
      accept: 'application/json'
    }
  })
  const data = await result.json();
  const lau_codes = data.map(item => item["taxonomy/lau-2-code-2015"]);

  return lau_codes;
}

findJob();