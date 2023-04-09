import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const quizTypeRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.quizType.findMany();
  }),
});