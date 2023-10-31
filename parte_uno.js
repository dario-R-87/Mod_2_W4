/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()
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

const inputTitle = "l1";
const inputLocation = "us";
const title = spacesDelete(specialCharRemove(inputTitle)).toLowerCase();
const location = spacesDelete(specialCharRemove(inputLocation)).toLowerCase();

if (title !== "" && location !== "") {
  const searchingResult = jobsSearching(title, location);
  if (searchingResult.count === 0) {
    console.log("\nNessun risultato corrispondente alla ricerca...");
  } else {
    console.log(
      "\n La ricerca ha prodotto " + searchingResult.count + " risultati:\n\n"
    );
    for (let i = 0; i < searchingResult.count; i++) {
      console.log(
        " Title: " +
          searchingResult.result[i].title +
          "\n Location: " +
          searchingResult.result[i].location +
          "\n"
      );
    }
  }
} else {
  console.log("\nPer favore inserire sia 'titolo' che 'regione'!");
}
