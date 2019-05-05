class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.string :body
      t.boolean :done, null: false
      t.timestamps
    end
  end
end
