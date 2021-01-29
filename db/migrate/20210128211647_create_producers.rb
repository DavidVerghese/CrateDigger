class CreateProducers < ActiveRecord::Migration[6.1]
  def change
    create_table :producers do |t|
      t.string :name
      t.string :genre
      t.string :lifetime
      t.string :location

      t.timestamps
    end
  end
end
