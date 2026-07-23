import { getPortfolioProjects } from "@/lib/portfolioProjects";

export const revalidate = 300;

export async function GET() {
  try {
    const projects = await getPortfolioProjects();

    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Portfolio API Route Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
