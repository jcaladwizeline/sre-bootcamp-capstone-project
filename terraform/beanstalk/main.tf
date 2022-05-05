resource "aws_elastic_beanstalk_application" "tfsrebootcamp" {
  name        = "tf-sre-bootcamp-jcalad"
  description = "tf-sre-bootcamp-jcalad-desc"
}

resource "aws_elastic_beanstalk_environment" "tfenvsrebootcamp" {
  name                = "tf-sre-bootcamp-jcalad"
  application         = aws_elastic_beanstalk_application.tfsrebootcamp.name
  solution_stack_name = "64bit Amazon Linux 2 v3.4.14 running Docker"

  setting {
        namespace = "aws:autoscaling:launchconfiguration"
        name      = "IamInstanceProfile"
        value     = "aws-elasticbeanstalk-ec2-role"
      }
}