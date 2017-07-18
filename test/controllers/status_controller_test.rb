require 'test_helper'

class StatusControllerTest < ActionDispatch::IntegrationTest
  test "should get page" do
    get status_page_url
    assert_response :success
  end

end
