module Serializers
  module User
    class UsersSerializer < Serializers::SupportSerializer
      attrs :id, :email, :name, :avatar
    end
  end
end
