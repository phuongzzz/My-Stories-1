module Serializers
  module Steps
    class StepSerializer < Serializers::SupportSerializer
      attrs :id, :name, :content, :completed_rate, :total_vote, :story_id
      attrs :created_at, :updated_at, :sub_steps, :comments, :users_voted

      delegate :id, to: :object

      def sub_steps
        Serializers::SubSteps::SubStepSerializer
          .new(object: object.sub_steps).serializer
      end

      def comments
        Serializers::Comments::CommentSerializer
          .new(object: object.comments).serializer
      end
    end
  end
end
