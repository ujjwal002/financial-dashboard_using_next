"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function dynamics() {
    // const params = useParams();
    const router = useRouter();
    console.log(router);
    // console.log(params.slug);
  return (
    <>
      <h1>hello from blog </h1>
    </>
  );
}
