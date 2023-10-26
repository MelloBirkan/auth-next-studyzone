"use client"

import {signOut} from "next-auth/react";

export default function UserInfo() {
  return (
    <div className={" grid place-items-center h-screen"}>
      <div className={"shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6"}>
        <div>
          Name: <span className={"font-bold"}>John</span>
        </div>
        <div>
          Name: <span className={"font-bold"}>John@icloud.com</span>
        </div>
        <button onClick={() => signOut()} className={"bg-red-500 font-bold px-6 py-2 text-red-50 mt-3"}>Log Out</button>
      </div>
    </div>
  )
}