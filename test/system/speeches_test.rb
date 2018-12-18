require "application_system_test_case"

class SpeechesTest < ApplicationSystemTestCase
  setup do
    @speech = speeches(:one)
  end

  test "visiting the index" do
    visit speeches_url
    assert_selector "h1", text: "Speeches"
  end

  test "creating a Speech" do
    visit speeches_url
    click_on "New Speech"

    fill_in "Background Color", with: @speech.background_color
    fill_in "Font Color", with: @speech.font_color
    fill_in "Font Family", with: @speech.font_family
    fill_in "Font Size", with: @speech.font_size
    fill_in "Font Style", with: @speech.font_style
    fill_in "Height", with: @speech.height
    fill_in "Text", with: @speech.text
    fill_in "Width", with: @speech.width
    fill_in "X", with: @speech.x
    fill_in "Y", with: @speech.y
    click_on "Create Speech"

    assert_text "Speech was successfully created"
    click_on "Back"
  end

  test "updating a Speech" do
    visit speeches_url
    click_on "Edit", match: :first

    fill_in "Background Color", with: @speech.background_color
    fill_in "Font Color", with: @speech.font_color
    fill_in "Font Family", with: @speech.font_family
    fill_in "Font Size", with: @speech.font_size
    fill_in "Font Style", with: @speech.font_style
    fill_in "Height", with: @speech.height
    fill_in "Text", with: @speech.text
    fill_in "Width", with: @speech.width
    fill_in "X", with: @speech.x
    fill_in "Y", with: @speech.y
    click_on "Update Speech"

    assert_text "Speech was successfully updated"
    click_on "Back"
  end

  test "destroying a Speech" do
    visit speeches_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Speech was successfully destroyed"
  end
end
