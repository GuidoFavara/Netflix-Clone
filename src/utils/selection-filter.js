export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: 'Documentales',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedias',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Infantiles',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Crimen',
        data: series.filter((item) => item.genre === 'crime'),
      },
      {
        title: 'Sentirse bien',
        data: series.filter((item) => item.genre === 'feel-good'),
      },
    ],
    films: [
      {
        title: 'Drama',
        data: series.filter((item) => item.genre === 'drama'),
      },
      {
        title: 'Suspenso',
        data: series.filter((item) => item.genre === 'thriller'),
      },
      {
        title: 'Infantiles',
        data: series.filter((item) => item.genre === 'children'),
      },
      {
        title: 'Suspenso',
        data: series.filter((item) => item.genre === 'suspense'),
      },
      {
        title: 'Romance',
        data: series.filter((item) => item.genre === 'romance'),
      },
    ],
  };
}
