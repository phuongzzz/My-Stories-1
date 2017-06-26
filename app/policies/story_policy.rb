class StoryPolicy < ApplicationPolicy
  def edit?
    record.user == user
  end

  def update?
    record.user == user
  end
end
