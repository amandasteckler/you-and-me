class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :name
      t.string :previewUrl
      t.string :type
      t.string :comment
      t.integer :user_board_id

      t.timestamps
    end
  end
end
