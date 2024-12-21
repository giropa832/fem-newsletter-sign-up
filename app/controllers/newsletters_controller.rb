class NewslettersController < ApplicationController
  def new
    @email = Email.new
  end

  def success
    @email = Email.new(email: params[:email])
    @email.save
  end
end
