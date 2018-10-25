json.extract! speech, :id, :text, :x, :y, :width, :height, :font_family, :font_size, :font_style, :font_color, :background_color, :created_at, :updated_at
json.url speech_url(speech, format: :json)
