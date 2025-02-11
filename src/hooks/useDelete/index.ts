import { mutate } from "swr";

export async function useDelete(
  id: string,
  url: string,
  revalidatedURl?: string
) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ public_id: id }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Image supprimée avec succès");
      if (revalidatedURl) {
        mutate(revalidatedURl);
      }
    } else {
      console.error(data.error || "Erreur lors de la suppression");
      alert(data.error || "Erreur lors de la suppression");
    }
  } catch (error) {
    console.error("Erreur de suppression:", error);
  }
}
