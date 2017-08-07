module Serializers
  module Category
    class CategoriesSerializer < Serializers::SupportSerializer
      attrs :id, :name, :string, :parent_id
      attrs :stories

      delegate :id, to: :object

      def stories
        Serializers::Story::StoryIdSerializer
          .new(object: object.stories).serializer
      end
    end
  end
end
