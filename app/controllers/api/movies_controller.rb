module Api
  class MoviesController < ApplicationController
    # Simple example endpoint; replace with real data or model queries
    def index
      movies = [ {
                  id: 342,
                  titulo: "Zootopia 2",
                  cartaz: "https://www.cinemasteresina.com.br/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBallHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c050e6f4eb444023ebc6b99ea9215fda5928ca31/zootopia2.jpg",
                  genero: "Animação",
                  duracao: "1h48min (108 minutos)",
                  semana: "11ª Semana",
                  classificacao: "free",
                  classificacao_desc: "Livre",
                  trailer: "https://www.youtube.com/watch?v=lEzmc22PDRg",
                  sinopse: "Os heróis e policiais novatos Judy Hopps e Nick Wilde estão de volta para mais uma aventura extravagante pela grande metrópole animal de Zootopia. Em Zootopia 2, após desvendarem o maior caso da história da cidade, Judy e Nick são surpreendidos por uma ordem do Chefe Bogo: os dois detetives precisarão frequentar o programa de aconselhamento Parceiros em Crise. A união da dupla é colocada à prova quando surge um mistério ligado a um recém-chegado à cidade: o misterioso e venenoso réptil Gary De’Snake. Para encontrar as soluções para o caso envolvendo a víbora, Judy e Nick devem desvendar novas partes da cidade, sendo testados o tempo todo.",
                  direcao: "Byron Howard, Jared Bush",
                  elenco: "Monica Iozzi, Ginnifer Goodwin, Rodrigo Lombardi",
                  sessoes: [
                    {
                    sala: "Sala 02",
                    formato: "2D",
                    versao: "Dublado",
                    horario: "01/01/2000 - 14:15"
                    },
                    {
                    sala: "Sala 02",
                    formato: "2D",
                    versao: "Dublado",
                    horario: "01/01/2000 - 16:30"
                    },
                    {
                    sala: "Sala 02",
                    formato: "2D",
                    versao: "Dublado",
                    horario: "01/01/2000 - 18:35"
                    }
                  ],
                  url: "http://www.cinemasteresina.com.br/filmes/zootopia-2-7616b3da-46c6-4605-a96a-b065ed39b461.json"
                  },
                  {
                  id: 344,
                  titulo: "Avatar: Fogo e Cinzas",
                  cartaz: "https://www.cinemasteresina.com.br/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0FHIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--86586314d5394452dcc0cdf47ea654809626f3db/avatar1.jpg",
                  genero: "Aventura",
                  duracao: "3h17min (197 minutos)",
                  semana: "6ª Semana",
                  classificacao: "age_14",
                  classificacao_desc: "Não recomendado para menores de catorze anos",
                  trailer: "https://www.youtube.com/watch?v=yXPWsdT43YE",
                  sinopse: "Avatar: Fogo e Cinzas retorna para Pandora numa nova aventura envolvente com a família Sully. A trama mergulha no coração do bioma volumoso e biodiverso da região vulcânica de Pandora, onde a sobrevivência depende do fogo. Após a devastadora guerra contra a RDA e a perda do seu filho mais velho, Jake Sully (Sam Worthington) e Neytiri (Zoe Saldana) devem enfrentar uma nova ameaça: o Povo das Cinzas, uma nova e agressiva tribo Na’vi, conhecida por sua violência extrema e sede de poder, liderada pelo implacável Varang (Oona Chaplin). O misterioso clã é composto por guerreiros que controlam o fogo e cuja lealdade pode desequilibrar o destino do planeta. Diante de novos esforços humanos de colonização e do recente inimigo, a família de Jake deve lutar por sua sobrevivência e pelo futuro de Pandora, caso queiram as suas vidas normais novamente. Tudo isso vai levar eles aos seus limites emocionais e físicos.",
                  direcao: "James Cameron ",
                  elenco: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
                  sessoes: [
                    {
                      sala: "Sala 04",
                      formato: "3D",
                      versao: "Dublado",
                      horario: "01/01/2000 - 15:30"
                    },
                    {
                      sala: "Sala 04",
                      formato: "3D",
                      versao: "Dublado",
                      horario: "01/01/2000 - 19:30"
                    }
                  ],
                  url: "http://www.cinemasteresina.com.br/filmes/avatar-fogo-e-cinzas.json"
                  }
                ]

      render json: movies
    end
  end
end
