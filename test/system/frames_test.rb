require "application_system_test_case"

class FramesTest < ApplicationSystemTestCase
  setup do
    @frame = frames(:one)
  end

  test "visiting the index" do
    visit frames_url
    assert_selector "h1", text: "Frames"
  end

  test "creating a Frame" do
    visit frames_url
    click_on "New Frame"

    fill_in "Background Color", with: @frame.background-color
    fill_in "Border Color", with: @frame.border-color
    fill_in "Border Width", with: @frame.border-width
    fill_in "Height", with: @frame.height
    fill_in "Width", with: @frame.width
    fill_in "X", with: @frame.x
    fill_in "Y", with: @frame.y
    click_on "Create Frame"

    assert_text "Frame was successfully created"
    click_on "Back"
  end

  test "updating a Frame" do
    visit frames_url
    click_on "Edit", match: :first

    fill_in "Background Color", with: @frame.background-color
    fill_in "Border Color", with: @frame.border-color
    fill_in "Border Width", with: @frame.border-width
    fill_in "Height", with: @frame.height
    fill_in "Width", with: @frame.width
    fill_in "X", with: @frame.x
    fill_in "Y", with: @frame.y
    click_on "Update Frame"

    assert_text "Frame was successfully updated"
    click_on "Back"
  end

  test "destroying a Frame" do
    visit frames_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Frame was successfully destroyed"
  end
end
