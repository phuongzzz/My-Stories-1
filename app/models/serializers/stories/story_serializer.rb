module Serializers
  module Stories
    class StorySerializer < Serializers::SupportSerializer
      attrs :id, :name, :description, :total_vote, :is_public, :category_id
      attrs :due_date, :user_id, :created_at, :updated_at, :picture
      attrs :steps, :comments, :users_voted

      delegate :id, to: :object

      def steps
        Serializers::Steps::StepSerializer
          .new(object: object.steps).serializer
      end

      def comments
        Serializers::Comments::CommentSerializer
          .new(object: object.comments).serializer
      end

      def user_voted
        User.find_users_votes object_id, object.class
      end
    end
  end
end
