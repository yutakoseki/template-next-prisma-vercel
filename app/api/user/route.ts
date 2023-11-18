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
    const { name, password } = await req.json();
    const res = await prisma.user.create({
        data: {
            name: name,
            hashedpassword: password,
        },
    });

    return NextResponse.json(res);
}