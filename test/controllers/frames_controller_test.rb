require 'test_helper'

class FramesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @frame = frames(:one)
  end

  test "should get index" do
    get frames_url
    assert_response :success
  end

  test "should get new" do
    get new_frame_url
    assert_response :success
  end

  test "should create frame" do
    assert_difference('Frame.count') do
      post frames_url, params: { frame: { background_color: @frame.background_color, border_color: @frame.border_color, border_width: @frame.border_width, frame: @frame.frame, height: @frame.height, width: @frame.width, x: @frame.x, y: @frame.y } }
    end

    assert_redirected_to frame_url(Frame.last)
  end

  test "should show frame" do
    get frame_url(@frame)
    assert_response :success
  end

  test "should get edit" do
    get edit_frame_url(@frame)
    assert_response :success
  end

  test "should update frame" do
    patch frame_url(@frame), params: { frame: { background_color: @frame.background_color, border_color: @frame.border_color, border_width: @frame.border_width, frame: @frame.frame, height: @frame.height, width: @frame.width, x: @frame.x, y: @frame.y } }
    assert_redirected_to frame_url(@frame)
  end

  test "should destroy frame" do
    assert_difference('Frame.count', -1) do
      delete frame_url(@frame)
    end

    assert_redirected_to frames_url
  end
end
