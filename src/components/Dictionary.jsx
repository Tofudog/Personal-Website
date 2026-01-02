import sound from "./../assets/leonardo.mp3";

const Synonyms = () => {
    return <>
        <div className="grid-container">
            <div className="word-bubble">Awesome</div>
            <div className="word-bubble">Intelligent</div>
            <div className="word-bubble">Creative</div>
            <div className="word-bubble">Funny</div>
            <div className="word-bubble">Lion-like</div>
            <div className="word-bubble">Da Vinci</div>
        </div>
    </>
};

const Dictionary = () => {
    const playAudio = async () => {
        try {
            const nameAudio = new Audio(sound);
            await nameAudio.play();
        } catch (error) {
            console.error("Dictionary audio failed:", error);
        }
    };

    return <>
        <div id="dictionary">
            <div className="side-by-side-parent">
                <h1>Leonardo</h1>
                <a href="https://www.merriam-webster.com/dictionary/noun" target="_blank">
                    <h2>noun</h2>
                </a>
            </div>
            <div>
                <button className="listen-bubble" onClick={() => playAudio()}>liːəʊˈnɑːdəʊ 📢</button>
                <br></br><br></br>
                <h2>definition: like a lion 𓃬</h2>
                <br></br>
                <Synonyms></Synonyms>
                <br></br>
                <h4 className="quote">
                    "A lion which is strongest among beasts, and turneth not away for any;" - Proverbs 30:30 KJV
                </h4>
            </div>
        </div>
    </>
};

export default Dictionary;