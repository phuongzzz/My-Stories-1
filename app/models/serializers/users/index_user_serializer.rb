module Serializers
  module Users
    class IndexUserSerializer < Serializers::SupportSerializer
      attrs :id, :name, :email, :avatar
    end
  end
end
