class CreateReports < ActiveRecord::Migration[5.0]
  def change
    create_table :reports do |t|
      t.integer :user_id
      t.integer :story_id
      t.text :content

      t.timestamps
    end
  end
end
