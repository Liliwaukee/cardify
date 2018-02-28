const galleryHTML = document.getElementById("gallery");


const addFigureTag = element => {

const sectionContent = element;
const imagesSection = sectionContent.getElementsByTagName("img")
const arrayForm =  Array.from(imagesSection);

const addFigure = arrayForm.map(image => `<figure>
${image.outerHTML}
<figcaption>${image.alt}</figcaption>
</figure>`
);

galleryHTML.innerHTML = addFigure;

}
addFigureTag(galleryHTML)






//currentSrc
//alt

/*

console.log(arrayForm[0].outerHTML);
console.log(arrayForm[0].currentSrc);
  const tagFigure = `
  <figure>
    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2250&q=80" alt="Pietro De Grandi - Pragser Wildsee, Italy" />
  </figure>
  `;
*/
//obteniendoElElemento.innerHTML = tagFigure;
