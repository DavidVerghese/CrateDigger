class CreateSamples < ActiveRecord::Migration[6.1]
  def change
    create_table :samples do |t|
      t.string :name
      t.string :artist
      t.string :genre
      t.string :record_label
      t.string :year
      t.references :producer, null: false, foreign_key: true
      t.string :sampled_at

      t.timestamps
    end
  end
end
