export type DefaultEvolution = {
  name: string;
  url: string;
  min_level: number;
  image: string;
};

export type Evolution = {
  base_form: {
    name: string;
    image: string;
  };
  first_evolution: DefaultEvolution;
  second_evolution: DefaultEvolution;
};

export default Evolution;
