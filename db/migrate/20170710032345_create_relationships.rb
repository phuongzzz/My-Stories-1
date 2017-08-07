class CreateRelationships < ActiveRecord::Migration[5.1]
  def change
    create_table :relationships do |t|
      t.integer :user_id
      t.integer :followable_id
      t.string :followable_type

      t.timestamps
    end
    add_index :relationships, :user_id
    add_index :relationships, :followable_id
    add_index :relationships, :followable_type
    add_index :relationships, [:user_id, :followable_id], unique: true
  end
end
