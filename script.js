console.log("Welcome To My Music Player");
//Intalize the variable
let songIndex = 0;
let audioElement = new Audio('Blank Space .mp3');
let Masterplay = document.getElementById('Masterplay');
let Myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {SongName: "Blank space" ,FilePath: "C:\Users\abhis\Desktop\yadav\BlankSpace.mp3", CoverPath: "C:\Users\abhis\Desktop\yadav\bg3.jpg"},
    {SongName: "LA LA Ram Ram" ,FilePath: "C:\Users\abhis\Desktop\yadav\ramram.mp3", CoverPath: "C:\Users\abhis\Desktop\yadav\bg7.jpg"},
    {SongName: "KHAUF" ,FilePath: "C:\Users\abhis\Desktop\yadav\khauf.mp3", CoverPath: "C:\Users\abhis\Desktop\yadav\bg6.jpg"}
]
songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = song[i].CoverPath;
    element.getElementsByClassName("songName")[0].innerText=song[i].SongName;


})

//audioElement.play();


//Handle play pause click
Masterplay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        Masterplay.classList.remove('fa-circle-play');
        Masterplay.classList.add('fa-circle-pause');
        gif.style.opacity =1;

    }
    else
    {

        audioElement.pause();
        Masterplay.classList.remove('fa-circle-pause');
        Masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
  


//Listen Event
audioElement.addEventListener('timeupdate', ()=>{
    
    



    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
     
    
    Myprogressbar.value = progress;

});
Myprogressbar.addEventListener('change', () =>{
   

    audioElement.currentTime = Myprogressbar.value *audioElement.duration/100; 

})  
