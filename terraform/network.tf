locals {
  vpc_name = "kanji-yomoda-vpc"
  public_subnet_cidr = "10.0.0.0/16"
  public_subnet_gke_cidr = "10.1.0.0/16"
}

resource google_compute_network main {
  name                    = local.vpc_name
  auto_create_subnetworks = "false"
  routing_mode            = "REGIONAL"
}

resource google_compute_subnetwork main_public {
  name                     = "${local.vpc_name}-public"
  ip_cidr_range            = local.public_subnet_cidr
  private_ip_google_access = true
  network                  = google_compute_network.main.self_link
  region                   = var.region

  secondary_ip_range {
    ip_cidr_range = cidrsubnet(local.public_subnet_gke_cidr, 1, 0)
    range_name    = "gke-cluster-ip-range"
  }
  secondary_ip_range {
    ip_cidr_range = cidrsubnet(local.public_subnet_gke_cidr, 1, 1)
    range_name    = "gke-services-ip-range"
  }
}

resource google_compute_address kanjiyomoda_com_ip {
  name         = "kanjiyomoda-com-ip"
  region       = "asia-northeast1"
  network_tier = "STANDARD"
}