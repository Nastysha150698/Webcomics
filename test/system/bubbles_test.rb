require "application_system_test_case"

class BubblesTest < ApplicationSystemTestCase
  setup do
    @bubble = bubbles(:one)
  end

  test "visiting the index" do
    visit bubbles_url
    assert_selector "h1", text: "Bubbles"
  end

  test "creating a Bubble" do
    visit bubbles_url
    click_on "New Bubble"

    fill_in "Background Color", with: @bubble.background-color
    fill_in "Border Color", with: @bubble.border-color
    fill_in "Border Width", with: @bubble.border-width
    fill_in "Figure", with: @bubble.figure
    fill_in "Height", with: @bubble.height
    fill_in "Shape", with: @bubble.shape
    fill_in "Width", with: @bubble.width
    fill_in "X", with: @bubble.x
    fill_in "Y", with: @bubble.y
    click_on "Create Bubble"

    assert_text "Bubble was successfully created"
    click_on "Back"
  end

  test "updating a Bubble" do
    visit bubbles_url
    click_on "Edit", match: :first

    fill_in "Background Color", with: @bubble.background-color
    fill_in "Border Color", with: @bubble.border-color
    fill_in "Border Width", with: @bubble.border-width
    fill_in "Figure", with: @bubble.figure
    fill_in "Height", with: @bubble.height
    fill_in "Shape", with: @bubble.shape
    fill_in "Width", with: @bubble.width
    fill_in "X", with: @bubble.x
    fill_in "Y", with: @bubble.y
    click_on "Update Bubble"

    assert_text "Bubble was successfully updated"
    click_on "Back"
  end

  test "destroying a Bubble" do
    visit bubbles_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Bubble was successfully destroyed"
  end
end
