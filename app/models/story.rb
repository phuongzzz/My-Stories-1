require "elasticsearch/model"

class Story < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  ATTRIBUTES_PARAMS =
    %i(name description is_public due_date category_id picture).freeze

  mount_base64_uploader :picture, PictureUploader

  has_many :comments, as: :commentable
  has_many :votes, as: :voteable, dependent: :destroy
  has_many :reports
  has_many :steps, dependent: :destroy

  belongs_to :user
  belongs_to :category

  lambda_params_category_id = lambda do |params_category_id|
    where category_id: params_category_id
  end

  scope :select_by_category_id, lambda_params_category_id

  validates :name, presence: true
  validates :description, presence: true
  validates :due_date, presence: true
  validates :user, presence: true
  validates :category, presence: true
  validates :is_public, presence: true

  settings index: {number_of_shards: 1} do
    mappings dynamic: "false" do
      indexes :name, analyzer: "english"
      indexes :description, analyzer: "english"
    end
  end

  class << self
    def search query
      __elasticsearch__.search(
        query: {
          multi_match: {
            query: query,
            fields: ["name^10", "description"]
          }
        }
      )
    end
  end
end

Story.__elasticsearch__.client.indices.delete index: Story.index_name rescue nil
Story.__elasticsearch__.client.indices.create \
  index: Story.index_name,
  body: {settings: Story.settings.to_hash, mappings: Story.mappings.to_hash}
Story.import
