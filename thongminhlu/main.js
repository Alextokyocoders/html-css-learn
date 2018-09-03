document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelectorAll('button');

    function makeRipple(e) {
        let circle = document.createElement('div');
        circle.classList.add('rippleCircle');
        this.appendChild(circle);
        
        let d = Math.max(this.clientWidth, this.clientHeight);
        circle.style.width = circle.style.height = `${d}px`;
        circle.style.top = e.offsetY - d/2 + 'px';
        circle.style.left = e.offsetX - d/2 + 'px';
        
    }

    for(let i = 0; i < button.length; i++) {
        // let mask = document.createElement('div');
        // mask.classList.add('rippleMask');
        // button[i].appendChild(mask);

        button[i].style.position = 'relative';
        button[i].style.overflow = 'hidden';
        button[i].onclick = makeRipple;
        button[i].addEventListener('animationend', function(){
            let oldCircle = this.querySelector('.rippleCircle');
            this.removeChild(oldCircle);
        });
    }
}, false);