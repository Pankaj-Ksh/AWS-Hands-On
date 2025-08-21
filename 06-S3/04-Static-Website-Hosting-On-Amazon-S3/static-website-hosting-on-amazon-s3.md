# 🌐 Static Website Hosting on Amazon S3

This project demonstrates how to host a **static website on Amazon S3** by uploading a simple HTML file. The process includes configuring the S3 bucket for static website hosting, setting permissions for public access, and deploying a live, serverless website accessible via a unique S3 endpoint URL.

---

## 🎯 Objective  

- **Understand S3 as a serverless web hosting platform.**  
- **Learn S3 bucket configuration and public access management.**  
- **Deploy a fully functional static website accessible on the internet.**

---

## 🏗 Architecture Overview  
- Local HTML file created and tested.  
- HTML file uploaded to **Amazon S3 bucket**.  
- Static website hosting feature enabled on the bucket.  
- Public access configured for the object.  
- Website accessed live via **S3 endpoint URL**.  

---

## 🔄 Workflow Summary  
1. Prepare and test the static website locally.  
2. Upload website files to S3.  
3. Configure S3 for static website hosting.  
   - Define **index.html** (main file).  
   - Optionally, add an **error.html** file to handle broken links or missing pages.  
4. Make the content publicly accessible.  
5. Access and verify the website using the endpoint URL.  

---

## 🛠 Steps Performed  

### **Step 1: Prepare the Website Files**  
✅ Create and verify HTML file.  
✅ Test locally before deployment.  

*Website HTML file (`serverless-ec2-start-stop-automation.html`) opened in VS Code.*
<img width="1920" alt="Website code in VS Code" src="https://github.com/user-attachments/assets/5ae55619-007e-4218-9f9d-6ced5eefea82" />  

*Local preview at `127.0.0.1` to confirm functionality before upload.*
<img width="1920" alt="Local preview of static website" src="https://github.com/user-attachments/assets/9b5b1f2b-de3d-4118-be66-945d6cd7fc76" />  

---

### **Step 2: Upload Files to S3**  
✅ Upload HTML file to S3 bucket.  
✅ Ensure object visibility for public hosting.  

*HTML file being uploaded to bucket `demobucket-2-pankaj`.*
<img width="1920" alt="Uploading HTML file to S3 bucket" src="https://github.com/user-attachments/assets/63c4d1a8-0e64-466b-ad82-6b1bf5b74400" />  

*Object successfully uploaded — highlighted option **Make public using ACL** for static hosting.*
<img width="1920" alt="Object uploaded and made public" src="https://github.com/user-attachments/assets/53799105-b1ae-494c-b962-c83426d26e57" />  

---

### **Step 3: Configure Static Website Hosting**  
✅ Enable **Static Website Hosting** in S3.  
✅ Set **index document** and optional **error document**.  

*Configuration panel: Static hosting enabled, index document set to `serverless-ec2-start-stop-automation.html`. Option available to add `error.html`.*
<img width="1920" alt="Static website hosting configuration" src="https://github.com/user-attachments/assets/ed3829f8-e17c-4f5c-8a85-42c6f782cdf3" />  

*Hosting enabled successfully with generated S3 endpoint URL.*
<img width="1920" alt="Static website hosting enabled" src="https://github.com/user-attachments/assets/2fbfe105-bb74-4c2e-999b-16cdc5c2b676" />  

---

### **Step 4: Access the Live Website**  
✅ Confirm website deployment using endpoint URL.  

<img width="1920" alt="Live static website accessed via S3 endpoint" src="https://github.com/user-attachments/assets/667663d0-d329-40ee-9e18-7076689b5b75" />  


---

## ⚠️ Issues Faced  
- Needed to manually configure **ACLs/permissions** to allow public access.  
- Endpoint sometimes cached; required refreshing to see changes.  

---

## ✅ Outcome  
- Static website successfully deployed on **Amazon S3**.  
- Publicly accessible via unique S3 endpoint URL.  
- Learned the importance of adding **error.html** for broken links and invalid paths.  

---

## 📚 Key Learnings & Observations  
- **S3 as Hosting Platform**: S3 can host static websites in a cost-efficient way.  
- **Bucket Configuration**: Key step is enabling static website hosting and setting index documents.  
- **Error Handling**: You can configure an **error.html** page to handle 404 errors gracefully.  
- **Public Access**: Files must be explicitly made public (ACL or bucket policy).  
- **Verification**: Final step is checking the live website using endpoint.  

---

## 🌍 Real-World Use Case  
- Hosting **personal portfolios**, **company landing pages**, or **documentation** without needing a traditional web server.  
- Error page (`error.html`) can guide users back to the main site, improving user experience.  
- Ideal for **serverless architecture** use cases where only static content is required.  

---

## 🏷️ Tags  
`AWS` `S3` `Static Website Hosting` `Cloud` `DevOps` `Serverless`  

---

## 💡 Tips  
- Always **test locally** before uploading to S3.  
- For production use, prefer **bucket policies** over ACLs for public access.  
- Configure both **index.html** and **error.html** for better navigation and error handling.  
- Consider integrating with **CloudFront** for better performance and HTTPS support.
