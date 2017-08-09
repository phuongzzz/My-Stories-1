module Serializers
  module Users
    class UserSerializer < Serializers::SupportSerializer
      attrs :id, :email, :name, :avatar
      attrs :stories

      delegate :id, to: :object

      def stories
        Serializers::Stories::StorySerializer
          .new(object: object.stories.newest).serializer
      end

    end
  end
end
