import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  /**
   * Just an example of middleware
   * do nothing
   */
}

export const config = {
    matcher: '/somerandompath',
}
