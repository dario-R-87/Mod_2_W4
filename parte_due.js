/*
PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

const spacesDelete = function (str) {
  const strArray = str.split(" ");
  const cleanArray = [];
  for (let i = 0; i < strArray.length; i++)
    if (strArray[i] !== "") cleanArray.push(strArray[i]);
  return cleanArray.join(" ");
};

const specialCharRemove = function (str) {
  specialChar = [".", "-", "/", "(", ")", ","];
  let cleanStr = "";
  for (let i = 0; i < str.length; i++) {
    if (specialChar.includes(str.charAt(i))) cleanStr += " ";
    else cleanStr += str.charAt(i);
  }
  return cleanStr;
};

const jobsSearching = function (titleStr, locationStr) {
  const jobsFound = [];

  for (let i = 0; i < jobs.length; i++) {
    currentTitle = spacesDelete(specialCharRemove(jobs[i].title)).toLowerCase();
    currentLocation = spacesDelete(
      specialCharRemove(jobs[i].location)
    ).toLowerCase();

    if (
      currentTitle.includes(titleStr) &&
      currentLocation.includes(locationStr)
    ) {
      jobsFound.push(jobs[i]);
    }
  }

  const resultObj = {
    result: jobsFound,
    count: jobsFound.length,
  };
  return resultObj;
};

const content = document.querySelector(".content");

const searchStart = function (inpTitle, inpLocation) {
  const title = spacesDelete(specialCharRemove(inpTitle)).toLowerCase();
  const location = spacesDelete(specialCharRemove(inpLocation)).toLowerCase();
  const searchingResult = jobsSearching(title, location);

  if (searchingResult.count === 0) {
    content.innerHTML = `<p class='msg'>Nessun risultato corrispondente 
                        alla ricerca...</p>`;
  } else {
    content.innerHTML = `<h2>La ricerca ha prodotto ${searchingResult.count} risultati`;
    content.innerHTML += `<div class="items">`;
    const items = document.querySelector(".items");
    for (let i = 0; i < searchingResult.count; i++) {
      items.innerHTML += `<div class="job_item">
                            <div>
                            Title
                            <div>${searchingResult.result[i].title}</div>    
                            </div>
                            <div>                  
                            Location  
                            <div>${searchingResult.result[i].location}</div> 
                            </div>
                          </div>`;
    }
    content.innerHTML += `</div>`;
  }
};

const takeInput = function () {
  const inputTitle = document.querySelector("input#title").value;
  const inputLocation = document.querySelector("input#location").value;

  if (inputTitle.trim() !== "" && inputLocation.trim() !== "") {
    searchStart(inputTitle, inputLocation);
  } else {
    console.log(content);
    content.innerHTML = `<p class='msg'>Per favore inserire sia 'TITOLO' che 'LOCATION'!</p>`;
  }
};

const searchBtn = document.querySelector("button");
searchBtn.addEventListener("click", takeInput);
