class PagesController < ApplicationController
  def home
  end

  def movies
  end
  def about
    # props inline para a página About (exemplo)
    @about_props = {
      title: "About us",
      team: [ "Elias", "Pablo", "Henrique" ],
      description: "Página About com props passadas inline pelo Rails"
    }
  end
end
