class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :movie_title
      t.integer :year
      t.float :rating
      t.string :text

      t.timestamps null: false
    end
  end
end
