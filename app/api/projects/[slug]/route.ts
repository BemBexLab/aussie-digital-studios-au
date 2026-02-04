// app/api/projects/[slug]/route.ts
export async function GET(_: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const wpRes = await fetch(
    `https://olive-peafowl-546702.hostingersite.com/index.php/wp-json/wp/v2/projects?slug=${slug}`
  );
  const data = await wpRes.json();

  if (!data || data.length === 0) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(JSON.stringify(data[0]));
}
