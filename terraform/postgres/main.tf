resource "aws_db_instance" "default" {
  identifier = "sredatabase"
  engine               = "postgres"
  engine_version       = "12.9"
  instance_class       = "db.t2.micro"
  name                 = "postgres"
  username             = "postgres"
  password             = "postgres"
  skip_final_snapshot  = true
  publicly_accessible   = true

  allocated_storage    = 10
}