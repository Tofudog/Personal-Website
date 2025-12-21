const DescribeAmazon = () => {
  return <>
    <div>
      <p>Here is what I did</p>
    </div>
  </>
};

const Experiences = () => {
  return (
    <div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold"><DescribeAmazon></DescribeAmazon></div>
        <div className="collapse-content text-sm"></div>
      </div>
      <br></br>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
        <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
      </div>
      <br></br>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">How do I update my profile information?</div>
        <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
      </div>
    </div>
  );
};

export default Experiences;