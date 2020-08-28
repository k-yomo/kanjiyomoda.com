resource "google_compute_managed_ssl_certificate" "ssl_cert" {
  provider = "google-beta"
  project  = data.google_project.project.name

  name = "kanjiyomoda-com-cert"

  managed {
    domains = ["kanjiyomoda.com"]
  }
}