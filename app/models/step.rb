require "elasticsearch/model"

class Step < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  ATTRIBUTES_PARAMS = %i(name content).freeze

  has_many :comments, as: :commentable, dependent: :destroy
  has_many :sub_steps
  has_many :votes, as: :voteable, dependent: :destroy

  accepts_nested_attributes_for :sub_steps, allow_destroy: true

  belongs_to :story

  validates :name, presence: true
  validates :content, presence: true

  settings index: {number_of_shards: 1} do
    mappings dynamic: "false" do
      indexes :name, analyzer: "english"
      indexes :content, analyzer: "english"
    end
  end

  class << self
    def search query
      __elasticsearch__.search(
        query: {
          multi_match: {
            query: query,
            fields: ["name^5", "content"]
          }
        }
      )
    end
  end
end

Step.__elasticsearch__.client.indices.delete index: Step.index_name rescue nil
Step.__elasticsearch__.client.indices.create \
  index: Step.index_name,
  body: {settings: Step.settings.to_hash, mappings: Step.mappings.to_hash}
Step.import
