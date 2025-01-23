"use client";

import useSWR from "swr";
import { useState } from "react";

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error("Erreur lors de la récupération des images");
  }

  const data = await response.json();

  return data;
};

export default function Champions() {
  const { data: images, error, isLoading } = useSWR("/api/getImages", fetcher);

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;
  console.log(images);
  return <h2>Galerie d'images</h2>;
}
