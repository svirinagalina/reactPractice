
function RandomPhrase() {

        const phrases = ['How are you?', 'Hello, world', 'Random phrase number 3'];
        const phrase= Math.flor(Math.random * phrases.length());

return(
    <p className= "RandomPhrase">
        {phrase}
    </p>
);
}
export default RandomPhrase;