class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :url
      t.integer :user_board_id

      t.timestamps
    end
  end
end
