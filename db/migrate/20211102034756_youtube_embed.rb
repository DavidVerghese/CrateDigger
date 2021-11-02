class YoutubeEmbed < ActiveRecord::Migration[6.1]
  def change
    change_table :songs do |t|
      t.string :youtube_embed
    end 
  end
end
