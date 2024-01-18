// import { NextResponse } from "next/server";
// export function middleware() {
//   return NextResponse.json({
//     hello: "hello middle ware",
//   });
// }
import { NextResponse } from "next/server";
export function middleware() {
  return NextResponse.next();
}
