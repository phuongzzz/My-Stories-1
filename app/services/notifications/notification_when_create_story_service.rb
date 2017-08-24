class Notifications::NotificationWhenCreateStoryService
  def initialize params
    @story = params[:story]
    @user = story.user
  end

  def perform
    @notification_create_story =
      I18n.t("stories.messages.notification_create", name_story: story.name,
        name_user: user.name)
    user.followers.each do |each_follower|
      Notification.create! notificationable_type: User.name,
        notificationable_id: user.id, recipient_id: each_follower.id,
        content: notification_create_story
    end

    SendNotificationWhenCreateStoryJob.perform_later user, story
  end

  private

  attr_reader :notification_create_story, :user, :story
end
