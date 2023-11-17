import { NextRequest, NextResponse } from "next/server";

// Prisma Clientのインスタンスをインポート
import prisma from "@/lib/prisma";

export async function GET() {
    const userArray = await prisma.user.findMany();
    // Response を jsonで返す
    return NextResponse.json(userArray);
}

export async function POST(req: NextRequest) {
    // リクエストボディ
    const { id, name } = await req.json();
    let numId = Number(id);
    const res = await prisma.user.create({
        data: {
            id: numId,
            name: name,
        },
    });

    return NextResponse.json(res);
}