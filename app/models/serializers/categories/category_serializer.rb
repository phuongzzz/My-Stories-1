module Serializers
  module Categories
    class CategorySerializer < Serializers::SupportSerializer
      attrs :id, :name, :string, :parent_id
      attrs :stories

      delegate :id, to: :object

      def stories
        Serializers::Stories::StoryMinForHomeSerializer
          .new(object: object.stories).serializer
      end
    end
  end
end
