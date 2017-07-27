class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.string :voteable_type
      t.integer :voteable_id
      t.integer :user_id
      t.integer :value , default: 1

      t.timestamps
    end
    add_index :votes, :voteable_id
    add_index :votes, :user_id
  end
end
