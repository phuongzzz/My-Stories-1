module Serializers
  module Comment
    class CommentSerializer < Serializers::SupportSerializer
      attrs :id, :user_id, :commentable_id, :commentable_type, :content
      attrs :created_at, :updated_at
    end
  end
end
