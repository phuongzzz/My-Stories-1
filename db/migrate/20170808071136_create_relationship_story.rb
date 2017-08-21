class CreateRelationshipStory < ActiveRecord::Migration[5.1]
  def change
    create_table :relationship_stories do |t|
      t.integer :user_id
      t.integer :story_id

      t.timestamps
    end
    add_index :relationship_stories, :user_id
    add_index :relationship_stories, :story_id
    add_index :relationship_stories, [:user_id, :story_id], unique: true
  end
end
