const bigTag = document.querySelector('body');
const bioFrame = document.querySelector('.bio-frame');
const myFrame = document.querySelector('.frame');
const spanTxt = document.querySelector('span');
const spanTxtcontent = spanTxt.innerHTML;

bigTag.addEventListener('click', () => {
    if (bioFrame.classList.contains('hidden')) {
        bioFrame.classList.remove('hidden');
        myFrame.classList.add('hidden');
        spanTxt.innerHTML = "info";
    } else if (myFrame.classList.contains('hidden')) {
        myFrame.classList.remove('hidden');
        bioFrame.classList.add('hidden');
        spanTxt.innerHTML = "bio";
    }
});




