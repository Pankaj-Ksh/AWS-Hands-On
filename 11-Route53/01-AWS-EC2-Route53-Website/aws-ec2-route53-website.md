# 🌐 AWS EC2 Website Hosting with Route 53 DNS

This project involves hosting a simple static website on an **Amazon EC2** instance and using **Amazon Route 53** to manage DNS for the domain `pankajksh.xyz`.  
The domain was purchased from **GoDaddy**, and the DNS was configured via Route 53 to create a custom subdomain (`demo.pankajksh.xyz`) pointing to the EC2 public IP.  
This allows access to the website via a user-friendly domain instead of just the IP.  

---

## 🎯 Objective
- Host a static website on AWS EC2 🖥️  
- Use Route 53 for DNS management 🌐  
- Link GoDaddy domain to AWS Route 53 💡  
- Create a subdomain pointing to EC2 IP for easy access ✨  

---

## 🔄 Workflow Summary
1. Acquire domain from GoDaddy 🛒  
2. Create a hosted zone in AWS Route 53 🏷️  
3. Update GoDaddy nameservers to Route 53 NS records 🔄  
4. Launch EC2 instance and configure it ⚙️  
5. Create A record in Route 53 for subdomain pointing to EC2 IP 🎯  
6. Verify website accessibility via public IP and domain ✅  

---

## 🛠 Steps Performed
**Screenshots:**  

1. **GoDaddy Default Nameservers** 📝  
   Shows domain using GoDaddy's default NS.  
   <img width="1920" height="1032" alt="Screenshot (1725)" src="https://github.com/user-attachments/assets/1873e761-11de-419c-b733-dafdee2c0c07" />

2. **AWS Route 53 Dashboard** 💻  
   Displays dashboard features like DNS management & traffic routing.  
   <img width="1920" height="979" alt="Screenshot (1726)" src="https://github.com/user-attachments/assets/504b1eca-ba3b-428d-8448-40a76d447c9f" />

3. **Hosted Zone Creation** 🔧  
   Created public hosted zone for `pankajksh.xyz`.  
   <img width="1920" height="980" alt="Screenshot (1727)" src="https://github.com/user-attachments/assets/c43d97d9-e962-423c-adf3-d964edc4ba91" />

4. **GoDaddy Nameserver Update** ✏️  
   Updated nameservers to AWS Route 53 NS records.  
   <img width="1920" height="1028" alt="Screenshot (1728)" src="https://github.com/user-attachments/assets/56216552-a073-4ec5-908c-7b45b46b7aa9" />

5. **Route 53 Hosted Zone Records** 📄  
   NS and SOA records automatically created.  
   <img width="1920" height="980" alt="Screenshot (1731)" src="https://github.com/user-attachments/assets/6e3b4706-2def-42f2-8a27-02b727b37117" />

6. **EC2 Instance Details** 🏷️  
   Instance running with public IP `15.206.179.20`  
   <img width="1920" height="980" alt="Screenshot (1732)" src="https://github.com/user-attachments/assets/32573cb9-0c43-4665-8b2a-9d2c3b1a20c3" />
   <img width="1920" height="979" alt="Screenshot (1733)" src="https://github.com/user-attachments/assets/6112d6c4-2147-443b-a45c-d3a837dc556a" />

7. **Website Hosted on EC2** 🌍  
   Accessible via public IP → displays "Hello from EC2!"  
   <img width="1920" height="1031" alt="Screenshot (1734)" src="https://github.com/user-attachments/assets/5fe728cd-90a5-4ec8-8fb5-8975d534907c" />

8. **Route 53 A Record Creation** ➕  
   Created `demo-website.pankajksh.xyz` pointing to EC2 IP  
   <img width="1920" height="979" alt="Screenshot (1735)" src="https://github.com/user-attachments/assets/cf1eac5d-7cbe-47ef-a564-c74e4554ece4" />

9. **Route 53 Change Pending** ⏳  
    Status PENDING while DNS propagates  
   <img width="1920" height="979" alt="Screenshot (1736)" src="https://github.com/user-attachments/assets/227c9c5a-e33b-4d05-8e13-a9f6ac382df0" />

10. **Route 53 Change In-Sync** ✅  
    DNS change successfully propagated  
    <img width="1920" height="978" alt="Screenshot (1737)" src="https://github.com/user-attachments/assets/1153d7ab-90bf-4fd6-aee0-1e195da11b58" />

11. **DNS Resolution Failure** ⚠️  
    Browser initially shows "This site can't be reached"  
    <img width="1920" height="1031" alt="Screenshot (1738)" src="https://github.com/user-attachments/assets/bfbbc9d2-28cd-40dd-9924-bac6040060ee" />

12. **Created new A Record Creation for Subdomain** 🖊️  
    Configured `demo.pankajksh.xyz` → EC2 IP  
    <img width="1920" height="979" alt="Screenshot (1740)" src="https://github.com/user-attachments/assets/309e3c10-6ebc-497f-8244-ab4b31d833a2" />

13. **DNS Resolution Success** 🎉  
    Website accessible at `http://demo.pankajksh.xyz/`  
    <img width="1920" height="1032" alt="Screenshot (1741)" src="https://github.com/user-attachments/assets/a6fb9ba0-e3b8-45f9-8518-ebeb996ed0bc" />

---

## UserData 
```
#!/bin/bash
# Update packages
yum update -y

# Install Apache
yum install -y httpd

# Start Apache service
systemctl start httpd
systemctl enable httpd

# Create a simple HTML page
cat <<EOL > /var/www/html/index.html
<html>
<head>
    <title>Welcome to pankajksh.xyz!</title>
</head>
<body style="text-align:center; font-family:Arial, sans-serif;">
    <h1>🎉 Hello from EC2!</h1>
    <p>Your website is successfully hosted on AWS EC2 with Route 53.</p>
</body>
</html>
EOL

# Set proper permissions
chown apache:apache /var/www/html/index.html

# Allow HTTP traffic in case Security Group is not open (optional, also open in SG)
iptables -I INPUT -p tcp --dport 80 -j ACCEPT
systemctl restart iptables

echo "Web server setup complete!"

```


## ⚠️ Issues Faced
- Initial DNS propagation delay 🌐  
- Browser cache causing site to not load 🧹  
- Temporary misconfiguration of A records ✏️  

---

## ✅ Outcome
- Domain `pankajksh.xyz` successfully linked to Route 53  
- Subdomain `demo.pankajksh.xyz` resolves to EC2 IP  
- Static website hosted and accessible via browser 🖥️  
- Learned end-to-end workflow of domain to EC2 hosting 🌟  

---

## 📚 Key Learnings & Observations
- AWS Route 53 hosted zones manage DNS efficiently 🛠️  
- GoDaddy NS update is crucial for Route 53 to work 🔗  
- EC2 Security Groups must allow port 80 for HTTP 🌐  
- User Data or manual setup can deploy a website quickly ⚡  

---

## 🌍 Real-World Use Case
- Small business website hosting 💼  
- Personal portfolio website 🌟  
- Quick deployment for testing web applications 🧪  

---

## 🏷️ Tags
#AWS #EC2 #Route53 #GoDaddy #DNS #WebHosting #StaticWebsite #CloudComputing  

