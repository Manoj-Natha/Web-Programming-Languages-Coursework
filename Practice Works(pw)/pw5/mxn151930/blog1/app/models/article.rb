class Article < ActiveRecord::Base
 validates :movie_title, presence: true
 validates :rating, presence: true
end
