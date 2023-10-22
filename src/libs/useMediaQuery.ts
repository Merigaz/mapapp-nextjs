import { useEffect, useState } from "react";

// Definición de un hook personalizado llamado useMediaQuery
export default function useMediaQuery(query: string): boolean {
  // Función que verifica si la consulta de medios coincide
  const getMatches = (query: string): boolean => {
    // Comprobar si window está definido (ejecutándose en un navegador)
    if (typeof window !== "undefined") {
      // Usar window.matchMedia para verificar si la consulta coincide
      return window.matchMedia(query).matches;
    }
    // Si no se está ejecutando en un navegador, se establece en false por defecto
    return false;
  };

  // Estado local para almacenar si la consulta de medios coincide o no
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  // Función que se ejecutará cuando cambie la consulta de medios
  function handleChange() {
    setMatches(getMatches(query));
  }

  // Efecto de React que se ejecuta cuando query cambia
  useEffect(() => {
    // Crear un objeto matchMedia para escuchar cambios en la consulta
    const matchMedia = window.matchMedia(query);

    // Agregar un event listener para el evento "change" que llama a handleChange
    matchMedia.addEventListener("change", handleChange);

    // Retornar una función de limpieza para eliminar el event listener al desmontar el componente
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]); // El efecto se ejecutará cuando query cambie

  // Devolver el valor actual de si la consulta coincide o no
  return matches;
}