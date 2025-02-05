import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET() {
    const job = await prisma.job.findMany({
        take: 6,
        include: {
            CategoryJob: true,
            Company: {
                include: {
                    CompanyOverview: true
                }
            }
        }
    })

    return NextResponse.json(job)
}