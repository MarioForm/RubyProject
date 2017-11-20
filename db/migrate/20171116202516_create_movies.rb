class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :genre
      t.integer :year
      t.decimal :appRating
      t.string :plot

      t.timestamps
    end
  end
end
