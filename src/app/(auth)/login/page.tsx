import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full h-full flex flex-col gap-6 justify-center items-center">
      <h1 className="text-2xl">Login</h1>

      <Link
        href={"/register"}
        className="px-3 py-2 text-[0.9rem] text-slate-700 font-semibold bg-green-200 border border-slate-500 border-solid rounded-sm "
      >
        Register
      </Link>

      <Link
        href={"/"}
        className="px-3 py-2 text-[0.9rem] text-white font-semibold bg-orange-600 border border-slate-500 border-solid rounded-sm "
      >
        Home
      </Link>
    </div>
  );
}
