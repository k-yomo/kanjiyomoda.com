terraform {
  required_version = "0.13.0"
  backend "gcs" {
    bucket = "kanji-yomoda-tf-state"
  }
}