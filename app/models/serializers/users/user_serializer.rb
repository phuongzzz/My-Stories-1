module Serializers
  module Users
    class UserSerializer < Serializers::SupportSerializer
      attrs :id, :email, :name, :avatar
    end
  end
end
