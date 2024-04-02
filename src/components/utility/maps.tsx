import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }: {address: string}) {
  const mapRef = useRef(null);
  
  console.log("API KEY: " + String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY))
  useEffect(() => {
    const loader = new Loader({
      apiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
      version: "weekly",
    });

    const mapOptions = {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 4
    };

      loader
      .importLibrary('maps')
      .then(({Map}) => {
        const map = new Map(document.getElementById("map"), mapOptions);
      })
  })

  return <div className="h-[20em]" id="map" ref={mapRef} />;
}
export default Map;