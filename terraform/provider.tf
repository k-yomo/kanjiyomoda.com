provider google {
  project = var.project
  region  = var.region
  version = "3.34.0"
}

provider google-beta {
  project = var.project
  region  = var.region
  version = "3.34.0"
}
