function showLanguage(language){
  const languages = [`en', `jp'];
  languages.forEach(id =>{
    const section = document.getElementById(id);
    if (section) {
      section.classList.remove(`active');
  }
});

  const targetSection = document.getElementById(language);
  if (targetSection) {
     targetSection.classList.add(`active');
    }
 
  }

 
    
    
  
    
