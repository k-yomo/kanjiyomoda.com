
resource google_service_account gke_gcr {
  account_id = "gke-gcr"
}

resource google_service_account_key gke_gcr {
  service_account_id = google_service_account.gke_gcr.id
}

resource google_project_iam_member gke_pull_gcr {
  member = "serviceAccount:${google_service_account.gke_gcr.email}"
  role   = "roles/storage.objectViewer"
}

resource google_service_account ci_user {
  account_id = "ci-user"
}

resource google_service_account_key ci_user {
  service_account_id = google_service_account.ci_user.id
}

resource google_project_iam_member ci_user_push_gcr {
  member = "serviceAccount:${google_service_account.ci_user.email}"
  role   = "roles/storage.admin"
}

