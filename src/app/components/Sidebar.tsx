import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[calc(var(--sidebar-width))] h-full flex flex-col justify-between items-start gap-4 border-r border-r-slate-400 border-solid ">
      <ul className="w-full flex flex-col justify-start items-start ">
        <Link
          href={"/"}
          className="w-full flex flex-nowrap justify-start items-center px-4 py-5 border-b border-b-slate-400 border-solid hover:bg-slate-200 "
        >
          Home
        </Link>

        <Link
          href={"/dashboard"}
          className="w-full flex flex-nowrap justify-start items-center px-4 py-5 border-b border-b-slate-400 border-solid hover:bg-slate-200 "
        >
          Dashboard
        </Link>

        <Link
          href={"/analytics"}
          className="w-full flex flex-nowrap justify-start items-center px-4 py-5 border-b border-b-slate-400 border-solid hover:bg-slate-200 "
        >
          Analytics
        </Link>

        <Link
          href={"/invoices"}
          className="w-full flex flex-nowrap justify-start items-center px-4 py-5 border-b border-b-slate-400 border-solid hover:bg-slate-200 "
        >
          Invoices
        </Link>

        <Link
          href={"/credits"}
          className="w-full flex flex-nowrap justify-start items-center px-4 py-5 border-b border-b-slate-400 border-solid hover:bg-slate-200 "
        >
          Credits
        </Link>
      </ul>

      <div className="w-full flex flex-nowrap justify-start items-center gap-4 px-4 py-3 text-[0.95rem] border-t border-t-slate-400 border-solid ">
        <div className="aspect-square w-8 bg-cyan-300 rounded-full border border-slate-500 border-solid "></div>

        <div className="">John Doe</div>
      </div>
    </div>
  );
}
