const footer = document.querySelector('#footer');
const shareButton = document.querySelector('#share');
const shareButtonActive = document.querySelector('#shareButtonActive')
const shareOptions = document.querySelector('#shareOptions');
let viewport;

const toggleButton = ()=>{
    viewport = window.innerWidth;
    if (viewport < 768){
        if (footer.classList.contains('active')){
            footer.classList.remove('active');
            shareOptions.classList.add('active');
        }
        else {
            shareOptions.classList.remove('active');
            footer.classList.add('active');
        }
    }
    else if (viewport >= 768){
        if (shareOptions.classList.contains('active')){
            footer.classList.add('active');
            shareOptions.classList.remove('active');
            shareButtonActive.style.display = 'flex';
        } else {
            shareButtonActive.style.display = 'none';
            shareOptions.classList.add('active');
        }
    }
};

shareButton.addEventListener('click',toggleButton);
shareButtonActive.addEventListener('click',toggleButton);