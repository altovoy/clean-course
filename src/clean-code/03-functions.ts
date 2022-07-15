(() => {
  // función para obtener información de una película por Id
  function getAllMovies(movieId: string) {
    console.log({ movieId });
  }

  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getAllMovieActors(id: string) {
    console.log({ id });
  }

  function getMovieActors(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getUsuario(ActorId: string) {
    console.log({ ActorId });
  }

  function getActorBiography(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  function movie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast });
  }

  interface CreateMovieParams {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({
    title,
    description,
    rating,
    cast,
  }: CreateMovieParams) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActorIfActorNotExists(
    fullName: string,
    birthdate: Date
  ): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  async function createActor(
    fullName: string,
    birthdate: Date
  ): Promise<boolean> {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }
})();
