const $logo = document.querySelectorAll('.nav-bar')[0];
window.addEventListener('scroll', togglelogo, false);
function togglelogo(){
    if (window.pageYOffset >= 160 ){
        $logo.classList.remove('abs-pos');
        $logo.classList.add('fix-pos');
    } else if (window.pageYOffset < 160 ) {
        $logo.classList.add('abs-pos');
        $logo.classList.remove('fix-pos');
    }
}