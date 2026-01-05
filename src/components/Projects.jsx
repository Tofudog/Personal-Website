
const Projects = ({ data }) => {
    console.log(data[0]);
    return <>
        <div className="in-front">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 z-10">
                {data.map((item, index) => {
                    return <>
                        <div className="project-box">
                            <h2>
                                {item.title}
                            </h2>
                            <br></br>
                            <a href={item.code} target="_blank">
                                <h3 class="text-white">
                                    Source code: {item.code}
                                </h3>
                            </a>
                            <br></br>
                            <div className="hover-3d">
                                {/* content */}
                                <figure className="max-w-100 rounded-2xl">
                                    <img src={item.logo} alt="3D card" />
                                </figure>
                                {/* 8 empty divs needed for the 3D effect */}
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <br></br>
                            <p>
                                {item.description}
                            </p>
                            <br></br>
                            <div className="bubble-list">
                                {item.skills.map((skill) => (
                                <>
                                    <div className="bubble-item">
                                    <h3>{skill}</h3>
                                    </div>
                                </>
                                ))}
                            </div>
                        </div>
                    </>
                })}
            </div>
        </div>
    </>
};

export default Projects;