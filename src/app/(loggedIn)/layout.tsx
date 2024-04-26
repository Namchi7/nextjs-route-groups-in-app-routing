import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100%-56px)] flex flex-nowrap justify-start items-start ">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
