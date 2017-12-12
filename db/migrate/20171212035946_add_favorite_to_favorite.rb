class AddFavoriteToFavorite < ActiveRecord::Migration[5.0]
  def change
    add_column :favorites, :favorite, :integer
  end
end
