class ComicsOnReactController < ApplicationController
  def index
    @comic = Comic.find(1)
  end
end
