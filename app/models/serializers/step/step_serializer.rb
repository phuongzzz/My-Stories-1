module Serializers
  module Step
    class StepSerializer < Serializers::SupportSerializer
      attrs :id, :name, :content, :completed_rate, :total_vote, :story_id
      attrs :created_at, :updated_at, :sub_steps, :comments, :users_voted

      delegate :id, to: :object

      def sub_steps
        Serializers::SubSteps::SubStepsSerializer
          .new(object: object.sub_steps).serializer
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
