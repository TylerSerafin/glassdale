import { getOfficers } from "./officers/OfficerProvider.js"
import { getCriminals } from "./criminals/criminalprovider.js"
import { CriminalList } from "./criminals/criminalList.js"

console.log("Welcome to the main module")

getOfficers()

getCriminals().then(
CriminalList
)
