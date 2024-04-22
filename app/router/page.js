"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Router() {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.push("/")}>dashboard</button>
      <br />
      <Link href="/">dashboard</Link>
    </>
  );
}
