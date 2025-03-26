import HomePage from "@/components/home/homepage";
import LoadingPage from "../components/loading/LoadingPage";
import logo from "../../public/images/dropboxlogo.png";

// Remove the children prop from the function signature
export default function Home() {
  return (
    <>
      <LoadingPage
        minimumLoadingTime={2000}
        color="#0066ff"
        backgroundColor="#f5f5f5"
        logoSrc={logo.src}
      >
        <HomePage />
      </LoadingPage>
    </>
  );
}
