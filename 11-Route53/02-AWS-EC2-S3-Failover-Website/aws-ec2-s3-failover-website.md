# 🖥️ AWS EC2 → S3 🌐 Failover Website

A project to demonstrate automatic failover from a primary EC2-hosted website to a secondary S3-hosted maintenance page using AWS Route 53.  
Ensures high availability and minimal downtime for web traffic.  
Includes health checks, failover routing, and static website hosting configuration.  

---

## 🎯 Objective
- 🌐 Host a primary website on an EC2 instance.  
- 🛠️ Configure a secondary S3 bucket to serve a maintenance page.  
- ❤️‍🩹 Set up Route 53 failover routing with health checks.  
- 🚧 Ensure automatic redirection from primary to secondary in case of failure.  

---

## 🔄 Workflow Summary
1. Launch EC2 instance and deploy main website.  
2. **Create S3 bucket with the same name as the primary DNS record** for failover (e.g., `main-site.pankajksh.xyz`).  
3. Upload `maintenance.html` to the S3 bucket.  
4. Enable public access and static website hosting on S3.  
5. Create a Route 53 hosted zone for the domain.  
6. Configure a health check for the EC2 instance.  
7. Create primary and secondary failover records in Route 53 using **the same DNS name**.  
8. Test failover by stopping EC2 instance.  
9. Verify automatic redirection to maintenance page.  

---

## 🛠 Steps Performed
1. **EC2 Instance Details 🖥️**  
   First EC2 instance created with userdata and running main server.  
   <img width="1920" height="978" alt="Screenshot (1743)" src="https://github.com/user-attachments/assets/34ff6b36-48fa-4703-92f9-29c7a60c1ea5" />

2. **Primary Site Health Status ✅**  
   Web page confirming EC2-hosted website is active and healthy.  
   <img width="1920" height="1032" alt="Screenshot (1744)" src="https://github.com/user-attachments/assets/b38d9412-56d9-46ab-850d-f22742996f19" />

3. **S3 File Upload 📂**  
   Created new bucket: `maintenance.pankajksh.xyz` and uploaded `maintenance.html`.  
   <img width="1920" height="980" alt="Screenshot (1745)" src="https://github.com/user-attachments/assets/896262dd-068f-472d-a6f1-e8b0008f0d6c" />
   
4. **S3 Public File Access 🔓**  
   Enabled public access for `maintenance.html` using ACLs.  
   <img width="1920" height="978" alt="Screenshot (1746)" src="https://github.com/user-attachments/assets/d778eaf6-6eec-4abd-aae2-64ababe0877e" />

5. **S3 Static Website Hosting 🌐**  
   Enabled static website hosting with `maintenance.html` as index document.  
   <img width="1920" height="980" alt="Screenshot (1747)" src="https://github.com/user-attachments/assets/db64e035-0df3-4462-99ad-4274e98c7abf" />

6. **Website Under Maintenance 🚧**  
   Verified maintenance page is live in browser.  
   <img width="1920" height="1032" alt="Screenshot (1748)" src="https://github.com/user-attachments/assets/db471f9c-f614-4aee-b8db-b045117bec08" />

7. **Route 53 Hosted Zone 🗺️**  
   Checked hosted zone for `pankajksh.xyz` and DNS record overview.  
   <img width="1920" height="980" alt="Screenshot (1749)" src="https://github.com/user-attachments/assets/967355a3-5393-4438-b1ee-5c25e4cb6f9e" />

8. **Route 53 Health Check ❤️‍🩹**  
   Created health check monitoring EC2 public IP and `/index.html`.  
   <img width="1920" height="980" alt="Screenshot (1751)" src="https://github.com/user-attachments/assets/3cb73966-c781-463a-bf41-e53fe34e8dc7" />

9. **Route 53 Failover Record (Primary) 🥇**  
   Primary record pointing to EC2 IP, linked to health check.  
   <img width="1920" height="979" alt="Screenshot (1752)" src="https://github.com/user-attachments/assets/63faf257-04f9-408a-9418-a9ded6d58291" />

10. **Route 53 Failover Record (Secondary) ⚙️**  
    Secondary record pointing to S3 static website endpoint **with same DNS name as primary** (`main-site.pankajksh.xyz`).  
    <img width="1920" height="980" alt="Screenshot (1753)" src="https://github.com/user-attachments/assets/ce03571e-56e4-4dac-a5bb-7ff24691c2fc" />

11. **Route 53 Change Status 🔄**  
    Verified DNS changes in Route 53 are INSYNC.  
    <img width="1920" height="978" alt="Screenshot (1754)" src="https://github.com/user-attachments/assets/a57a4539-9a14-4414-bb38-d22aaf21acd5" />

12. **Primary Site Health Status ✅**  
    Confirmed EC2 website is healthy and Route 53 failover configured.  
    <img width="1920" height="980" alt="Screenshot (1755)" src="https://github.com/user-attachments/assets/9ae418cb-703c-4dcb-8c87-75e355a44c88" />

13. **S3 Primary Site Hosting Setup 🖥️**  
    Verified main-site S3 bucket hosting enabled for maintenance page.  
    <img width="1920" height="1031" alt="Screenshot (1756)" src="https://github.com/user-attachments/assets/0bff34e5-fb2a-43a2-a9b6-3b15bb814eb4" />

14. **EC2 Instance Management 🛑**  
    Stopped EC2 instance to simulate failure.  
    <img width="1920" height="977" alt="Screenshot (1760)" src="https://github.com/user-attachments/assets/1ba7e3bf-8909-48fd-a748-fbfafe6efe51" />

15. **Route 53 Failover Record Configuration ⚙️**  
    Corrected secondary failover record to match primary DNS name.  
    <img width="1920" height="980" alt="Screenshot (1761)" src="https://github.com/user-attachments/assets/9995770d-ad03-497f-b1fb-121fd9e843c2" />

16. **Primary Site 404 Error ❌**  
    Detected 404 due to incorrect bucket or routing setup.  
    <img width="1920" height="1034" alt="Screenshot (1762)" src="https://github.com/user-attachments/assets/8067bbbe-7755-423a-9c03-9f3ddf6ad06e" />

17. **S3 Bucket for Primary Site 📂**  
    Created bucket `main-site.pankajksh.xyz` with same name as DNS record and uploaded `maintenance.html`.  
    <img width="1920" height="979" alt="Screenshot (1763)" src="https://github.com/user-attachments/assets/b3e1d336-8fd6-4cb7-837e-12235b1b623d" />

18. **S3 File Permissions 🔒**  
    Enabled public read access for maintenance.html.  
    <img width="1920" height="980" alt="Screenshot (1764)" src="https://github.com/user-attachments/assets/b8aeb852-2a26-44ea-abcb-42f054de25e1" />

19. **S3 Static Website Hosting 🌐**  
    Enabled static website hosting for new bucket.  
    <img width="1920" height="978" alt="Screenshot (1765)" src="https://github.com/user-attachments/assets/67c894cc-e14f-434a-b91c-689ac484b95f" />

20. **Route 53 Hosted Zone Records 🌐**  
    Verified primary and secondary failover A records for `main-site.pankajksh.xyz`.  
    <img width="1920" height="980" alt="Screenshot (1771)" src="https://github.com/user-attachments/assets/17fea9e1-bbbb-4c16-8e0e-666872abb415" />

21. **Route 53 Health Check Status ❤️‍🩹**  
    Primary EC2 health check shows Unhealthy, triggering failover.  
    <img width="1920" height="978" alt="Screenshot (1768)" src="https://github.com/user-attachments/assets/3d592925-2800-4c47-be36-ecb679a35ce7" />

22. **Website Failover 🚧**  
    Traffic redirected to S3 maintenance page successfully.  
    <img width="1920" height="1032" alt="Screenshot (1769)" src="https://github.com/user-attachments/assets/387a90fe-8f3b-43b1-9340-93a9d4c8fa2f" />

---

## ⚠️ Issues Faced
- ❌ Failover did not trigger initially due to separate DNS names.  
- ❌ S3 bucket not showing in alias dropdown because name mismatch.  
- ❌ 404 Not Found when secondary record pointed to wrong bucket.  
- ❌ InvalidChangeBatch 400 error due to mixing simple and failover routing.  
- ❌ Health check ID required error when not attached to primary record.  
- ⚠️ Confusion with iptables in userdata; SG rules suffice.  

---

## ✅ Outcome
- 🌟 Primary EC2 website is monitored via Route 53 health check.  
- 🌟 Secondary S3 bucket serves maintenance page.  
- 🌟 Failover routing works: stopping EC2 redirects traffic to S3.  
- 🌟 DNS propagation and failover verified.  

---

## 📚 Key Learnings & Observations
- 📌 Route 53 failover works only **within same DNS name**.  
- 📌 S3 static website endpoints must be used for failover alias target.  
- 📌 Health checks are essential to trigger failover.  
- 📌 Always create S3 bucket **with the same name as the DNS record**.  
- 📌 TTL affects how quickly failover takes effect.  

---

## 🌍 Real-World Use Case
- 🔄 Ensuring high availability for corporate or personal websites.  
- 🚧 Displaying maintenance pages during server downtime.  
- 💻 Combining EC2 dynamic hosting with S3 static failover for cost-effective redundancy.  

---

## 🏷️ Tags
#AWS #EC2 #S3 #Route53 #Failover #Health Check #High Availability 

---

## 💡 Tips
- ⏱ Keep low TTL (e.g., 60s) for faster failover.  
- 🛠 Test failover by manually stopping EC2.  
- 🔒 Always set public read access for S3 maintenance page.  
- 📂 Use **same DNS name for primary and secondary failover records**.  
- 💡 Monitor health check status regularly to ensure automatic routing works.  
