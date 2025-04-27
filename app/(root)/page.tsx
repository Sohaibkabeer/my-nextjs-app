import Image from "next/image";
import Hello from "../components/hello";

export default function Home() {
  console.log("server or client??")
  return (
    <>
    <h1 className="text-3xl">Welcome to NextJs</h1>
    <Hello/>
    </>
  );
}
