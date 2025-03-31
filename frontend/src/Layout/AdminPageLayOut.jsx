import React, { useEffect, useState } from "react";
import img2 from "../assets/images/img2.jpg";
import LinkTags from "../components/Links";
import ButtonTwo from "../components/Button/Buttontwo";

const useMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const AdminPageLayout = ({ pageName, child }) => {
  const isMobile = useMobileScreen();

  const cardBg = {
    background: `${`linear-gradient(135deg, #074626d1, #0a0a0ab2), url(${img2})`}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const handleLogOut = () => {};

  return (
    <div className="grid grid-cols-4 w-full h-[100vh] relative">
      <div
        className="fixed top-0 left-0 h-full space-y-5 py-6 px-5 text-tetClr w-1/4 shadow-xl shadow-secClr/60 lg:block hidden"
        style={cardBg}
      >
        <div className="text-center">
          <h3 className="text-4xl text-tetClr w-max mx-auto logo relative p-2">
            <span className="text-5xl">p</span>
            <span className="absolute top-0 left-6">p</span>
          </h3>
        </div>
        <div className="flex flex-col justify-between h-[85%]">
          <ul className="grid gap-5 text-xl">
            <LinkTags
              href={"/admin/overview"}
              title={"Overview"}
              optStyle={"nav-link"}
            />
            <LinkTags
              href={"/admin/allclients"}
              title={"All Clients"}
              optStyle={"nav-link"}
            />
            <LinkTags
              href={"/admin/addproduct"}
              title={"Add Product"}
              optStyle={"nav-link"}
            />
            <LinkTags
              href={"/admin/allproduct"}
              title={"All Products"}
              optStyle={"nav-link"}
            />
            <LinkTags
              href={"/admin/pendingorders"}
              title={"Orders Tab"}
              optStyle={"nav-link"}
            />
          </ul>
          <ButtonTwo title={"Logout"} optStyle={"w-full"} />
        </div>
      </div>

      <div className="col-span-4 lg:w-3/4 w-full lg:translate-x-[33%]  text-secClr">
        <div className="container flex-col gap-y-5 px-5 relative">
          <div className="backdrop-blur-sm bg-pryClr border border-black px-5 py-4 text-secClr rounded-full flex justify-between items-center sticky top-5 z-10">
            <h2 className="text-2xl font-bold">{pageName}</h2>
            {isMobile ? (
              <details className="rounded-full bg-tetClr cursor-pointer hover:scale text-secClr border-2 border-secClr px-4 py-2 list-none">
                <summary className="list-none font-semibold capitalize">
                  {"Admin"}
                </summary>
                <ul className="absolute top-20 right-0 w-[300px] z-[100] py-10 border-2 border-secClr bg-tetClr shadow-xl shadow-secClr/30 rounded-lg flex flex-col gap-8 whitespace-nowrap">
                  <LinkTags
                    href={"/admin/overview"}
                    title={"Overview"}
                    optStyle={"bg-compClr text-tetClr py-3 rounded-full w-1/2 mx-auto"}
                  />
                  <LinkTags
                    href={"/admin/allclients"}
                    title={"All Clients"}
                    optStyle={"bg-compClr text-tetClr py-3 rounded-full w-1/2 mx-auto"}
                  />
                  <LinkTags
                    href={"/admin/addproduct"}
                    title={"Add Product"}
                    optStyle={"bg-compClr text-tetClr py-3 rounded-full w-1/2 mx-auto"}
                  />
                  <LinkTags
                    href={"/admin/allproduct"}
                    title={"All Products"}
                    optStyle={"bg-compClr text-tetClr py-3 rounded-full w-1/2 mx-auto"}
                  />
                  <LinkTags
                    href={"/admin/pendingorders"}
                    title={"Orders Tab"}
                    optStyle={"bg-compClr text-tetClr py-3 rounded-full w-1/2 mx-auto"}
                  />
                  <button
                    onClick={() => handleLogOut()}
                    title={"Logout"}
                    className={"pb-2 nav-link"}
                  >
                    Logout
                  </button>
                </ul>
              </details>
            ) : (
              <h6 className="">Admin</h6>
            )}
          </div>
          {child}
        </div>
      </div>
    </div>
  );
};

export default AdminPageLayout;
