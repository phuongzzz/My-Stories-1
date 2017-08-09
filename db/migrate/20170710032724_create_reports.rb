class CreateReports < ActiveRecord::Migration[5.1]
  def change
    create_table :reports do |t|
      t.integer :user_id
      t.integer :story_id
      t.text :content

      t.timestamps
    end
    add_index :reports, :user_id
    add_index :reports, :story_id
  end
end
