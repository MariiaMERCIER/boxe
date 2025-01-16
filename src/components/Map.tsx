import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { Marker, Popup } from "react-map-gl";

export function Map() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current ?? "",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [5.9165639, 45.6865781],
      zoom: 12,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");
    // Créer un marqueur

    new mapboxgl.Marker({ color: "red" })
      .setLngLat([5.9165639, 45.6865781])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          "<b>ASC Marlioz</b><p>Boulevard de la Roche du roi<br/> Salle Ste-Bernadette <br/> Aix-les-Bains(73100)</p>"
        )
      )
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
  );
}
