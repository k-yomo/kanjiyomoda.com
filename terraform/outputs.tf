output kanjiyomoda_com_ip {
  value = google_compute_address.kanjiyomoda_com_ip.address
}

output gke_gcr_key {
  value = google_service_account_key.gke_gcr.private_key
}