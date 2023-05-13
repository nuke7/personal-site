import technical from "./technical.json";
import languages from "./languages.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ technical, languages });
}
