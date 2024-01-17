import { Link } from "react-router-dom";
import SplashSection from "../components/SplashSection";
import PropTypes from "prop-types";

ErrorPage.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default function ErrorPage({ isDarkMode }) {
  return (
    <>
      <SplashSection
        splashMessage={"Welcome to John-Site"}
        isDarkMode={isDarkMode}
        isErrorMode={true}
      />
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h1 className="text-center max-w-[18em]">
          This is a Web site using React and Tailwind CSS.
        </h1>
        <p className="text-center">E-mail:john.wang960804@gamil.com</p>
        <Link className="glassy-icon px-6" to="/">
          Back to Home
        </Link>
      </section>
    </>
  );
}
