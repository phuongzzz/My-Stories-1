module Serializers
  module Comment
    class CommentSerializer < Serializers::SupportSerializer
      attrs :id, :user_id, :commentable_id, :commentable_type, :content
      attrs :user_name, :created_at, :updated_at

      def user_name
        object.user.name
      end
    end
  end
end
