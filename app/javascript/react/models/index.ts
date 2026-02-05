export type Movie = {
  id: number;
  titulo: string;
  cartaz: string;
  genero: string;
  duracao: string;
  semana: string;
  classificacao: string;
  classificacao_desc: string;
  trailer: string;
  sinopse: string;
  direcao: string;
  elenco: string;
  sessoes: Array<{
    sala: string;
    formato: string;
    versao: string;
    horario: string;
  }>;
  url: string;
};
