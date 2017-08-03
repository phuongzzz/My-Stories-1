module Serializers
  module Story
    class StorySerializer < Serializers::SupportSerializer
      attrs :id, :name, :description, :total_vote, :is_public
      attrs :due_date, :user_id, :created_at, :updated_at, :picture
      attrs :steps, :comments

      delegate :id, to: :object

      def steps
        Serializers::Step::StepSerializer
          .new(object: object.steps).serializer
      end

      def comments
        Serializers::Comment::CommentSerializer
          .new(object: object.comments).serializer
      end
    end
  end
end
