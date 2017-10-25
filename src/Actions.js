import store from './Store.js';

export const play = () => {
    let songs = [...store.getState().playlist];
    let actualSong = store.getState().actualSong;
    songs[actualSong].isPlayingSong = true;
    store.setState ({
        playlist: songs
    });
}

export const stop = () => {
    let songs = [...store.getState().playlist];
    let actualSong = store.getState().actualSong;
    songs[actualSong].isPlayingSong = false;
    store.setState ({
        playlist: songs
    });
}

export const next = () => {
    stop();
    let index = store.getState().actualSong;
    let songs = store.getState().playlist;
    const newIndex = index + 1;
    if(newIndex === songs.length ){
        store.setState({
            actualSong: 0
        });
    } else {
        store.setState({
            actualSong: newIndex
        });
    }
    play();
}

