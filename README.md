# School Appraisal Frontend

## Local Development

Create a local environment file:

```powershell
Copy-Item .env.example .env
```

Install dependencies and start Vite:

```powershell
npm install
npm run dev
```

## Deploying on Linux Virtual Machine

The included `Dockerfile` builds the Vite application and serves it via Nginx on your Linux VM.

Build and start the container on your VM:

```bash
docker build -t school-appraisal-frontend .
docker run -d --name school-appraisal-frontend --net=host school-appraisal-frontend
```

## Attachment URL Resolution on VM

The frontend handles attachment files via relative local path equivalents (`/uploads/...`), serving files directly from the VM's backend `/uploads` endpoint.
