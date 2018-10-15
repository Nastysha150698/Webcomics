# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_15_204951) do

  create_table "bubbles", force: :cascade do |t|
    t.string "figure"
    t.integer "x"
    t.integer "y"
    t.integer "width"
    t.integer "height"
    t.integer "border_width"
    t.string "border_color"
    t.string "background_color"
    t.string "shape"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "figures", force: :cascade do |t|
    t.string "figure"
    t.integer "x"
    t.integer "y"
    t.integer "width"
    t.integer "height"
    t.integer "border_width"
    t.string "border_color"
    t.string "background_color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "frames", force: :cascade do |t|
    t.integer "x"
    t.integer "y"
    t.integer "width"
    t.integer "height"
    t.integer "border_width"
    t.string "border_color"
    t.string "background_color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string "image"
    t.integer "x"
    t.integer "y"
    t.integer "width"
    t.integer "height"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "texts", force: :cascade do |t|
    t.string "text"
    t.integer "x"
    t.integer "y"
    t.integer "width"
    t.integer "height"
    t.string "font_family"
    t.integer "font_size"
    t.string "font_style"
    t.string "font_color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
