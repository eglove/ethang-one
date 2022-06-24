class Comment < ApplicationRecord
  belongs_to :blog

  validates :commenter, presence: true
  validates :body, presence: true
end
