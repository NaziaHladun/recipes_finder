import { notFound } from "next/navigation";
import { Recipe } from "types/recipe";
import { RecipeCard } from "components/RecipeCard";

async function getRecipes(params: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${params}`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );
  const data = await res.json();

  if (!data) notFound();
  return data.results;
}

export async function RecipeList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { query, cuisine, maxTime } = await searchParams;

  const params = new URLSearchParams({
    apiKey: String(process.env.API_KEY),
  });
  if (typeof query === "string" && query) params.append("query", query);
  if (typeof cuisine === "string" && cuisine) params.append("cuisine", cuisine);
  if (typeof maxTime === "string" && Number(maxTime) > 0)
    params.append("maxTime", String(maxTime));

  const recipes = await getRecipes(params.toString());

  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {recipes.map((recipe: Recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
