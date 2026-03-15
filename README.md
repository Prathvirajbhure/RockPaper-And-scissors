---

# ✊✋✌️ Rock Paper Scissors: Ultimate Edition

A polished, logic-driven implementation of the classic Rock Paper Scissors game. This project goes beyond basic DOM manipulation by featuring **persistent score tracking** and an **automated gameplay engine**.

---

## The Experience

Challenge a randomized computer opponent in a battle of wits. The game calculates outcomes in real-time and maintains your legacy across browser sessions.

### **Key Features:**

*  Auto-Play Mode: Sit back and watch the algorithms battle it out with a built-in automated loop.
*  Persistent State: Integrated with the **Web Storage API** so your win-streak survives a page refresh.
*  Smart Randomization: Utilizes mathematical flooring to ensure a truly unbiased computer opponent.
*  Dynamic UI: Real-time updates of moves using high-quality emoji assets and CSS transitions.

---

##  Game Logic & Mechanics

The core engine follows the standard circular hierarchy:

* **Rock** crushes **Scissors**
* **Scissors** cuts **Paper**
* **Paper** covers **Rock**

### **Technical Highlights:**

* **EventListener Architecture:** Clean separation of concerns between HTML structure and JS logic.
* **JSON Serialization:** Uses `JSON.parse()` and `JSON.stringify()` to manage complex score objects within `localStorage`.
* **Interval Management:** Handles the `setInterval` logic for the Auto-Play feature, including toggle states to prevent memory leaks.

---

##  Tech Stack

* **Frontend:** HTML5, CSS3 (Custom Properties & Flexbox)
* **Logic:** Vanilla JavaScript (ES6+)
* **Persistence:** Browser LocalStorage API
* **Assets:** Custom Image Icons

---

##  Project Architecture

```text
rock-paper-scissors/
├── index.html         # Document structure & UI components
├── Play-RPS.css       # Layout, animations, and game-state styling
├── Play-RPS.js        # Game engine, storage logic, and event handlers
├── icons/             # Visual assets (Rock, Paper, Scissors emojis)
└── README.md          # Documentation

```

---

##  Installation & Setup

1. **Clone the Repo:**
```bash
git clone https://github.com/Prathvirajbhure/RockPaper-And-scissors.git

```


2. **Navigate & Launch:**
```bash
cd RockPaper-And-scissor
# Open index.html in your preferred browser

```



---

##  Control Reference

| Action | Function |
| --- | --- |
| **Move Selection** | Click an icon to play your turn. |
| **Reset Score** | Clears `localStorage` and resets the UI counters. |
| **Auto Play** | Toggles a 1-second gameplay loop. |

---

##  Future Roadmap

* [ ] **Advanced AI:** Implement a pattern-recognition bot that "learns" player habits.
* [ ] **Haptic Feedback:** Add vibration support for mobile devices on wins/losses.
* [ ] **Dark Mode:** A sleek, high-contrast theme toggle.
* [ ] **Global Leaderboard:** Backend integration to track high scores globally.

---

## ⭐ Support

If you find this project helpful for learning JavaScript fundamentals, give it a ⭐ on GitHub!

---
 
