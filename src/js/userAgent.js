var item_elem = {
  wrapper : document.getElementsByClassName('wrapper'),
  wrapper_card_link_button : document.getElementsByClassName('wrapper_card_link_button'),
}
// определяю четное/нечетное число через БИТОВУЮ операцию AND вместо деления по модулю.
function  odd_even(){
  let arr = [1,2,3,4,5,6,7,8,9,10];
  arr.map( function(x) {
    if( x & 1 ) console.log(x + " Нечетное число!");
    else { console.log( x + " Четное число!");}
  })
}


// функция создает html объект-элемент link в документе и вставляет его в head тег с требуемой под тип браузера таблицей стилей
// функция создает html объект-элемент link в документе и вставляет его в head тег с требуемой под тип браузера таблицей стилей
function userAgent(){
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.rel="stylesheet";

  const all_userAgent = [
    "firefox", "chrome", "safari"
  ];

  const style_css = {
    "firefox" : "src/css/style.css",
    "chrome" : "src/css/stylechrome.css",
    "safari" : "src/css/stylechrome.css"
  };

  const ua = navigator.userAgent.toLocaleLowerCase();
  all_userAgent.map( function(x) {
    if (ua.search(x) >= 0){
      console.log("Подключен файл стилей " + style_css[x]);
      link.href = style_css[x];
      head.appendChild(link);
    }
  })
};


export  {item_elem, userAgent, odd_even}
