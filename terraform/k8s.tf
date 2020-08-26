resource google_container_cluster main {
  provider = google-beta
  name               = "kanji-yomoda-cluster"
  min_master_version = "1.16.13-gke.1"
  location           = var.region
  network            = google_compute_network.main.self_link
  subnetwork         = google_compute_subnetwork.main_public.self_link
  node_locations     = var.availability_zones
  // cluster can't be created with no node pool, so we need at least 1 node here.
  remove_default_node_pool = true
  initial_node_count       = 1

  addons_config {
    istio_config {
      disabled = false
    }
  }

  ip_allocation_policy {
    cluster_secondary_range_name  = google_compute_subnetwork.main_public.secondary_ip_range[0].range_name
    services_secondary_range_name = google_compute_subnetwork.main_public.secondary_ip_range[1].range_name
  }
}

resource google_container_node_pool preemptible {
  name       = "preemptible-node-pool"
  location   = var.region
  cluster    = google_container_cluster.main.name
  node_count = 1

  management {
    auto_repair = true
  }

  autoscaling {
    min_node_count = 1
    max_node_count = 4
  }

  node_config {
    preemptible  = true
    machine_type = "g1-small"

    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]
  }
}