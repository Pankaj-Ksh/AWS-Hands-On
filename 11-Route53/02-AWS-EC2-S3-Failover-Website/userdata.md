# 🚀 EC2 User Data Script (Route 53 Failover Setup)

This script installs Apache, serves a combined **website + health check page**, and ensures the server is ready for Route 53 failover testing.


```
#!/bin/bash
# ==============================
# EC2 User Data - Route53 Failover (Single Page, Clean)
# ==============================

# Update packages
yum update -y

# Install Apache web server
yum install -y httpd

# Start and enable Apache
systemctl start httpd
systemctl enable httpd

# Create HTML page (acts as both website + health check)
cat <<EOL > /var/www/html/index.html
<html>
<head>
    <title>Welcome to pankajksh.xyz</title>
</head>
<body style="text-align:center; font-family:Arial, sans-serif;">
    <h1>✅ Primary Site - EC2 Web Server</h1>
    <p>This page is hosted on EC2 instance for <strong>pankajksh.xyz</strong>.</p>
    <p>If this instance fails, Route 53 failover policy should redirect traffic to the secondary instance.</p>
    <hr>
    <h2>Status: Healthy ✅</h2>
</body>
</html>
EOL

# Set permissions
chown apache:apache /var/www/html/index.html

echo "Web server setup with combined health check page complete!"


```
