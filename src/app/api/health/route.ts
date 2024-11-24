// /api/health

import { find } from "@/lib/strapi"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
   return NextResponse.json({ data: "Ok" })
}
