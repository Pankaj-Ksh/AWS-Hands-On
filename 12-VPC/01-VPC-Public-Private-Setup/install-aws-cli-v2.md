# 💻 AWS CLI v2 Installation Guide

This file provides a step-by-step guide to install **AWS CLI v2** on Linux systems.


## Install unzip if not already installed 
```
sudo dnf install -y unzip 
```

## Download AWS CLI v2
```
sudo curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" 
```

## Unzip installer 
```
sudo unzip awscliv2.zip 
```

## Install 
```
sudo ./aws/install 
```

## Verify 
```
sudo /usr/local/bin/aws --version
```
