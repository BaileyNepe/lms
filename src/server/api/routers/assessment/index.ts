import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const assessmentRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        quizTypeId: z.string().cuid(),
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
  list: protectedProcedure
    .input(
      z.object({
        offset: z.number().min(0),
        limit: z.number().min(1),
      })
    )
    .query(async ({ ctx, input }) => {
      const assessments = await ctx.prisma.assessment.findMany({
        skip: input.offset,
        take: input.limit,
        select: {
          id: true,
          title: true,
          totalQuestionsToAsk: true,
          timePerTopic: true,
          quizType: {
            select: {
              id: true,
              label: true,
            },
          },
          questions: {
            select: {
              id: true,
            },
          },
        },
      });

      // get total number of assessments
      const total = await ctx.prisma.assessment.count();

      const data = assessments.map((assessment) => ({
        ...assessment,
        totalQuestions: assessment.questions.length,
      }));

      return {
        data,
        total,
      };
    }),
});
