module Serializers
  module Vote
    class VotesSerializer < Serializers::SupportSerializer
      attrs :id, :voteable_type, :voteable_id, :user_id, :value
    end
  end
end
