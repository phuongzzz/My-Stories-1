module Serializers
  module SubSteps
    class SubStepsSerializer < Serializers::SupportSerializer
      attrs :id, :name, :content, :is_completed, :step_id
      attrs :created_at, :updated_at
    end
  end
end
