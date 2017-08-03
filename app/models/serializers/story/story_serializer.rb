module Serializers
  module Story
    class StorySerializer < Serializers::SupportSerializer
      attrs :id, :name, :description, :total_vote, :is_public
      attrs :due_date, :user_id, :created_at, :updated_at, :picture
      attrs :steps, :comments, :users_voted

      delegate :id, to: :object

      def steps
        Serializers::Step::StepSerializer
          .new(object: object.steps).serializer
      end

      def comments
        Serializers::Comment::CommentSerializer
          .new(object: object.comments).serializer
      end

      def users_voted
        User.find_users_votes object.id, object.class
      end
    end
  end
end
