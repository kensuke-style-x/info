function showLanguage(lang){
  const languages = [`en`, `jp`];
  languages.forEach(id =>{
    const section = document.getElementById(id);
    if (section) {
      section.classList.remove(`active`);
  }
});

  const targetSection = document.getElementById(lang);
  if (targetSection) {
     targetSection.classList.add(`active`);
    }
 
  }

document.addEventListner(`DOMContentLoaded`, () => {
  document.getElementById(`en-btn`).addEventListener(`click`, () => showLanguage(`en`));
  document.getElementById(`jp-btn`).addEventListener(`click`, () => showLanguage(`jp`));
});

 
    
    
  
    
