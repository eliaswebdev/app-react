class PagesController < ApplicationController
  def home
  end

  def movies
  end
  def about
    # props inline para a página About (exemplo)
    @about_props = {
      title: "Sobre nós",
      team: [ "Elias", "Time" ],
      description: "Página About com props passadas inline pelo Rails"
    }
  end
end
