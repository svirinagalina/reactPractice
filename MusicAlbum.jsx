function MusicAlbum({artist, title, tracks}) {
    return (
        <div className="MusciAlbum">
            <h2>
                {title}
            </h2>
            <h4>
                {artist}
            </h4>
            <ul>
                {tracks.map((track) => (
                    <li key={track.id}>{track}</li>
                ))}
            </ul>
        </div>
    );
}
export default MusicAlbum;