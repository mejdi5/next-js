import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        const usersNumber = await prisma.user.count()
        const postsNumber = await prisma.post.count()
    return new NextResponse(
        JSON.stringify({usersCount: usersNumber, users, postsCount: postsNumber}), 
        { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
    console.log(error)
    }
    
};