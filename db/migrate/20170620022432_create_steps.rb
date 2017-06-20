class CreateSteps < ActiveRecord::Migration[5.0]
  def change
    create_table :steps do |t|
      t.string :content
      t.integer :completed_rate
      t.integer :vote
      t.integer :story_id

      t.timestamps
    end
  end
end
