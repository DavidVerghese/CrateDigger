class Samplepicsandyoutube < ActiveRecord::Migration[6.1]
  def change
    change_table :samples do |t|
      t.string :sample_pic_address
      t.string :youtube_embed
    end 
  end
end
