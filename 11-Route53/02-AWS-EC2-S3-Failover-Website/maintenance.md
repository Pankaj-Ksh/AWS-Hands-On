# 🛠 Maintenance Page (S3 Static Hosting)

This HTML file should be uploaded to the S3 bucket and used as the **secondary failover site** in Route 53.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site Under Maintenance</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background: linear-gradient(135deg, #1CB5E0 0%, #000851 100%);
            color: #fff;
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            max-width: 600px;
            background: rgba(0,0,0,0.6);
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚧 Site Under Maintenance 🚧</h1>
        <p>We’re currently performing scheduled maintenance.</p>
        <p>Please check back shortly. Thank you for your patience!</p>
    </div>
</body>
</html>

```
