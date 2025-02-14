export async function fetcher(url: string) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des images", error);
  }
}
