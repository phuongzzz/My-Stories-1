module Serializers
  module Votes
    class VoteableSerializer < Serializers::SupportSerializer
      attrs :total_vote, :user_voted

      delegate :total_vote, to: :object

      def total_vote
        total_vote
      end

      def user_voted
        User.find_users_votes object.id, object.class
      end
    end
  end
end
