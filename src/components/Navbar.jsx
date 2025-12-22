
const Navbar = () => {
  return (
    <div className="w-full py-4">
      <div className="absolute left-10">
        <h1 className="text-xl font-bold">לאו_</h1>
      </div>

      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="hidden lg:flex gap-10">
          <div className="navbar-section">
            <p>001</p>
            <a>// home</a>
          </div>
          <div className="navbar-section">
            <p>010</p>
            <a>// experiences</a>
          </div>
          <div className="navbar-section">
            <p>011</p>
            <a>// projects</a>
          </div>
          <div className="navbar-section">
            <p>100</p>
            <a>// contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar;