class Producer < ApplicationRecord
  has_many :songs, dependent: :destroy
  has_many :samples, dependent: :destroy
end
