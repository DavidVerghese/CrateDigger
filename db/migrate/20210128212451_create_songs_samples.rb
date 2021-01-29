class CreateSongsSamples < ActiveRecord::Migration[6.1]
  def change
    create_table :songs_samples do |t|
      t.references :song, null: false, foreign_key: true
      t.references :sample, null: false, foreign_key: true

      t.timestamps
    end
  end
end
