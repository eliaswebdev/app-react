module Api
  class MoviesController < ApplicationController
    # Simple example endpoint; replace with real data or model queries
    def index
      movies = [
        { id: 1, title: "The Matrix", year: 1999 },
        { id: 2, title: "Inception", year: 2010 },
        { id: 3, title: "Interstellar", year: 2014 }
      ]

      render json: movies
    end
  end
end
