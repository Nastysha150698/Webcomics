require 'test_helper'

class BubblesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @bubble = bubbles(:one)
  end

  test "should get index" do
    get bubbles_url
    assert_response :success
  end

  test "should get new" do
    get new_bubble_url
    assert_response :success
  end

  test "should create bubble" do
    assert_difference('Bubble.count') do
      post bubbles_url, params: { bubble: { background-color: @bubble.background-color, border-color: @bubble.border-color, border-width: @bubble.border-width, figure: @bubble.figure, height: @bubble.height, shape: @bubble.shape, width: @bubble.width, x: @bubble.x, y: @bubble.y } }
    end

    assert_redirected_to bubble_url(Bubble.last)
  end

  test "should show bubble" do
    get bubble_url(@bubble)
    assert_response :success
  end

  test "should get edit" do
    get edit_bubble_url(@bubble)
    assert_response :success
  end

  test "should update bubble" do
    patch bubble_url(@bubble), params: { bubble: { background-color: @bubble.background-color, border-color: @bubble.border-color, border-width: @bubble.border-width, figure: @bubble.figure, height: @bubble.height, shape: @bubble.shape, width: @bubble.width, x: @bubble.x, y: @bubble.y } }
    assert_redirected_to bubble_url(@bubble)
  end

  test "should destroy bubble" do
    assert_difference('Bubble.count', -1) do
      delete bubble_url(@bubble)
    end

    assert_redirected_to bubbles_url
  end
end
