class MoviesController < ApplicationController
def new
	@movie = Movie.new
end

def index
    @movies = Movie.all
end

def destroy
  @movie = Movie.find(params[:id])
  @movie.destroy
 
  redirect_to movies_path
end

def edit
  @movie = Movie.find(params[:id])
end

def show
	@movie = Movie.find(params[:id])
end

def create
	@movie = Movie.new(movie_params)
 
	if @movie.save
	redirect_to @movie
	else
    render 'new'
  end
end


def update
	@movie = Movie.find(params[:id])
 
	if @movie.update(movie_params)
	redirect_to @movie
	else
    render 'edit'
	
  end
end

private
  def movie_params
    params.require(:movie).permit(:movie_title, :year, :imdb_rating, :description)
  end

end
