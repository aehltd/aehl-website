import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FullNavBar from "./FullNavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Antelope Enterprise Holdings Limited</title>
      </Head>
      <div className="min-h-screen max-h-screen flex flex-col overflow-hidden">
        <header className="flex-none">
          <FullNavBar />
        </header>
        <div className="flex flex-1 flex-col overflow-y-auto">
          <main className="flex-1">{children}</main>
          <footer className="flex-none">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
