const Header = ({ title = "Sin texto enviado" }) => {
  return (
    <h1 className="text-light text-center bg-dark p-2 mb-3 mh-vh-100">
      {title}
    </h1>
  );
};
export default Header;
