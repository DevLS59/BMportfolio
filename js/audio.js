
const wrapper = document.getElementById('sound');
const musics = [
    {title: "drip", img:"./images/covers/freeze.jpg", mp3:'./musiques/DRIP.mp3'},
    {title: "freeze", img:"./images/covers/freeze.jpg", mp3:'./musiques/FREEZE.mp3'},
    {title: "trucmuche", img:"./images/covers/freeze.jpg", mp3:'./musiques/DRIP.mp3'}
]

document.querySelector('#sound').innerHTML = 
` <h1> ${musics.length} </h1> 
    ${musics.map( (item , i)=> {
        console.log(item.mp3)
        return `
            <div class="lecteur">
                <div class="lecteur-img" >
                  
                </div>
                <audio controls src=${item.mp3} />
            </div> 
        `
    })}
`



