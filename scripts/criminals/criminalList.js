import { Criminal } from "./criminal.js";
import { useCriminals } from "./criminalprovider.js";

const contentTarget = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

    const criminalArray = useCriminals()

    criminalArray.forEach(criminalObject => {
        // const criminalHTML = Criminal(criminalObject)
        contentTarget.innerHTML += Criminal(criminalObject)
    });
    }