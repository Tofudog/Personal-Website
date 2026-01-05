import github_logo from "./../assets/github.svg";
import linkedin_logo from "./../assets/linkedin.png";
import leetcode_logo from "./../assets/leetcode.webp";
import codeforces_logo from "./../assets/codeforces.png";

const Bottom = () => {
    return <>
        <div>
            <div className="flex flex-col relative bg-[#2b2824] w-full h-75 justify-center items-center">
                <h4 className="copyright">
                    Copyright © 2026 Leonardo Amato Regis de Farias
                </h4>
                <div className="flex gap-5 mt-4">
                    <div className="circle">
                        <a href="https://github.com/Tofudog" target="_blank">
                            <img src={github_logo}></img>
                        </a>
                    </div>
                    <div className="circle">
                        <a href="https://www.linkedin.com/in/leonardo-de-farias-857167222/" target="_blank">
                            <img src={linkedin_logo}></img>
                        </a>
                    </div>
                    <div className="circle">
                        <a href="https://leetcode.com/u/Tofudog25/" target="_blank">
                            <img src={leetcode_logo}></img>
                        </a>
                    </div>
                    <div className="circle">
                        <a href="https://codeforces.com/profile/tofulion25" target="_blank">
                            <img src={codeforces_logo}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Bottom;