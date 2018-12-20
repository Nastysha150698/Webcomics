class ComicsOnReactController < ApplicationController
  def index
    @comic = Comic.find(10)
  end
end
