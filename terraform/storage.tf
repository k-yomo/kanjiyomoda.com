
resource google_storage_bucket tf_state {
  project = data.google_project.project.project_id
  name = "${data.google_project.project.project_id}-tf-state"
  location = "ASIA"
  versioning {
    enabled = true
  }
}
