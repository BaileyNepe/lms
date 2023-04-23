import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';

export const questionRouter = createTRPCRouter({
  getTypes: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.questionType.findMany()
  ),
});
