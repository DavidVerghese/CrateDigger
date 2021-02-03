class Removeproducersyoutube < ActiveRecord::Migration[6.1]
  def change
    remove_column :producers, :producer_youtube, :string
  end
end
