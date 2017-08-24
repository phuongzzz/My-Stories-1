class NotificationChannel < ApplicationCable::Channel
  def subscribed
    channel_name = "#{current_user.id}_notification_channel"
    stream_from channel_name
  end

  def unsubscribed; end
end
