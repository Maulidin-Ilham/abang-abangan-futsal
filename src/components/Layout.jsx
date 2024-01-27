import Footer from "./Footer";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div className="p-5  flex flex-col justify-center items-center min-h-screen">
      <div className="max-w-[600px] ">
        {children}
        <div className="mt-3 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
