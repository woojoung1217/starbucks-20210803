const searchEl = document.querySelector('.search');
//  .search 클래스를 찾아  => 변수안에 

const searchInputEl = searchEl.querySelector('input');
//찾은 변수안에서 input 클래스를 찾아 다른 변수 안에 넣는다.

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
}); // 이벤트 리스너 를 통해 클릭 될 경우 함수 실행시킨다.

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
}); // 요소가 focused 되면 placeholder 를 통해 검색 화면에 통합검색 을 표시한다.

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
}); // 요소가 블러 처리 되면서 빈 화면이 나온다.


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear //2021 
