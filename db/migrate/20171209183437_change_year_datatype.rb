class ChangeYearDatatype < ActiveRecord::Migration[5.0]
    def up
        change_column :movies, :year, :string
    end

    def down
        change_column :movies, :year, :integer
    end
end
