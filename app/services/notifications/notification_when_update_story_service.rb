class Notifications::NotificationWhenUpdateStoryService
  def initialize params
    @story = params[:story]
    @user = story.user
  end

  def perform
    create_notification_update_story_for_story
    create_notification_update_story_for_user

    SendNotificationStoryJob.perform_later story
    SendNotificationUserJob.perform_later user, story
  end

  private

  attr_reader :story, :notification_update_story_for_story,
    :notification_update_story_for_user, :user

  def create_notification_update_story_for_story
    @notification_update_story_for_story =
      I18n.t("stories.messages.notification_update", name: story.name)
    story.followers.each do |each_follower|
      Notification.create! notificationable_type: Story.name,
        notificationable_id: story.id, recipient_id: each_follower.id,
        content: notification_update_story_for_story
    end
  end

  def create_notification_update_story_for_user
    @notification_update_story_for_user =
      I18n.t("users.messages.notification_update", name_story: story.name,
        name_user: user.name)
    user.followers.each do |each_follower|
      Notification.create! notificationable_type: User.name,
        notificationable_id: user.id, recipient_id: each_follower.id,
        content: notification_update_story_for_user
    end
  end
end
