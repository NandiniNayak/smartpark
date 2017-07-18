require 'test_helper'

class StatusmControllerTest < ActionDispatch::IntegrationTest
  test "should get page" do
    get statusm_page_url
    assert_response :success
  end

end
