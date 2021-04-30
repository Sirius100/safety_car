// Этот модуль содержит реализацию центрирования кнопки класса wrapper_card_link_button по горизонтали внутри блока класса .wrapper
const wrapper = document.getElementsByClassName('wrapper'),
wrapper_card_link_button = document.getElementsByClassName('wrapper_card_link_button');

function center (){
  const width_wrapper = wrapper[0].offsetWidth;
  const width_wrapper_card_link_button = wrapper_card_link_button[0].offsetWidth;
  const position_link_button = width_wrapper/2 - width_wrapper_card_link_button/2;

  wrapper_card_link_button[0].style.left = position_link_button + 'px';
  wrapper_card_link_button[1].style.left = position_link_button + 'px';
  wrapper_card_link_button[2].style.left = position_link_button + 'px';
}

export default center;
