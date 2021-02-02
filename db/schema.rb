# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_02_231103) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "producers", force: :cascade do |t|
    t.string "name"
    t.string "genre"
    t.string "lifetime"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "samples", force: :cascade do |t|
    t.string "name"
    t.string "artist"
    t.string "genre"
    t.string "record_label"
    t.string "year"
    t.bigint "producer_id", null: false
    t.string "sampled_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "sample_pic_address"
    t.string "youtube_embed"
    t.index ["producer_id"], name: "index_samples_on_producer_id"
  end

  create_table "songs", force: :cascade do |t|
    t.string "name"
    t.string "artist"
    t.string "genre"
    t.string "record_label"
    t.string "year"
    t.bigint "producer_id", null: false
    t.string "sample_appears"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "song_pic_address"
    t.string "youtube_address"
    t.index ["producer_id"], name: "index_songs_on_producer_id"
  end

  create_table "songs_samples", force: :cascade do |t|
    t.bigint "song_id", null: false
    t.bigint "sample_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sample_id"], name: "index_songs_samples_on_sample_id"
    t.index ["song_id"], name: "index_songs_samples_on_song_id"
  end

  add_foreign_key "samples", "producers"
  add_foreign_key "songs", "producers"
  add_foreign_key "songs_samples", "samples"
  add_foreign_key "songs_samples", "songs"
end
