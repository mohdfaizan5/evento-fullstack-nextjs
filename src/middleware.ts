import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest, response: NextResponse) {
  console.log("Middleware called");
  return NextResponse.redirect(new URL("/events/all", request.url));
}

// match these routes with the middleware and if they match then run above code
export const config = {
  matcher: ["/events"],
};
