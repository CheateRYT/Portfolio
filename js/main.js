const btnDarkMode = document.querySelector(".dark-mode-btn");
///1.Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-sceme:dark)").matches){
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add('dark');
}



//2.Проверка темной темы в localstorage
if(localStorage.getItem('darkmode') === 'dark'){
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add('dark');
} else if (localStorage.getItem('darkmode') === 'light'){
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove('dark');
}

///Если меняются системные настройки меняем тему
window.matchMedia("(prefers-color-sceme:dark)").addEventListener('change',(event)=>{
  const newColorScheme  = event.matches ? "dark" : "light";
  if(newColorScheme === 'dark'){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
    localStorage.setItem('darkmode','dark')
  }else{
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove('dark');
    localStorage.setItem('darkmode','light')
  }

})

///Вкдючение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle('dark');
  if(isDark){
    localStorage.setItem('darkmode','dark')
  }else{
    localStorage.setItem('darkmode','light')
  }
};
