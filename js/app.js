/**
* 浙江海洋大学 (ZJOU) 学习资料共享站 - 核心业务逻辑
* 三大核心分类：1. 往年期末试卷  2. 课程资料  3. 优秀学长案例
*/

// DOM 元素
const tabExamBtn = document.getElementById('tabExamBtn');
const tabCourseBtn = document.getElementById('tabCourseBtn');
const tabSeniorBtn = document.getElementById('tabSeniorBtn');
const toastContainer = document.getElementById('toastContainer');

// ================= 初始化 =================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});

// 主题初始化
function initTheme() {
  const saved = localStorage.getItem('zjou_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
}

// Toast 轻提示
function showToast(msg) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2000);
}

