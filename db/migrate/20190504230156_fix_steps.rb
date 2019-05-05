class FixSteps < ActiveRecord::Migration[5.2]
  def change
    drop_table :steps
    create_table :steps do |t|
      t.string :title, null: false
      t.string :body
      t.boolean :done, null: false
      t.integer :todo_id, null: false
      t.timestamps
    end
    add_index :steps, :todo_id
  end 
end
