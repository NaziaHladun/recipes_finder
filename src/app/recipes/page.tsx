import Link from "next/link";
import { notFound } from "next/navigation";

type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

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

export default async function Recipes({
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
    <section className="bg-gray-100 dark:bg-gray-900 py-10 px-12">
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe: Recipe) => (
          <div
            key={recipe.id}
            className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
          >
            <Link href={`/recipes/${recipe.id}`} className="cursor-pointer">
              <figure>
                <img
                  src={recipe.image}
                  className="rounded-t h-72 w-full object-cover"
                />
                <figcaption className="p-4">
                  <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">
                    {recipe.title}
                  </p>

                  <small className="leading-5 text-gray-500 dark:text-gray-400">
                    ID: {recipe.id}
                  </small>
                </figcaption>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
