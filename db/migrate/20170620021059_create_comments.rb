class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :story_id
      t.integer :step_id
      t.text :content

      t.timestamps
    end
  end
end
