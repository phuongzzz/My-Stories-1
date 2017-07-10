class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.string :voteable_type
      t.integer :voteable_id

      t.timestamps
    end
    add_index :votes, :voteable_id
  end
end
