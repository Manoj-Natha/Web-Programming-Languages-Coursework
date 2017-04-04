class Movie < ActiveRecord::Base
has_many :reviews
validates :movie_title, presence: true,
                    length: { minimum: 1 }
validates :year, numericality: { only_integer: true }
validates :imdb_rating, numericality: { only_float: true }	
validates :imdb_rating, presence: true
validates_inclusion_of  :imdb_rating,
                        :in => 0..10
end
