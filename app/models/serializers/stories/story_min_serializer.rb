module Serializers
  module Stories
    class StoryMinSerializer < Serializers::SupportSerializer
      attrs :id, :name, :description, :total_vote, :is_public
      attrs :due_date, :user_id, :created_at, :updated_at, :picture
      attrs :steps

      delegate :id, to: :object

      def steps
        Serializers::Steps::StepSerializer
          .new(object: object.steps).serializer
      end
    end
  end
end
