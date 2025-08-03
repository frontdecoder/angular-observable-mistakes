# 3 Observable Mistakes Angular Devs Still Make (And How to Fix Them)

This repository contains the source code examples from my YouTube video:
**“3 Observable Mistakes Angular Devs Still Make (and How to Fix Them)”**

📺 **Watch the video here:**  
[👉 YouTube Video Link](https://www.youtube.com/@FrontDecoder)

---

## 🔍 What You’ll Learn

This video and code examples show you how to avoid 3 common RxJS mistakes in Angular:

1. **Forgetting to unsubscribe**  
   → Use `async` pipe, `takeUntil()`, or `take(1)`

2. **Nested subscriptions**  
   → Use `switchMap` or `concatMap` for cleaner, testable code

3. **Overusing Subjects**  
   → Prefer `BehaviorSubject` for shared state or `signals` in Angular 17+

---

## 📂 Project Structure

```bash
📁 src/
  └── app/
       ├── mistake1-unsubscribe/
       ├── mistake2-nested-subscribe/
       └── mistake3-overusing-subject/
