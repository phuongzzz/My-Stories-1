module Serializers
  module SubSteps
    class SubStepsSerializer < Serializers::SupportSerializer
      attrs :id, :name, :content, :is_completed, :step_id, :picture
      attrs :created_at, :updated_at
    end
  end
end
