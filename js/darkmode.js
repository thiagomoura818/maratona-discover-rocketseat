darkMode();
function darkMode(){
     let darkButton = document.querySelector('i.dark');
     let lightButton = document.querySelector('i.light')

     darkButton.addEventListener('click',function(){
          document.documentElement.setAttribute('data-theme', 'dark');
          darkButton.style.display = 'none';
          lightButton.style.display = 'block';
     });

     lightButton.addEventListener('click',function(){
          document.documentElement.setAttribute('data-theme', 'light');
          lightButton.style.display = 'none';
          darkButton.style.display = 'block';
     })
}