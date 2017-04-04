class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :movie_title
      t.integer :year
      t.float :imdb_rating
      t.text :description

      t.timestamps null: false
    end
  end
end
