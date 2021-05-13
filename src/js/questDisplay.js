// Этот модуль отвечает за показ блока ответа при клике на списке вопроса

const list_menu = document.getElementsByClassName('list_menu'),
li = list_menu[0].getElementsByTagName('li');



function question_visible(){
  for (let i=0; i<=li.length; i++){
    li[i].addEventListener( "click", function() {
      if (this.nextElementSibling.classList == 'text list_menu__text-visible'){
        this.nextElementSibling.classList.remove("list_menu__text-visible");
        this.classList.remove('li_on_change');
      }
      else{
        this.nextElementSibling.classList.add("list_menu__text-visible");
        this.classList.add('li_on_change');
      }
      for (let i in li){
        if (this != li[i])
        {
          li[i].nextElementSibling.classList.remove("list_menu__text-visible");
          li[i].classList.remove('li_on_change');
        }
      }

    }, false);
  }
}
export {question_visible}
