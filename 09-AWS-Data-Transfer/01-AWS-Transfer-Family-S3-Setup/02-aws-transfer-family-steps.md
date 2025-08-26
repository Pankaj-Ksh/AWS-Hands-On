# ☁️ AWS S3 & Transfer Family: Step-by-Step Setup 🚀

A step-by-step hands-on guide to **set up AWS Transfer Family** integrated with **S3** for secure file transfers via **SFTP** using FileZilla.  

---

## 🗂️ Step 1: S3 Bucket Setup 🪣

1. **Create a Public Bucket**  
   - **Name:** `pankaj-demo-data-transfer` ✅  
   - 📝 Navigate to **S3 → Create Bucket** and provide a **unique name** and **region**.

2. **Add a Bucket Policy** 🔐  
   - Navigate: **Bucket → Permissions → Bucket Policy → Edit**  
   - Copy-paste the following JSON policy:
     

   ```json
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Effect": "Allow",
               "Principal": "*",
               "Action": [
                   "s3:ListBucket",
                   "s3:GetObject",
                   "s3:PutObject"
               ],
               "Resource": [
                   "arn:aws:s3:::pankaj-demo-data-transfer",
                   "arn:aws:s3:::pankaj-demo-data-transfer/*"
               ],
               "Condition": {
                   "IpAddress": {
                       "aws:SourceIp": "223.xxx.xxx.xx/32"
                   }
               }
           }
       ]
   }
   
💾 Save Changes ✅

⚠️ Make sure the IP address matches your machine or trusted network.

---

## 🚀 Step 2: AWS Transfer Family Setup 🔄

### Create a New Server 🖥️
- Navigate: AWS Transfer Family → Create Server  
- Protocol: SFTP (or FTPS/FTP as needed) 🔑

### Identity Provider 👥
- Type: Service Managed 🛡️

### Endpoint Configuration 🌐
- Accessibility: Publicly Accessible 🌍  
- IP Address Type: IPv4

### Domain 🗄️
- Storage Service: Amazon S3 (or EFS if required)

### Configure Additional Details ⚙️
- Keep defaults unless specific needs arise

### Add User 👤
- Username: Enter a name for your user  
- Attach a Role 🛡️  
  - Create a new IAM role:
    - Trusted entity type: AWS Service  
    - Use case: Transfer  
    - Permissions: AmazonS3FullAccess (or custom permissions)  
    - Role name & description: Provide accordingly  
  - Select this role for your user ✅  
- Select Home Directory: Your bucket 🪣  
- Add a Public SSH Key 🔑  
  - Open PuTTYgen and click Generate  
  - Copy the public key and paste it in AWS console  
  - Save the private key locally for FileZilla 💾

---

## 💻 Step 3: FileZilla Setup for SFTP 🖥️
1. Open FileZilla  
2. Navigate: File → Site Manager  
3. Configure the connection:  
   - Protocol: SFTP 🔐  
   - Host: Transfer Family server endpoint 🌍  
   - Port: 22  
   - Logon Type: Key File 🔑  
   - Username: Same as Transfer Family user 👤  
   - Key File: Browse and select private key from PuTTYgen  
4. Click Connect ✅  
   - ⚠️ If errors occur, verify each step above  
5. Transfer Files 📂➡️☁️  
   - Drag & drop files between local machine and S3 over SFTP

---

## 💡 Tips & Tricks ✨
- 🔐 Always use SSH keys over passwords.  
- 🛡 Limit S3 bucket access using IP restrictions.  
- 📊 Test with a few small files first before large transfers.  
- 🧹 Clean up resources after testing to avoid unnecessary AWS charges.
