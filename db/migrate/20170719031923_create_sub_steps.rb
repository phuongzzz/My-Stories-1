class CreateSubSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :sub_steps do |t|
      t.string :name
      t.text :content
      t.boolean :is_completed, default: false
      t.integer :step_id
      t.string :picture

      t.timestamps
    end
    add_index :sub_steps, :step_id
  end
end
