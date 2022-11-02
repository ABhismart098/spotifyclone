console.log("Welcome To My Music Player");
//Intalize the variable
let songIndex = 0;
let audioElement = new Audio('Blank Space .mp3');
let Masterplay = document.getElementById('Masterplay');
let Myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');

let song = [
    {SongName: "Blank space" ,FilePath: "C:\Users\abhis\Desktop\yadav\BlankSpace.mp3", CoverPath: "C:\Users\abhis\Desktop\yadav\bg3.jpg"}
]

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
    console.log('timeupdate');
    



    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     
    
    Myprogressbar.Value = progress;

});
Myprogressbar.addEventListener('change', () =>{
    console.log('change');
    console.log(audioElement.currentTime,Myprogressbar.Value,audioElement.duration);

    audioElement.currentTime = Myprogressbar.Value.toString() *audioElement.duration/100; 

})  