class SendNotificationStoryJob < ApplicationJob
  queue_as :default

  def perform story
    story.followers.ids.each do |id|
      ActionCable.server.broadcast "#{id}_notification_channel", story: story
    end
  end
end
