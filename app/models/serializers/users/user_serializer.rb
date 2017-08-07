module Serializers
  module Users
    class UserSerializer < Serializers::SupportSerializer
      attrs :id, :email, :name, :avatar
      attrs :stories, :stories_hot, :categories

      delegate :id, to: :object
      delegate :stories, to: :objects

      def stories
        Serializers::Story::StorySerializer
          .new(object: object.stories.newest).serializer
      end

    end
  end
end
