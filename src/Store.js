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
    }
];

const initialState = {
    playlist: playlist,
    actualSong : 0
}

const store = createStore(initialState);

export default store; 