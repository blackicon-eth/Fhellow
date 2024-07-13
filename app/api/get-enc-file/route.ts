import { NextRequest, NextResponse } from "next/server";
import { downloadFileFromIPFS } from "../../lib/ipfs";

export const GET = async (req: NextRequest) => {
  // Extracting `cid` from the query parameters
  const cid = req.nextUrl.searchParams.get("cid");

  await downloadFileFromIPFS(cid!);

  return NextResponse.json({ cid });
};
