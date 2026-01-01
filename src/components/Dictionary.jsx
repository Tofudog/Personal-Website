import sound from "./../assets/leonardo.mp3";

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
            <h2>definition: like a lion</h2>
            <h3>synonyms:
                [Awesome, Intelligent, Creative,
                 Unbelievably Hillarious 😂, Lion-like, Da Vinci]
            </h3>
            <h4 className="quote">
                (Proverbs 30:30 KJV) A lion which is strongest among beasts, and turneth not away for any;
            </h4>
            </div>
        </div>
    </>
};

export default Dictionary;