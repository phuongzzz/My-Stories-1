class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :story_id
      t.integer :step_id
      t.text :content

      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :story_id
    add_index :comments, :step_id
  end
end
