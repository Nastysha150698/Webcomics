require 'test_helper'

class ComicsOnReactControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get comics_on_react_index_url
    assert_response :success
  end

end
