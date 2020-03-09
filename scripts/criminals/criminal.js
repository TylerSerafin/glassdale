/*
    This module's responsibility is to represent a single donut in HTML
*/

export const Criminal = criminalObject => {
  return `
    <section class="criminalstyle">
    <h4><li>Name: ${criminalObject.name}</li></h4>
        <ul>
            <li>Age: ${criminalObject.age}</li>
            <li>Crime: ${criminalObject.conviction}</li>
            <li>${new Date(
              criminalObject.incarceration.start
            ).toLocaleDateString("en-US")}</li>
             <li>${new Date(
               criminalObject.incarceration.end
             ).toLocaleDateString("en-US")}</li>
            </ul>
    </section>
    `;
};
