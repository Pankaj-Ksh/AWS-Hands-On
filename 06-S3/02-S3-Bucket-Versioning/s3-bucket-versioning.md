# 🗂️📦🔄 S3 Bucket Versioning Hands-On

*A hands-on project demonstrating how to enable and manage object versioning in an Amazon S3 bucket.*

---

## 🎯 Objective
- Understand the concept of **S3 Bucket Versioning**.
- Learn how to **enable versioning** on an existing bucket.
- Observe how uploading a new file with the same name creates a new **object version**.
- Practice **deleting a specific object version** and understanding the **delete marker** concept.

---

## 🏗 Architecture Overview
This project uses **Amazon S3** to demonstrate object versioning, a feature that helps preserve, retrieve, and restore every version of an object stored in a bucket.

- **S3 Bucket (`demobucket-1-pankaj`)** → The central storage unit for our objects.
- **Versioning** → A feature enabled on the bucket to keep multiple variants of objects.

---

## 🔄 Workflow Summary
1. Start with a bucket that has versioning disabled and an existing object.
2. Enable Bucket Versioning.
3. Upload a new object with the same name as an existing one to create a new version.
4. View the different versions of the object.
5. Delete a specific object, and observe the creation of a **delete marker**.
6. Restore the object by deleting the delete marker.

---

## 🛠 Steps Performed

### 1️⃣ Start with Versioning Disabled and Upload an Object

Initially, our bucket (`demobucket-1-pankaj`) has **Bucket Versioning** set to `Disabled`. We upload an object, `ZC1pbWFnZSSQcQc.jpg`, to the bucket.

![Screenshot showing the Bucket Versioning disabled setting](https://github.com/user-attachments/assets/6813ab4c-3a4a-4a70-b11c-656f3ae088bc)

### 2️⃣ Enable Bucket Versioning

We navigate to the bucket's **Properties** tab and enable **Bucket Versioning**. This is the key step that allows S3 to keep track of multiple versions of the same object.

![Screenshot showing the "Edit Bucket Versioning" page](https://github.com/user-attachments/assets/0541f10b-f8f4-4bec-81f8-8e2186b84559)

### 3️⃣ Upload a New Version of an Object

We upload a new object named `Audi.jpg`. This is the first version of this file. Then, we upload another `Audi.jpg` with the same name. Because versioning is now enabled, S3 doesn't overwrite the first file. Instead, it creates a new version, giving each a unique **Version ID**. The latest version is shown by default.

![Screenshot showing the file upload dialog](https://github.com/user-attachments/assets/b5ce46fc-962a-44e5-a178-e9298b8a68a3)

![Screenshot showing multiple versions of the same object in the bucket](https://github.com/user-attachments/assets/4da431f2-f871-457f-b865-a143504f1268)

### 4️⃣ Understand and Delete with Delete Markers

When you delete an object in a versioned bucket, S3 doesn't permanently remove it. Instead, it places a **delete marker** on the object. This marker becomes the current version of the object, effectively hiding all previous versions. This protects your data from accidental deletion, as you can simply delete the marker to restore the previous version. The screenshots below show this process in action.

![Screenshot showing the object deletion screen](https://github.com/user-attachments/assets/95744432-14fd-441e-bdb7-51d3fa1c6d2c)

![Screenshot showing a delete marker for an object](https://github.com/user-attachments/assets/bdd423b3-a7bf-44ea-b035-8d94a5e15869)

To permanently remove an object, you must explicitly delete its specific version.

---

## ⚠️ Issues Faced
- **Confusing File Duplication**: It was initially confusing to see multiple files with the same name. This was clarified by understanding that each is a unique version with its own Version ID.
- **Permanent Deletion**: Understanding that deleting an object when versioning is enabled only adds a **delete marker** was an important learning. To permanently delete it, you must specifically delete the object's version.

---

## ✅ Outcome
- Successfully enabled **Bucket Versioning** and observed its effects.
- Learned how S3 handles object overwrites when versioning is enabled.
- Practiced managing and **permanently deleting specific object versions**, as well as understanding how a **delete marker** can be used for recovery.

---

## 📚 Key Learnings & Observations
- **Versioning** is a critical feature for data protection, allowing for easy recovery from accidental deletions or overwrites.
- By default, S3 buckets are **not versioned**. You must manually enable it.
- When an object is deleted in a versioned bucket, a **delete marker** is created. To permanently delete the object, you must delete the marker and all versions.
- **Versioning** helps maintain a complete history of your data.

---

## 🌍 Real-World Use Case
- **Data Backup and Recovery**: Protecting critical data from accidental or malicious deletion.
- **Application Rollbacks**: Allowing developers to revert to a previous version of a file or code deployed to S3.
- **Data Auditing**: Maintaining a historical record of all changes to objects.

---

## 🏷 Tags
`AWS` `S3` `Versioning` `Cloud` `Storage` `Data Management`

---

## 💡 Tips
- **Enable versioning on mission-critical buckets** for data protection.
- To manage versioning costs, implement a **lifecycle policy** to automatically transition or expire older versions.
- Be careful with **permanent deletion**; it cannot be undone.
