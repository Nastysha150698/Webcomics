require "application_system_test_case"

class FiguresTest < ApplicationSystemTestCase
  setup do
    @figure = figures(:one)
  end

  test "visiting the index" do
    visit figures_url
    assert_selector "h1", text: "Figures"
  end

  test "creating a Figure" do
    visit figures_url
    click_on "New Figure"

    fill_in "Background Color", with: @figure.background-color
    fill_in "Border Color", with: @figure.border-color
    fill_in "Border Width", with: @figure.border-width
    fill_in "Figure", with: @figure.figure
    fill_in "Height", with: @figure.height
    fill_in "Width", with: @figure.width
    fill_in "X", with: @figure.x
    fill_in "Y", with: @figure.y
    click_on "Create Figure"

    assert_text "Figure was successfully created"
    click_on "Back"
  end

  test "updating a Figure" do
    visit figures_url
    click_on "Edit", match: :first

    fill_in "Background Color", with: @figure.background-color
    fill_in "Border Color", with: @figure.border-color
    fill_in "Border Width", with: @figure.border-width
    fill_in "Figure", with: @figure.figure
    fill_in "Height", with: @figure.height
    fill_in "Width", with: @figure.width
    fill_in "X", with: @figure.x
    fill_in "Y", with: @figure.y
    click_on "Update Figure"

    assert_text "Figure was successfully updated"
    click_on "Back"
  end

  test "destroying a Figure" do
    visit figures_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Figure was successfully destroyed"
  end
end
