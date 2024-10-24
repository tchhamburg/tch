module ApplicationHelper
  def asset_exists?(path)
    if Rails.configuration.assets.compile
      Rails.application.precompiled_assets.include?(path)
    else
      Rails.application.assets_manifest.assets[path].present?
    end
  rescue
    Rails.application.assets.find_asset(path).present?
  end
end