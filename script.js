function toggleMenu(){

    const navbar = document.getElementById('navbar-wrapper');
    navbar.classList.toggle("visible");
}

// Debounce wrapper would be more optimized
// but since this a POC of the navbar, this
// should suffice
function createOnScroll(){
    let isAtTop = true;

    return function(e){
        const positionFromTop = document.documentElement.scrollTop
        const navbar = document.getElementsByClassName('tedx-navbar')[0]
        if(positionFromTop > 0 && isAtTop){
            isAtTop = !isAtTop;
            navbar.classList.add('shrink-navbar')
        }else if(positionFromTop == 0 && !isAtTop){
            isAtTop = !isAtTop;
            navbar.classList.remove('shrink-navbar');
        }

    }
}

window.onscroll = createOnScroll()