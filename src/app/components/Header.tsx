import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center gap-4 border-b-[1px] border-b-slate-500 border-solid px-4 py-2">
      <div className="font-semibold text-xl text-slate-700 ">Logo</div>

      <div className="flex flex-nowrap justify-end items-center gap-4">
        <input
          type="text"
          placeholder="Search here..."
          className="w-[270px] px-3 py-2 border border-solid border-slate-500 rounded-sm text-[0.9rem] text-slate-700"
        />

        <Link
          href={"/login"}
          className="px-3 py-2 text-[0.9rem] text-white font-semibold bg-orange-600 border border-slate-500 border-solid rounded-sm "
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
