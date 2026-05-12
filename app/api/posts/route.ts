import { getProjectPosts } from "@/lib/projectPosts";

export const revalidate = 300;

export async function GET() {
  try {
    const cleanedPosts = await getProjectPosts();

    return new Response(JSON.stringify(cleanedPosts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
