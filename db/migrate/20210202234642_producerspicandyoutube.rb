class Producerspicandyoutube < ActiveRecord::Migration[6.1]
  def change
    change_table :producers do |t|
      t.string :producer_pic_address
      t.string :producer_youtube
    end 
  end
end
