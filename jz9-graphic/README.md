# JZ9 Graphic Prompt — AI Visual Architecture v10.1

> Powered by **Google Gemini 2.5 Flash** + **Imagen 4.0**  
> Deployed on **Vercel** with secure API key via Environment Variables

---

## 📁 Project Structure

```
jz9-graphic/
├── public/
│   └── index.html       ← Main UI
├── api/
│   ├── generate.js      ← Proxy: Gemini text generation
│   └── imagen.js        ← Proxy: Imagen image generation
├── vercel.json
├── package.json
└── README.md
```

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1 — Create GitHub Repository
1. ไปที่ [github.com/new](https://github.com/new)
2. ตั้งชื่อ repo เช่น `jz9-graphic`
3. ตั้งเป็น **Private** (แนะนำ)
4. คลิก **Create repository**

### Step 2 — Upload Files
```bash
git init
git add .
git commit -m "JZ9 Graphic v10.1 — Vercel Edition"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jz9-graphic.git
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. ไปที่ [vercel.com](https://vercel.com) → Sign up/Login ด้วย GitHub
2. คลิก **New Project** → Import repo `jz9-graphic`
3. คลิก **Deploy** (ยังไม่ต้องแก้อะไร)

### Step 4 — Add API Key (สำคัญมาก!)
1. ใน Vercel Dashboard → ไปที่ Project → **Settings** → **Environment Variables**
2. เพิ่ม:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** `ใส่ Gemini API Key ของคุณที่นี่`
   - **Environment:** Production, Preview, Development ✅ ทั้งหมด
3. คลิก **Save**
4. ไปที่ **Deployments** → คลิก **Redeploy** (เพื่อให้ key มีผล)

---

## 🔑 รับ Gemini API Key

1. ไปที่ [aistudio.google.com](https://aistudio.google.com)
2. คลิก **Get API Key** → **Create API Key**
3. Copy key มาใส่ใน Vercel Environment Variable

> ⚠️ หมายเหตุ: Imagen 4.0 ต้องใช้ Google Cloud Project ที่เปิดใช้ Vertex AI หรือ Gemini API tier ที่รองรับ
> ตรวจสอบได้ที่: [ai.google.dev/gemini-api/docs/imagen](https://ai.google.dev/gemini-api/docs/imagen)

---

## ✅ Features
- 🔒 API Key ซ่อนอยู่ใน Vercel server ไม่ expose ใน source code
- ⚡ Gemini 2.5 Flash สำหรับ prompt generation
- 🎨 Imagen 4.0 สำหรับ image generation
- 💾 Export/Import CSV
- 📥 Download ภาพที่ generate ได้
- 📋 Session history
