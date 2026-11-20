# URBAPULSE — Smart City Heat & Air-Quality Safety System

> **"Don't just take the fastest route, take the healthiest one!"**

**URBAPULSE** is a solar-powered street upgrade kit connected to **Better Maps**, a health-first navigation website. Built by **me** (MVN-17, Sector-17, Faridabad), it helps everyday pedestrians—whether they have a smartphone or not—avoid dangerously hot and polluted streets.

---

## Why We Built This (The Problem)
1. **Streets Turn Into Ovens:** Dark asphalt roads absorb **80–95%** of sunlight, pushing street heat past **44°C** while trapping vehicle smoke (**195 AQI**) right at breathing height.
2. **Normal Maps Ignore Your Health:** Apps like Google Maps only look for the *shortest* or *fastest* path. They will happily walk a schoolchild or senior citizen straight down a 44°C, smoke-filled main road—even when a shaded, cooler lane (**38°C / 110 AQI**) is just **2 minutes** away.
3. **Not Everyone Has a Smartphone:** Young students, elderly citizens, and daily-wage workers don't always carry a phone with mobile data. Safety signals need to exist right on the street itself.

---

## How URBAPULSE Works (3 Simple Layers)

### 1. Cooler, Solar-Powered Streets
- Light-colored buildings and white road borders reflect sunlight instead of trapping heat.
- A **6V solar panel** on the bus-stand roof powers the system off-grid and charges a **18650 battery** for cloudy days and nights.

### 2. Smart Street Hardware (Works Even Without a Phone)
We use **two small microcontrollers** so live Wi-Fi updates never slow down the street lights:
- **Live Weather & Air Station (ESP32):** Measures real-time temperature, humidity (**DHT11**), and smoke/gas (**MQ-6 / MQ-135**) tucked 1 inch under the solar roof (so direct sun doesn't fake the temperature). It shows **`SAFE AIR`** or **`ALERT!!`** on **Screen-2** and sends live data over Wi-Fi.
- **Smart Road Lights & Cooling (Arduino Nano):**
  - **Blue & Red Road LEDs:** Three corridors (**Main Road**, **School Road**, **Hut Road**) glow **Blue** when safe and turn **Red** during heatwaves, guiding walkers onto the cool Blue lane.
  - **Public Guide Screen (Screen-1) & Buzzer:** Displays simple English directions like **`TAKE: HUT ROAD`** and sounds an alert buzzer during peak heat.
  - **Water-Smart Misters:** Automatically sprays a fine cooling mist **only during peak midday heat** (and turns off afterward so no water is wasted).

### 3. Better Maps & Web Portal
Our website turns live street sensor data into tools anyone can use:
- **`maps.html` / `mobile-maps.html` (Better Maps):** Scores routes by **Distance + Temperature + AQI** instead of distance alone—cutting heat exposure by **6°C** and air pollution by **43.6%**.
- **`status.html`:** Live street temperature, humidity, and air-quality dashboard.
- **`complain.html`:** Lets citizens report broken water misters or garbage burning directly to the Municipal Corporation.
- **`model.html`:** Interactive 3D model of the Sector-17 street setup.
- **`index.html`:** Main project overview page.

---

## Who Uses It?
- **Customer:** Government / Municipal Corporations (can bolt this kit onto existing city bus stands for just a few hundred rupees per stop).
- **Real Users:** Everyday citizens—schoolchildren, senior citizens, street vendors, and daily commuters.

---

## Hardware Quick Reference
- **Board #1 (ESP32 — Wi-Fi Telemetry):** `sketch_may5a.ino` — DHT11 (`GPIO 4`), MQ-6/MQ-135 (`GPIO 34`), Screen-2 (`LCD #2`).
- **Board #2 (Arduino Nano — Street Signals & Cooling):** `sketch_may7a.ino` — Main/School/Hut Road LEDs (`D3/D5`, `D6/D9`, `D10/D11`), Screen-1 (`A4/A5`), Buzzer (`D4`), 5V Relay + Water Mister (`D7`).

---

## Team
- **Aditya**, **Vaibhav**, **Shreyansh** & **Kartik** — Modern Vidya Niketan Sr. Sec. School (MVN-17), Sector-17, Faridabad, Ha
