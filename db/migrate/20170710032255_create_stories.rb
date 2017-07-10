class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.string :name
      t.string :description
      t.float :completed_rate
      t.integer :number_of_steps
      t.boolean :is_public
      t.datetime :due_date
      t.integer :user_id

      t.timestamps
    end
    add_index :stories, :user_id
  end
end
