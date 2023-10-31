import Image from "next/image";

const Navbar = () => {
  return (
    <header className="sticky -top-1 z-50">
      <nav className="bg-black text-white py-5">
        <div className="flex items-center justify-around container">
          {/* Agency Brand Logo 👉*/}
          <div className="">
            <Image
              src="/assets/images/brand-logo.png"
              height={150}
              width={150}
              alt="brand-logo"
            />
          </div>
          {/* Agency Brand Logo  👈*/}

          {/* Navigation list item 👉 */}
          <ul className="flex items-center space-x-7">
            <li className="hover:text-brand ">
              {" "}
              <a href="#" className="block">
                Home{" "}
              </a>{" "}
            </li>
            <li className="hover:text-brand ">
              <a href="#ABOUT-SECTION" className="block">
                About{" "}
              </a>{" "}
            </li>
            <li className="hover:text-brand ">
              <a href="#FEATURES-SECTION" className="block">
                Features{" "}
              </a>{" "}
            </li>
            <li className="hover:text-brand ">
              <a href="#SERVICE-SECTION" className="block">
                Service{" "}
              </a>{" "}
            </li>
            <li className="hover:text-brand ">
              {" "}
              <a href="#PORTFOLIO-SECTION" className="block">
                Portfolio{" "}
              </a>{" "}
            </li>
            <li className="hover:text-brand ">
              {" "}
              <a href="#" className="block">
                Contact{" "}
              </a>{" "}
            </li>
            {/* <DarkThemeToggle /> */}
          </ul>
          {/* Navigation list item 👈*/}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
