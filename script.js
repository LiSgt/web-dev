// back ato the top boton
const btn = document.getElementById('backBtn');
btn.addEventListener('click', function(){
    window.scrollTo(0,0);
});

//per non avere il pulsante anche ad inizio pagina (lo nascondo anche dal css)
window.addEventListener('scroll', function(){
    let posY = this.window.scrollY;

    if(posY > 0) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';

    }

});

