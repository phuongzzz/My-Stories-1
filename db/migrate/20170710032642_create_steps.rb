class CreateSteps < ActiveRecord::Migration[5.1]
  def change
    create_table :steps do |t|
      t.text :content
      t.integer :completed_rate
      t.integer :story_id

      t.timestamps
    end
    add_index :steps, :story_id
  end
end
