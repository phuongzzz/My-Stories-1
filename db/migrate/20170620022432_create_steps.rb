class CreateSteps < ActiveRecord::Migration[5.0]
  def change
    create_table :steps do |t|
      t.string :content
      t.integer :completed_rate, default: 0
      t.integer :vote, default: 0
      t.integer :story_id

      t.timestamps
    end
  end
end
