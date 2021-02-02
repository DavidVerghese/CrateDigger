class Songpicaddress < ActiveRecord::Migration[6.1]
  def change
    change_table :songs do |t|
      t.string :song_pic_address
    end 
  end
end
