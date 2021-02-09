export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      {
        title: 'Documentales',
        data: series.filter((item) => item.genero === 'documentales'),
      },
      {
        title: 'Comedias',
        data: series.filter((item) => item.genero === 'comedias'),
      },
      {
        title: 'Infantiles',
        data: series.filter((item) => item.genero === 'infantiles'),
      },
      {
        title: 'Crimen',
        data: series.filter((item) => item.genero === 'crimen'),
      },
      {
        title: 'Sentirse bien',
        data: series.filter((item) => item.genero === 'sentirse-bien'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: films.filter((item) => item.genero === 'drama'),
      },
      {
        title: 'Suspenso',
        data: films.filter((item) => item.genero === 'suspenso'),
      },
      {
        title: 'Infantiles',
        data: films.filter((item) => item.genero === 'infantiles'),
      },
      {
        title: 'Thriller',
        data: films.filter((item) => item.genero === 'thriller'),
      },
      {
        data: films.filter((item) => item.genero === 'romance'),
        title: 'Romance',
      },
    ],
  };
}
