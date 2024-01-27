/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div className="p-5  flex flex-col justify-center items-center">
      <div className="max-w-[600px] bg-red-100">{children}</div>
    </div>
  );
};

export default Layout;
