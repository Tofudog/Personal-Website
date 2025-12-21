import topBackground from "./../assets/lion-image-moon.png";

const Title = () => {
    return (
        <div
            style={{
                backgroundImage: `
                    url(${topBackground})
                `,
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
                textAlign: "center"
            }}
        >
            <h1 className="title">
                Leonardo de Farias
            </h1>

            <h2 className="subtitle">
                CS Student @ Emory, Aspiring Front End Developer
            </h2>
        </div>
    );
};

export default Title;
