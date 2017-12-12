class Movie < ApplicationRecord
    belongs_to :user
    acts_as_punchable
end
