# ☁️ AWS CloudWatch: Monitoring Linux EC2 Instances 🐧

An comprehensive hands-on guide to setting up CloudWatch Logs and Custom Metrics on a Linux EC2 instance. This project demonstrates how to effectively monitor your EC2 instances by collecting system logs and custom performance metrics, providing valuable insights into your application and infrastructure health.

---

## 🎯 Objective

This hands-on exercise aims to achieve the following:

* Configure an **EC2 instance** to send system logs to **CloudWatch Logs**. 📝
* Set up the **CloudWatch Agent** to collect custom metrics (CPU, Memory, Disk) from the EC2 instance. 📈
* Visualize collected metrics in a **CloudWatch Dashboard**. 📊
* Understand and troubleshoot common issues during the setup process. 🔍

---

## 🚀 Steps Performed

### First Hands-On: CloudWatch Logs Setup on EC2 Instance

This section details the steps to configure your EC2 instance to send `/var/log/messages` to CloudWatch Logs.

1.  **Create IAM Role for EC2 Instance** 🔑
    
    We start by creating an **IAM role** that the EC2 instance will assume. This role grants the necessary permissions for the CloudWatch Agent to interact with CloudWatch services.
    
    <img width="1920" height="936" alt="1" src="https://github.com/user-attachments/assets/03478040-5057-46db-b95c-56f99ccbacd4" />

3.  **Create Custom Policy for CloudWatch Access** 📄
    
    A custom IAM policy is created with specific permissions required for logging and metric collection.
    
    ```json
    {
        "Effect": "Allow",
        "Action": [
            "cloudwatch:PutMetricData",
            "ec2:DescribeTags",
            "ec2:DescribeInstances",
            "logs:CreateLogGroup",
            "logs:CreateLogStream",
            "logs:PutLogEvents",
            "logs:DescribeLogStreams",
            "logs:DescribeLogGroups"
        ],
        "Resource": "*"
    }
    ```
    <img width="1920" height="932" alt="3" src="https://github.com/user-attachments/assets/f6ecd732-091c-4c92-a3bd-1e5cfae8b7c8" />

4.  **Attach Policy to IAM Role** 🔗
    
    The newly created policy is then attached to the IAM role.
    <img width="1920" height="938" alt="4" src="https://github.com/user-attachments/assets/6f408715-90f1-411f-b87b-e7388079a633" />
    
5.  **Launch EC2 Instance and Modify IAM Role** ⚙️
    
    Launch a new EC2 instance (or use an existing one) and attach the created IAM role to it. This can be done during launch or by modifying an existing instance's IAM role (`Actions > Security > Modify IAM Role`).
    
    <img width="1920" height="934" alt="5" src="https://github.com/user-attachments/assets/a26c13f1-5ea9-4dd8-88f5-dcd6401e7ba4" />
    
6.  **Install CloudWatch Agent** 💻
    
    Connect to your EC2 instance via SSH and elevate to root privileges:
    
    ```bash
    sudo -s
    ```
    
    Initially, an attempt to install `awslogs` was made:
    
    ```bash
    yum install -y awslogs
    ```
    
    **❌ Problem Encountered:**
    
    ```
    No match for argument: awslogs
    Error: Unable to find a match: awslogs
    ```
    
    This error indicates that the Amazon Linux AMI is likely Amazon Linux 2023 (AL2023) or a newer version where `awslogs` is no longer in the default repositories.
    <img width="1920" height="1003" alt="6" src="https://github.com/user-attachments/assets/a296ccf7-dc1d-470f-950b-92dbc2fd09c2" />

    
    **✅ Solution:** Install the latest CloudWatch Agent.
    
    ```bash
    sudo yum install -y amazon-cloudwatch-agent
    ```
    
8.  **Check for `/var/log/messages`** 📁
    
    Verify if `/var/log/messages` exists on your system.
    
    ```bash
    ls -l /var/log/messages
    ```
    
    * **Case A: If `/var/log/messages` DOES NOT EXIST:** 🚫
        
        You need to install and start `rsyslog` to generate this log file.
        
        ```bash
        sudo yum install -y rsyslog
        sudo systemctl start rsyslog
        sudo systemctl enable rsyslog
        ```
        
        Wait 5-10 seconds and recheck:
        
        ```bash
        ls -l /var/log/messages
        ```
    * **Case B: If `/var/log/messages` EXISTS ALREADY:** ✅
        
        Skip `rsyslog` installation and proceed to the next step.
    
9.  **Create CloudWatch Agent Config for Logs** 📝
    
    Create or edit the CloudWatch Agent configuration file to specify which logs to collect and where to send them.
    
    ```bash
    sudo vi /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json
    ```
    
    Paste the following JSON configuration:
    
    ```json
    {
      "logs": {
        "logs_collected": {
          "files": {
            "collect_list": [
              {
                "file_path": "/var/log/messages",
                "log_group_name": "/ec2/var/log/messages",
                "log_stream_name": "{instance_id}"
              }
            ]
          }
        }
      }
    }
    ```
     <img width="1920" height="931" alt="16" src="https://github.com/user-attachments/assets/64a23cde-45d4-44aa-b797-e08ea9dd74e7" />
    
10.  **Start the CloudWatch Agent with Log Config** ▶️
    
    Apply the configuration and start the CloudWatch Agent.
    
    ```bash
    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
    -a fetch-config \
    -m ec2 \
    -c file:/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json \
    -s
    ```
    
11.  **Confirm Agent is Running** ✅
    
    Verify the status of the CloudWatch Agent.
    
    ```bash
    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a status -m ec2
    ```
    
    This command should show the agent running and indicate that it's collecting logs.
    
11. **Verify Log Groups in CloudWatch Console** 🌳
    
    Navigate to the CloudWatch console. You should see new log groups created, such as `/ec2/var/log/messages` and potentially `/ec2/var/log/secure` if other logs are being collected by default.
    
    <img width="1920" height="911" alt="17" src="https://github.com/user-attachments/assets/c9b5000a-b74d-4393-ab78-aaa0e331fb4e" />
    
12. **Verify Log Events** 📜
    
    Within the log group, you should see log streams corresponding to your instance ID, with log events being ingested.
    
    <img width="1920" height="911" alt="18" src="https://github.com/user-attachments/assets/e44e5de3-70f9-402b-b60f-17054f9f7f93" />
    
13. **Explore Log Insights** 💡
    
    Use CloudWatch Log Insights to query and analyze your logs.
    
    <img width="1920" height="941" alt="19" src="https://github.com/user-attachments/assets/60f2c1d7-2a28-4e18-9992-38061016830f" />

---

### Second Hands-On: CloudWatch Custom Metrics Setup

This section details how to configure the CloudWatch Agent to collect custom system-level metrics like CPU, Memory, and Disk usage.

1.  **Install the CloudWatch Agent (if not already done)** 📥
    
    If you haven't installed the agent during the logs setup, do so now:
    
    ```bash
    sudo yum install -y amazon-cloudwatch-agent
    ```
    
2.  **Create the Agent Configuration File for Metrics** ⚙️
    
    There are two ways to create the metrics configuration:
    
    * **Option A: Use the wizard (Recommended for interactive setup)** 🧙‍♂️
        
        ```bash
        sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-config-wizard
        ```
        
        Follow the prompts to select which metrics to collect (CPU, Memory, Disk), collection intervals, etc. The wizard will save the configuration to `/opt/aws/amazon-cloudwatch-agent/bin/config.json`.
    <img width="1920" height="932" alt="7" src="https://github.com/user-attachments/assets/db8ca418-2728-43e2-97c0-d898165b964b" />
        
    * **Option B: Use a custom config JSON (Faster for pre-defined metrics)** ⚡
        
        Create or edit the configuration file:
        
        ```bash
        sudo vi /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json
        ```
        
        Paste the following JSON for common metrics:
        
        ```json
        {
          "metrics": {
            "metrics_collected": {
              "mem": {
                "measurement": [
                  "mem_used_percent"
                ],
                "metrics_collection_interval": 60
              },
              "cpu": {
                "measurement": [
                  "cpu_usage_idle",
                  "cpu_usage_iowait"
                ],
                "metrics_collection_interval": 60,
                "totalcpu": true
              },
              "disk": {
                "measurement": [
                  "used_percent"
                ],
                "metrics_collection_interval": 60,
                "resources": [
                  "/"
                ]
              }
            },
            "append_dimensions": {
              "InstanceId": "${aws:InstanceId}"
            }
          }
        }
        ```
        
3.  **Apply & Start the Agent Using Metrics Config** ▶️
    
    Apply the new metrics configuration and restart the CloudWatch Agent.
    
    ```bash
    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
    -a fetch-config \
    -m ec2 \
    -c file:/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json \
    -s
    ```
    
4.  **Check Agent Status** ✅
    
    Confirm that the agent is running and collecting both logs and metrics.
    
    ```bash
    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a status -m ec2
    ```
    <img width="1920" height="931" alt="9" src="https://github.com/user-attachments/assets/ba7eed93-8650-4f7b-8de3-9b29656173af" />
    
5.  **View Metrics in CloudWatch Console** 👀
    
    Navigate to the CloudWatch console: `CloudWatch → Metrics`.
    
    You should find new custom metrics under the `"Custom/EC2"` namespace. Look for metrics related to Memory, CPU, and Disk.
    
    <img width="1920" height="933" alt="10" src="https://github.com/user-attachments/assets/6549cf34-c3f7-493b-bdd1-79a73c0dccb5" />

    <img width="1920" height="929" alt="11" src="https://github.com/user-attachments/assets/975d40ee-1355-4b6b-9bee-4f74e2a52755" />

    <img width="1920" height="916" alt="12" src="https://github.com/user-attachments/assets/01ff3152-201f-4c94-b66c-04b95c0d6f67" />
    
7.  **Create CloudWatch Dashboard** 📊
    
    Create a new CloudWatch Dashboard to visualize the collected metrics. Add widgets for CPU utilization, Memory usage, and Disk usage.
    
    <img width="1920" height="932" alt="13" src="https://github.com/user-attachments/assets/f7841127-f653-46e7-a266-85eb480d462f" />
    
    You can refresh the dashboard to see the latest data flowing in. 🔄
    
    <img width="1920" height="915" alt="14" src="https://github.com/user-attachments/assets/d6dcf851-4093-4609-8645-362931f4e1e5" />

---

## 🚧 Issues Faced

1.  **`awslogs` Not Found:** The primary issue encountered was the `No match for argument: awslogs` error when trying to install the older `awslogs` package on Amazon Linux 2023. This highlighted the need to use the more modern `amazon-cloudwatch-agent`. 🚫📦
2.  **Missing `/var/log/messages`:** On some fresh EC2 instances, the `/var/log/messages` file might not be present or actively generated. This required the installation and activation of `rsyslog` to ensure the log file exists and is populated. 📁❌
3.  **IAM Permissions:** Incorrect or insufficient IAM permissions on the EC2 role can prevent the CloudWatch Agent from publishing logs or metrics. Ensuring the policy includes `logs:PutLogEvents`, `logs:CreateLogGroup`, `logs:CreateLogStream`, and `cloudwatch:PutMetricData` is crucial. 🔒
4.  **Agent Configuration Syntax:** Errors in the JSON configuration for the CloudWatch Agent can lead to the agent failing to start or collect data. Double-checking JSON syntax and file paths is important. ✍️
5.  **Troubleshooting Agent Status:** Knowing the `amazon-cloudwatch-agent-ctl -a status -m ec2` command was vital for diagnosing why logs or metrics might not be appearing in CloudWatch. ❓

---

## ✅ Outcome

Upon successful completion of this hands-on, the following was verified:

* **Logs Ingestion:** System logs from `/var/log/messages` on the EC2 instance are successfully being sent to **CloudWatch Logs**, organized into a dedicated log group (`/ec2/var/log/messages`) with log streams per instance. 🚀
* **Custom Metrics Collection:** Custom metrics for CPU utilization (`cpu_usage_idle`, `cpu_usage_iowait`), Memory usage (`mem_used_percent`), and Disk usage (`used_percent`) are being collected by the **CloudWatch Agent** and published to the `Custom/EC2` namespace in **CloudWatch Metrics**. 📈
* **Centralized Monitoring:** A **CloudWatch Dashboard** was created, providing a consolidated view of the collected custom metrics, allowing for easy monitoring and visualization of the EC2 instance's performance. 📊
* **Troubleshooting Proficiency:** Gained practical experience in identifying and resolving common issues related to CloudWatch Agent setup on Linux, specifically concerning package availability and log generation. 🛠️

---

## 🧠 Key Learnings and Observations

* **CloudWatch Agent is the Future:** The `amazon-cloudwatch-agent` is the standard and recommended way to collect both logs and metrics from EC2 instances, especially on newer Amazon Linux AMIs. ✨
* **IAM is Crucial:** Proper IAM permissions are the bedrock of any AWS integration. Misconfigured roles are a common cause of issues. 🔐
* **`/var/log/messages` Dependency:** The reliance on `rsyslog` for `/var/log/messages` highlights that basic Linux system services play a role in CloudWatch logging. 🐧
* **Configuration Flexibility:** The CloudWatch Agent offers flexibility in configuration, either through an interactive wizard for guided setup or direct JSON files for automation and precise control. 🔄
* **Dashboarding for Insights:** CloudWatch Dashboards are powerful tools for aggregating and visualizing data, transforming raw metrics and logs into actionable insights. 💡
* **Iterative Troubleshooting:** Setting up monitoring often involves an iterative process of configuring, testing, checking agent status, and verifying in the AWS console. 🔬

---

## 🌐 Real-World Use

This hands-on is directly applicable to real-world scenarios for:

* **Application Monitoring:** Collecting application logs from EC2 instances for centralized analysis and debugging. 🐞
* **Infrastructure Health Monitoring:** Tracking key system metrics (CPU, Memory, Disk) to understand resource utilization, identify bottlenecks, and prevent performance issues. 🩺
* **Alerting and Automation:** Leveraging CloudWatch metrics to set up alarms for critical thresholds (e.g., high CPU usage, low disk space) and trigger automated actions. 🚨
* **Compliance and Auditing:** Archiving logs in CloudWatch for compliance requirements and security auditing. 📜
* **Cost Optimization:** Identifying underutilized resources by monitoring metrics. 💰

---

## 🏷️ Tags

`AWS` `CloudWatch` `EC2` `Linux` `Monitoring` `Logs` `Metrics` `IAM` `DevOps` `SystemAdministration` `HandsOn`

---

## 💡 Tips

* **Start Simple:** Begin with basic log collection and a few key metrics before adding more complex configurations. ▶️
* **Validate JSON:** Always validate your JSON configuration files using an online validator to catch syntax errors early. ✅
* **Check Agent Logs:** If the CloudWatch Agent isn't working as expected, check its own logs for errors. These are typically located at `/opt/aws/amazon-cloudwatch-agent/logs/amazon-cloudwatch-agent.log`. 📄
* **Least Privilege:** Always adhere to the principle of least privilege when creating IAM policies. Grant only the necessary permissions. 🔒
* **Instance Metadata:** Use `${aws:InstanceId}` in your log stream names to automatically incorporate the EC2 instance ID, making it easier to identify logs from specific instances. 🆔
* **CloudFormation/Terraform:** For production environments, consider automating the CloudWatch Agent setup using Infrastructure as Code tools like AWS CloudFormation or Terraform. 🏗️
