// function showLanguage(lang){
//   const languages = [`en`, `jp`];
//   languages.forEach(id =>{
//     const section = document.getElementById(id);
//     if (section) {
//       section.classList.remove(`active`);
//       section.style.display = `none`;
//   }
// });

//   const targetSection = document.getElementById(lang);
//   if (targetSection) {
//      targetSection.classList.add(`active`);
//      targetSection.style.display = `block`;
//     }
 
//   }

// document.addEventListener(`DOMContentLoaded`, () => {
//   document.getElementById(`en-btn`).addEventListener(`click`, () => showLanguage(`en`));
//   document.getElementById(`jp-btn`).addEventListener(`click`, () => showLanguage(`jp`));
// });

function showLanguage(lang) {
  const languages = ['en', 'jp', 'ch-simplify', 'ch_traditional'];
  languages.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.classList.remove('active');
      section.style.display = 'none';
    }
  });

  const targetSection = document.getElementById(lang);
  if (targetSection) {
    targetSection.classList.add('active');
    targetSection.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('en-btn').addEventListener('click', () => showLanguage('en'));
  document.getElementById('jp-btn').addEventListener('click', () => showLanguage('jp'));
  document.getElementById('ch-simplify-btn').addEventListener('click', () => showLanguage('ch-simplify'));
  document.getElementById('ch-traditional-btn').addEventListener('click', () => showLanguage('ch-traditional'));
});
 
    
    
  
    
