import topBackground from "./../assets/lion-image-moon.png";

const Title = () => {
    return (
        <>
            <div>
                {window.innerWidth > 450 && (
                    <div className="sky">
                        <div className="moon" />
                    </div>
                )}
            </div>
            <div style={{
                backgroundImage: `url(${topBackground})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top center",

                height: "clamp(400px, 70vw, 725px)",
                width: "clamp(400px, 70vw, 800px)",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                textAlign: "center",

                position: "relative", // container must be relative
                overflow: "hidden"
            }}>
                <h1 className="title">
                    Leonardo de Farias
                </h1>

                <h2 className="subtitle">
                    CS Student @ Emory, Aspiring Front End Developer
                </h2>
            </div>
        </>
    );
};

export default Title;
