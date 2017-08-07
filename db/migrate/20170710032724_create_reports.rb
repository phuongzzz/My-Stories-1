class CreateReports < ActiveRecord::Migration[5.1]
  def change
    create_table :reports do |t|
      t.integer :user_id
      t.integer :reportable_id
      t.string :reportable_type
      t.text :content

      t.timestamps
    end
    add_index :reports, :user_id
    add_index :reports, :reportable_id
    add_index :reports, [:user_id, :reportable_id, :reportable_type]
  end
end
