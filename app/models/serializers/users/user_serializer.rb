module Serializers
  module Users
    class UserSerializer < Serializers::SupportSerializer
      attrs :id, :email, :name, :avatar
      attrs :stories, :following_user, :following_story

      delegate :id, to: :object

      def stories
        Serializers::Stories::StorySerializer
          .new(object: object.stories.newest).serializer
      end

      def following_user
        object.following
      end

      def following_story
        tmp = []
        tmp += object.following_story
        object.following.each do |following_user|
          tmp += following_user.stories
        end
        tmp = tmp.uniq
        tmp = tmp.sort_by(&:updated_at).reverse
        Serializers::Stories::StorySerializer.new(object: tmp).serializer
      end
    end
  end
end
