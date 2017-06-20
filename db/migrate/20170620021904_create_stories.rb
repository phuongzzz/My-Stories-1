class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.integer :user_id
      t.string :name
      t.string :description
      t.float :completed_rate
      t.integer :numbers_of_steps
      t.integer :vote
      t.boolean :is_public
      t.datetime :due_date

      t.timestamps
    end
  end
end
