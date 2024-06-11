export default function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <img
          className="h-8 w-8 mr-4"
          src="../../assets/logo_mundus_consulting.webp"
          alt="Munds Consulting Logo"
        />
        <h1 className="text-sm font-thin">MUNDUS CONSULTING</h1>
      </div>
      <div className="flex flex-row items-center">
        <a href="https://github.com/tobiaskonerding">
          <img
            className="h-8 w-8 mr-4"
            src="../../assets/logo_github.svg"
            alt="Logo Tobias Konerding Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/tobias-konerding">
          <img
            className="h-8 w-8"
            src="../../assets/logo_linkedin.svg"
            alt="Logo Tobias Konerding LinkedIn"
          />
        </a>
      </div>
    </div>
  );
}
