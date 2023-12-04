document.addEventListener("DOMContentLoaded", () => {
    const htmlTag = document.documentElement; // Получаем элемент html
    const modeToggler = document.querySelector(".toggle-mode-input");
  
    let selectedMode; // Переменная для хранения выбранной темы
  
    if (modeToggler !== undefined && modeToggler !== null) {
      modeToggler.addEventListener("click", () => {
        const boolState = modeToggler.querySelector("input").checked;
        selectedMode = boolState !== true ? "light" : "dark";
        htmlTag.setAttribute('data-mode', selectedMode);
  
        // Сохраняем выбранную тему в localStorage
        localStorage.setItem('theme', selectedMode);
      });
    }
  
    // Проверяем сохраненную тему из localStorage при загрузке страницы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      selectedMode = savedTheme;
      htmlTag.setAttribute('data-mode', savedTheme);
      if (modeToggler !== undefined && modeToggler !== null) {
        modeToggler.querySelector("input").checked = savedTheme === 'dark';
      }
    }
  });