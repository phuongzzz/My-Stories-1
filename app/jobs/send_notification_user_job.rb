class SendNotificationUserJob < ApplicationJob
  queue_as :default

  def perform user, story
    user.followers.ids.each do |id|
      ActionCable.server.broadcast "#{id}_notification_channel",
        user: user, story: story
    end
  end
end
