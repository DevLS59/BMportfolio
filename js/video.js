
let video = document.querySelector('.video');
let juice = document.querySelector('.juice');
let btn = document.getElementById('play-pause');
let muteBtn = document.getElementById('mute');
let volumeSlider = document.getElementById('volumeSlider');
let bar = document.querySelector('.bar');



function togglePlayPause() {
    if(video.paused) {
        btn.className="pause";
        video.play();
    }
    else {
        btn.className = "play";
        video.pause();
    }
}
btn.onclick = function() {
    togglePlayPause();
}


// barre
video.addEventListener('timeupdate', function(){

    let juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + '%';

    if(video.ended) {
        btn.className = "play";
    }
})


//mute la vidéo
muteBtn.addEventListener('click', function() {
    if(video.muted) {
        video.muted = false;
        muteBtn.innerText = "Mute";
    }
    else {
        video.muted = true;
        muteBtn.innerText = "Unmute"
    }
    })

//volume 
volumeSlider.addEventListener('change', function() {
    video.volume = volumeSlider.velue /100
})

// barra clickable

console.log(video.duration)
let rect = bar.getBoundingClientRect();
let largeur = rect.width;
bar.addEventListener('click', function(e) {
    let x = e.clientX - rect.left
    let widthPercent = ((x*100) / largeur)

    let currentTimeTrue = (widthPercent * 63) /100
   video.currentTime = currentTimeTrue;
   juice.style.width = widthPercent + '%'
})
console.log(largeur);




// btn retour ripple effect
const btnRetour = document.querySelector('.btn-retour');
btnRetour.addEventListener('click', rippleEffect)


function rippleEffect(e) {
    console.log(e)
    let circle = document.createElement('div');
    btnRetour.appendChild(circle)
    circle.classList.add('ripple')

    circle.style.top = e.clientY + 'px';
    circle.style.left = e.clientX + 'px';
}
