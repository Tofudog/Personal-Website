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
            <button onClick={() => playAudio()}>click</button>
            <h2>like a lion</h2>
            <h3>synonyms</h3>
            <h4 className="quote">verse</h4>
            </div>
        </div>
    </>
};

export default Dictionary;