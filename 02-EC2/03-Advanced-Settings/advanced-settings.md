# ⚙️ AWS EC2: Additional Configuration Settings Hands-On

This hands-on task explores the **"Advanced Settings" section while launching an EC2 instance** on AWS. The goal is to understand the various additional options available — including **instance recovery, shutdown behavior, termination protection, hibernation, monitoring**, and more — and test how enabling certain settings affects instance behavior and launch validation.

---

## 🎯 Objective

- 🔍 Explore **Additional Configuration Settings** available during EC2 launch
- 🔐 Understand the purpose of settings like:
  - Auto-recovery
  - Shutdown behavior
  - Hibernation
  - Termination/Stop protection
  - Monitoring and placement group
- 🚫 Test what happens when **Stop - Hibernate** behavior is enabled without fulfilling required preconditions

---

## 🔧 Steps Performed

### 🧭 Step 1: Observing Advanced Settings

While launching a new **EC2 instance**, I scrolled down to the **"Advanced Settings"** or **"Additional Configuration"** section and noticed the following options:

- ✅ Instance Auto-Recovery  
- ✅ Shutdown Behavior  
- ✅ Stop - Hibernate Behavior  
- ✅ Termination Protection  
- ✅ Stop Protection  
- ✅ Detailed CloudWatch Monitoring  
- ✅ Credit Specification  
- ✅ Placement Group and Other Options

📸 _Screenshot: Additional configuration settings panel during instance launch_
<img width="1920" height="922" alt="Screenshot (553)" src="https://github.com/user-attachments/assets/72d28edb-3d82-480d-a98c-b3da109d1f4b" />

These settings help define how the EC2 behaves during shutdowns, restarts, termination, and under specific hardware or monitoring requirements.

---

### ⚠️ Step 2: Attempting to Enable Hibernation

1. Selected the **Stop - Hibernate** behavior in the additional configuration section
2. Attempted to launch the instance
3. AWS displayed the following **error message**:

📸 _Screenshot: Launch error for enabling hibernation without encryption_
<img width="1920" height="929" alt="Screenshot (554)" src="https://github.com/user-attachments/assets/1fbf7c7e-8fe4-4aa1-a626-d7eb02bf8281" />

This indicates that **hibernation requires root volume encryption**, and the launch cannot proceed unless that requirement is met.

---

## 📘 Importance of Each Configuration Option

| Option                     | Purpose & Importance                                                                 |
|---------------------------|----------------------------------------------------------------------------------------|
| ✅ Instance Auto-Recovery | Automatically recover a crashed EC2 instance using AWS status checks. Useful for HA. |
| 🔄 Shutdown Behavior       | Choose whether instance **stops** or **terminates** on OS-level shutdown.            |
| 💤 Stop - Hibernate        | Saves in-memory state. Requires encryption. Great for fast startup needs.             |
| 🔒 Termination Protection  | Prevents accidental instance deletion. Recommended for critical systems.              |
| 🛑 Stop Protection         | Prevents stopping the instance accidentally.                                           |
| 📊 CloudWatch Monitoring   | Enables detailed metrics (1-min granularity). Useful for performance tracking. But chargeable        |
| ⚙️ Credit Specification    | For burstable instances. Choose between standard/unlimited credit behavior.  |
| 🧩 Placement Group         | A placement group in AWS is a way to place your EC2 instances close to each other in the cloud, to get better network performance or low latency between them.  |

---

## 🌍 Real-World Relevance

- These options are **critical for configuring resilient and production-ready EC2 environments**
- Settings like **termination protection, auto-recovery**, and **CloudWatch monitoring** are essential in professional cloud deployments
- **Hibernation** is used in environments where fast resume is needed without full reboot (e.g., ML training, stateful apps)
- Misconfigurations can cause **launch failures**, as seen with hibernation and unencrypted volumes

---

## 🏷️ Tags

`AWS` `EC2` `Advanced Settings` `Auto-Recovery` `Shutdown Behavior` `Hibernation` `Termination Protection` `Monitoring` `Cloud Computing` `Hands-On` `Stop Protection`

---

💡 **TIP:** Always review advanced settings and documentation before enabling optional behaviors like hibernation or placement groups — they often come with **specific preconditions or limitations**.

---
