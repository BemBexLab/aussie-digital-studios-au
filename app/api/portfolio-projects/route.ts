import {
  getPortfolioProjects,
  PORTFOLIO_REVALIDATE_SECONDS,
} from "@/lib/portfolioProjects";

export const revalidate = 300;

export async function GET() {
  try {
    const portfolioProjects = await getPortfolioProjects();

    return new Response(JSON.stringify(portfolioProjects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, s-maxage=${PORTFOLIO_REVALIDATE_SECONDS}, stale-while-revalidate=600`,
      },
    });
  } catch (error) {
    console.error("Portfolio API Route Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
