module Serializers
  module Votes
    class VoteSerializer < Serializers::SupportSerializer
      attrs :id, :voteable_type, :voteable_id, :user_id, :value
    end
  end
end
