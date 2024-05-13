import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12" />
      <section className="container py-10 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
          </a>
        </div>
        <h3 className="text-center flex lg:block hidden">
          <span>&copy; 2024</span>
          <span>MutltiplyClient.io</span>
        </h3>
      </section>
    </footer>
  );
};
