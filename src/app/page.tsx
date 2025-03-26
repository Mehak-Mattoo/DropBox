import HomePage from "@/components/home/homepage";
import LoadingPage from "../components/loading/LoadingPage";
import logo from "../../public/images/dropboxlogo.png";
import Iconography from "@/components/home/sections/Iconography";

// src/app/page.tsx
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingPage
        minimumLoadingTime={2000}
        color="#0066ff"
        backgroundColor="#f5f5f5"
        logoSrc={logo.src}
      >
        {children}
      </LoadingPage>
      {/* <Iconography /> */}

      <HomePage />
    </>
  );
}
