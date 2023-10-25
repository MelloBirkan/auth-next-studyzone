import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className={"grid place-items-center h-screen"}>
      <div className={"shadow-xl p-5 rounded-lg border-t-4 border-cyan-400"}>
        <h1 className={"text-xl font-bold my-4"}>Register</h1>
        <form className={"flex flex-col gap-3"}>
          <input type={"text"} placeholder={"Full Name"} />
          <input type={"text"} placeholder={"Email"} />
          <input type={"password"} placeholder={"Password"} />
          <button className={"bg-cyan-600 text-cyan-50 font-bold cursor-pointer px-6 py-2"}>Register</button>
          <div className={"bg-red-500 text-red-50 w-fit text-sm py-1 px-3 rounded mt-2"}>Error message</div>
          <Link className={"text-sm mt-3 text-right"}
                href={"/"}>
            Already have an account ? <span className={"underline text-cyan-700 hover:text-cyan-400 duration-150"}>Login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}