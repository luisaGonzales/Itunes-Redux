import createStore from 'redux-zero';

let playlist = [
    {
        title: "Pursuit Of Happiness",
        artist: "Kid Cudi",  
        duration: "6:13",
        isPlayingSong: false
    },
    {
        title: "Wait",
        artist: "Nombe",  
        duration: "3:34",
        isPlayingSong: false
    },
    {
        title: "Zillionaire",
        artist: "Flo RiDa",  
        duration: "3:52",
        isPlayingSong: false
    },
    {
        title: "37",
        artist: "No Recomendable",  
        duration: "3:47",
        isPlayingSong: false
    },
    {
        title: "Brillas",
        artist: "León Larregui",  
        duration: "3:20",
        isPlayingSong: false
    }
];

const initialState = {
    playlist: playlist,
    actualSong : 0
}

const store = createStore(initialState);

export default store; 