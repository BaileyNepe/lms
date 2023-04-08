import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const assessmentRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        quizTypeId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.assessment.create({
        data: {
          title: input.title,
          quizTypeId: input.quizTypeId,
        },
      });
    }),
});
