# ☁️ AWS S3 & Transfer Family Hands-On Project

A complete end-to-end implementation of **Amazon S3** and **AWS Transfer Family** to securely transfer files using **SFTP** and store them in an **S3 bucket**, accessed via **FileZilla Client**.  

---

## 🎯 Objective
- 📂 **Learn** how to create and configure an **Amazon S3 bucket** with a custom bucket policy.  
- 🔐 **Understand** IAM role creation and permissions for Transfer Family integration.  
- 🚀 **Deploy and configure** an **AWS Transfer Family server** for secure file transfers.  
- 💻 **Connect and transfer** files via **FileZilla** using SSH key-based authentication.  

---

## 🏗 Architecture Overview
The architecture consists of:  
- 🗄 **Amazon S3 Bucket** for file storage.  
- 🔄 **AWS Transfer Family Server** (SFTP protocol) to enable secure file transfer.  
- 🛡 **IAM Role & Policy** to control access to the S3 bucket.  
- 🖥 **FileZilla Client** to connect to the Transfer Family server and upload/download files.
  
<img width="7866" height="2733" alt="image" src="https://github.com/user-attachments/assets/95c608b6-a701-42e9-af48-57ffbcd4f8c3" />

---

## 🔄 Workflow Summary
1. 🪣 **Create S3 Bucket** and configure bucket policy to allow restricted access.  
2. 🔄 **Setup Transfer Family Server** with SFTP protocol and Service Managed users.  
3. 🛡 **Create IAM Role** with appropriate permissions to access S3.  
4. 🔑 **Generate SSH Keys** using PuTTYgen for secure authentication.  
5. 🖥 **Configure FileZilla** with credentials and key file to connect to Transfer Family.  
6. ⬆️ **Upload and Manage Files** to and from S3 via the Transfer Family server.  
7. 📊 **Monitor and Delete** the setup after testing.  

---

## 🛠 Steps Performed

### 1. 🖥 FileZilla Client Download Page
```Shows the **download page** for FileZilla Client. Highlights different editions and the free version download option. ``` 
    <img width="1920" height="1026" alt="Screenshot (1209)" src="https://github.com/user-attachments/assets/debfc748-1cc9-4096-a90e-1f4eb1d2e1a6" />


### 2. ⚙️ FileZilla Client Setup with Optional Offer
```Displays **setup screen** with an optional offer to install Avast Antivirus. Shows how to **decline third-party software**.```  
    <img width="1920" height="1024" alt="Screenshot (1210)" src="https://github.com/user-attachments/assets/92c8b091-eb58-4401-a993-ecb226b0e617" />


### 3. 🖥 FileZilla Client Interface
```Shows the **main interface** of FileZilla. Left pane is local files; right pane (remote) is empty as it’s not connected. ``` 
    <img width="1920" height="1080" alt="Screenshot (1211)" src="https://github.com/user-attachments/assets/43258922-5599-4fab-b38c-1bdf018807d9" />


### 4. 🪣 Amazon S3 Create Bucket Configuration
```AWS Console page for creating a new S3 bucket. Configuration includes **region**, **unique name**, and **ownership settings**.``` 
    <img width="1920" height="975" alt="Screenshot (1213)" src="https://github.com/user-attachments/assets/c3b2bc11-e3bb-469d-9056-f6224eac39d4" />


### 5. 🪣 Amazon S3 Empty Bucket Page
```Displays the **empty bucket** named `pankaj-demo-data-transfer`. No files uploaded yet.```  
    <img width="1920" height="975" alt="Screenshot (1214)" src="https://github.com/user-attachments/assets/cad018da-105a-4e21-8ead-a4b13292968c" />


### 6. 📝 Amazon S3 Edit Bucket Policy
```Shows the **Bucket Policy editor** with JSON permissions allowing controlled access based on IP.``` 
    <img width="1920" height="975" alt="Screenshot (1221)" src="https://github.com/user-attachments/assets/2ceb7cd7-458c-41fb-b1ac-3e732ed93416" />


### 7. 🔄 AWS Transfer Family Choose Protocols
```Selects **SFTP** as the protocol for secure file transfer.``` 
    <img width="1920" height="975" alt="Screenshot (1222)" src="https://github.com/user-attachments/assets/36647891-c16d-4711-b560-73a7614f484c" />


### 8. 👥 AWS Transfer Family Choose Identity Provider
```Uses **Service Managed** identity provider for easier user management.```  
    <img width="1920" height="973" alt="Screenshot (1223)" src="https://github.com/user-attachments/assets/71254bac-e061-4269-b451-c9074b45f118" />


### 9. 🌐 AWS Transfer Family Choose Endpoint
```Configures **Publicly Accessible** endpoint with **IPv4** for external connectivity.``` 
    <img width="1920" height="974" alt="Screenshot (1224)" src="https://github.com/user-attachments/assets/399722e7-ceff-480c-bbab-895fffb372fd" />


### 10. 🪣 AWS Transfer Family Choose Domain
```Chooses **Amazon S3** as backend storage.```  
    <img width="1920" height="973" alt="Screenshot (1225)" src="https://github.com/user-attachments/assets/75ac1f21-58a2-40ac-9f02-4af097ea4bcf" />


### 11. ⚙️ AWS Transfer Family Configure Additional Details
```Configures **logging and algorithm options**. Defaults used for this setup.```  
    <img width="1920" height="975" alt="Screenshot (1226)" src="https://github.com/user-attachments/assets/247e9012-9767-4a86-9018-08a0a6a9ee1a" />


### 12. 🛡 AWS IAM Create Role - Select Trusted Entity
```Selects **AWS Service** with **Transfer use case** as trusted entity.```  
    <img width="1920" height="975" alt="Screenshot (1228)" src="https://github.com/user-attachments/assets/03011163-6bb1-42d7-ba3e-6d82030efd9c" />


### 13. 🛡 AWS IAM Create Role - Add Permissions
```Adds **AmazonS3FullAccess** permission policy to allow full S3 access.```  
    <img width="1920" height="975" alt="Screenshot (1229)" src="https://github.com/user-attachments/assets/df475599-2551-4a79-85c8-299a71508626" />


### 14. 🛡 AWS IAM Create Role - Name, Review, and Create
```Names the role **demoUser-Role**, reviews trust and permission policies, and creates the role.```
    <img width="1920" height="976" alt="Screenshot (1234)" src="https://github.com/user-attachments/assets/5e76681b-9313-40e7-b00e-410e86815024" />


### 15. 👤 AWS Transfer Family Add User
```Creates a user **demoUser** linked to the IAM role. Specifies **home directory** and adds SSH public key.```  
    <img width="1920" height="975" alt="Screenshot (1233)" src="https://github.com/user-attachments/assets/23d9e6e5-7d4e-4f4e-a762-4b0748cc635a" />


### 16. 🔑 PuTTY Key Generator for SSH Public Key
```Generates **SSH key pair**. Public key copied to AWS; private key saved for FileZilla connection.```  
    <img width="1920" height="975" alt="Screenshot (1235)" src="https://github.com/user-attachments/assets/9dd4432d-e4d2-4a23-b9fa-abba0582144a" />


### 17. 📋 AWS Transfer Family Server Overview
```Displays **server summary** including endpoint and user list.```  
    <img width="1920" height="977" alt="Screenshot (1236)" src="https://github.com/user-attachments/assets/04636b67-b78a-482c-afd3-4832c163bf96" />


### 18. 🖥 FileZilla Site Manager with Connection Details
```Configures **host, username, and SSH key file** in FileZilla.```  
    <img width="1920" height="1080" alt="Screenshot (1237)" src="https://github.com/user-attachments/assets/06b66ac8-37c2-459f-97c6-b4341315aa5c" />

### 19. 🔗 FileZilla Connected to AWS Transfer Family Server
```Shows **successful connection** to the server. Remote pane ready for file transfers.```  
    <img width="1920" height="1080" alt="Screenshot (1239)" src="https://github.com/user-attachments/assets/30a22e83-2ca1-489e-b7b3-5040b9db8529" />


### 20. ⬆️ FileZilla Successful File Transfer
```Uploads **Audi.jpg** and **Defender.jpg**. Transfer logs confirm success.```  
    <img width="1920" height="1080" alt="Screenshot (1241)" src="https://github.com/user-attachments/assets/d9dfe78b-bbc4-4ec8-bdad-0621f6eac2f7" />


### 21. 🪣 Amazon S3 Bucket Content with Uploaded Files
```S3 bucket now contains **uploaded files** in the user’s home directory.```  
    <img width="1920" height="978" alt="Screenshot (1242)" src="https://github.com/user-attachments/assets/0d5a2095-0a9c-4f43-9efd-b66d935152ca" />


### 22. 📊 AWS Transfer Family Server Monitoring Dashboard
```Displays **metrics and usage**: BytesIn, BytesOut, FilesIn, FilesOut.```  
    <img width="1920" height="977" alt="Screenshot (1244)" src="https://github.com/user-attachments/assets/18e6182e-7f07-4c7b-95a8-1ff31f9d51b6" />


### 23. 🗑 Amazon S3 Delete Bucket Confirmation
```Shows **delete confirmation** requiring manual entry of bucket name.```  
    <img width="1920" height="976" alt="Screenshot (1243)" src="https://github.com/user-attachments/assets/4362e7ab-ac3c-46f4-b356-e346d2de93d3" />


### 24. 🗑 AWS Transfer Family Delete Server Confirmation
```Confirms **server deletion** by typing "delete". Data in S3 remains safe.``` 
    <img width="1920" height="975" alt="Screenshot (1245)" src="https://github.com/user-attachments/assets/7686c2c3-c008-4036-bca2-154b30d897fe" />


---

## ⚠️ Issues Faced
- ❌ Initial SSH key **format mismatch** (resolved by using PuTTYgen `.ppk` format).  
- ⚠️ Bucket policy error due to missing **principal wildcard** (fixed).  
- 🔒 FileZilla **host key prompt** during first connection (accepted after verification).  

---

## ✅ Outcome
- ✅ Successfully created and configured an **S3 bucket** and **Transfer Family server**.  
- 🔗 Established secure **SFTP connection** via FileZilla.  
- 📂 Uploaded and verified **files in S3**.  
- 🧹 Monitored activity and **cleaned up resources** after testing.  

---

## 📚 Key Learnings & Observations
- 🛡 IAM roles provide **granular control**; always prefer least privilege.  
- 👥 **Service-managed identity** simplifies Transfer Family user management.  
- 🔑 **SSH keys are more secure** than password-based authentication.  
- 📊 Monitoring dashboards give **insight into transfer activities**.  

---

## 🌍 Real-World Use Case
- 🏢 Enterprises can set up **secure SFTP endpoints** for vendors to upload sensitive data to **S3** without giving AWS Console access.  
- ⚙️ Useful for **automating nightly transfers**, **backup solutions**, and **integrating legacy FTP workflows** with cloud storage.  

---

## 🏷️ Tags
`AWS` `S3` `Transfer Family` `IAM` `SFTP` `FileZilla` `Hands-On` `Cloud`  

---

## 💡 Tips
- 🔐 Always restrict access by **IP or VPC** for security.  
- 🔄 Rotate **SSH keys** regularly.  
- 🧹 Clean up resources (buckets, servers) to avoid **unnecessary billing**.  
- 📝 Use **custom IAM policies** instead of `AmazonS3FullAccess` in production.  
