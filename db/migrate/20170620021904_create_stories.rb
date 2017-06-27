class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.integer :user_id
      t.string :name
      t.string :description
      t.float :completed_rate, default: 0
      t.integer :numbers_of_steps, default: 0
      t.integer :vote, default: 0
      t.boolean :is_public, default: false
      t.datetime :due_date

      t.timestamps
    end
  end
end
