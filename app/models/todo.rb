class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: {in: [true, false]}

  has_many :steps, foreign_key: :todo_id

  has_many :taggings
  has_many :tags, through: :taggings, source: :tag

  belongs_to :user

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end

end
