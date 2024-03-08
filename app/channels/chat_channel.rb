class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel"
  end

  def speak(data)
    Rails.logger.info "============ DATA-> #{data} ==========="
    ActionCable.server.broadcast "chat_channel", {message: data["message"]}
  end
end
