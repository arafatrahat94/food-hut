const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="footer py-20 px-5 lg:px-10 xl:p-20 bg-white text-base-content">
        <aside>
          <h1 className="text-accent text-[32px] mb-[10px] font-semibold">
            Foodhut
          </h1>
          <p className="text-sm text-black w-[270px]">
            Best online food store and trusted by consumers
            <br />
            Providing reliable service since 2019
          </p>
        </aside>
        <nav>
          <header className=" font-semibold text-accent text-xl">
            About Us
          </header>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Company</a>
        </nav>
        <nav>
          <header className=" font-semibold text-accent text-xl">
            Company
          </header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <form>
          <header className=" font-semibold text-accent text-xl">
            Get in touch
          </header>
          <fieldset className="form-control w-80">
            <label className="label mt-5 text-black xl:text-xl ">
              <span className="label-text">
                Subscribe through your email to know the latest update of our
                food and best daily offers
              </span>
            </label>
            <div className="flex flex-col lg:flex-row gap-x-3 mt-[17px]">
              <input
                type="text"
                placeholder="email"
                className="input input-bordered rounded-[3rem]"
              />
              <button className="btn w-[150px] mt-3 lg:mt-0 bg-accent text-white rounded-[3rem]">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
