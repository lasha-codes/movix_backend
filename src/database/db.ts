import { PrismaClient } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient()

// const users = await prisma.user.findMany()

export default prisma
