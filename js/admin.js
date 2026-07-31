/* ============================================================
   PORTFOLIO ADMIN DASHBOARD CONTROLLER
   js/admin.js
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY_DATA = 'PORTFOLIO_DYNAMIC_DATA';
  const STORAGE_KEY_MSGS = 'PORTFOLIO_CONTACT_MESSAGES';
  const STORAGE_KEY_PASS = 'PORTFOLIO_ADMIN_PASSKEY';
  const DEFAULT_PASSKEY = 'admin123';

  // --- STATE ---
  let dynamicData = loadDynamicData();
  let contactMessages = loadContactMessages();
  let currentTab = 'overview';
  let editingProjectIndex = -1;
  let activeViewMsgId = null;

  // --- DOM ELEMENTS ---
  const loginModal = document.getElementById('login-modal');
  const loginForm = document.getElementById('login-form');
  const loginPassInput = document.getElementById('admin-passkey');
  const btnTogglePass = document.getElementById('btn-toggle-pass');
  const loginError = document.getElementById('login-error');
  const adminApp = document.getElementById('admin-app');
  const btnLogout = document.getElementById('btn-logout');

  const navItems = document.querySelectorAll('.nav-item');
  const tabSections = document.querySelectorAll('.tab-section');
  const pageTitle = document.getElementById('page-title');

  // Stats
  const statTotalMsgs = document.getElementById('stat-total-msgs');
  const statUnreadMsgs = document.getElementById('stat-unread-msgs');
  const statTotalProjects = document.getElementById('stat-total-projects');
  const statFeaturedProjects = document.getElementById('stat-featured-projects');
  const unreadBadge = document.getElementById('unread-badge');

  // Messages Inbox & Modal
  const messagesTbody = document.getElementById('messages-tbody');
  const msgSearch = document.getElementById('msg-search');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const recentMsgsList = document.getElementById('recent-msgs-list');

  const viewMsgModal = document.getElementById('view-msg-modal');
  const viewMsgName = document.getElementById('view-msg-name');
  const viewMsgEmail = document.getElementById('view-msg-email');
  const viewMsgDate = document.getElementById('view-msg-date');
  const viewMsgSubject = document.getElementById('view-msg-subject');
  const viewMsgBody = document.getElementById('view-msg-body');
  const btnReplyViewMsg = document.getElementById('btn-reply-view-msg');
  const btnDeleteViewMsg = document.getElementById('btn-delete-view-msg');
  const btnCloseViewMsg = document.getElementById('btn-close-view-msg');

  // Projects
  const projectsGrid = document.getElementById('projects-grid');
  const btnAddProject = document.getElementById('btn-add-project');
  const btnQuickAddProject = document.getElementById('btn-quick-add-project');
  const projectModal = document.getElementById('project-modal');
  const projectForm = document.getElementById('project-form');
  const btnCloseProjectModal = document.getElementById('btn-close-project-modal');
  const btnCancelProject = document.getElementById('btn-cancel-project');
  const projectFileInput = document.getElementById('project-file-input');
  const projectImagePreview = document.getElementById('project-image-preview');

  // Profile Editor
  const profileFileInput = document.getElementById('profile-file-input');
  const photoDropzone = document.getElementById('photo-dropzone');
  const profileImgPreview = document.getElementById('profile-img-preview');
  const sidebarAvatarImg = document.getElementById('sidebar-avatar-img');
  const btnQuickChangePhoto = document.getElementById('btn-quick-change-photo');
  const profileInfoForm = document.getElementById('profile-info-form');
  const btnResetData = document.getElementById('btn-reset-data');

  // ============================================================
  // 1. AUTHENTICATION & EYE TOGGLE
  // ============================================================
  const savedPasskey = localStorage.getItem(STORAGE_KEY_PASS) || DEFAULT_PASSKEY;

  if (btnTogglePass) {
    btnTogglePass.addEventListener('click', () => {
      const type = loginPassInput.getAttribute('type') === 'password' ? 'text' : 'password';
      loginPassInput.setAttribute('type', type);
      btnTogglePass.textContent = type === 'password' ? '👁️' : '🙈';
    });
  }

  if (sessionStorage.getItem('PORTFOLIO_ADMIN_AUTH') === 'true') {
    unlockDashboard();
  }

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const entered = loginPassInput.value.trim();
    if (entered === savedPasskey) {
      sessionStorage.setItem('PORTFOLIO_ADMIN_AUTH', 'true');
      unlockDashboard();
      showToast('✨ Welcome back to your Dashboard!');
    } else {
      loginError.textContent = 'Incorrect passkey. Please try again.';
      loginPassInput.value = '';
      loginPassInput.focus();
    }
  });

  btnLogout.addEventListener('click', () => {
    sessionStorage.removeItem('PORTFOLIO_ADMIN_AUTH');
    location.reload();
  });

  function unlockDashboard() {
    loginModal.classList.add('hidden');
    adminApp.classList.remove('hidden');
    initDashboard();
  }

  // ============================================================
  // 2. DASHBOARD INIT & TABS
  // ============================================================
  function initDashboard() {
    populateProfileForm();
    renderStats();
    renderMessages();
    renderProjects();

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        switchTab(item.getAttribute('data-tab'));
      });
    });

    document.querySelectorAll('[data-tab-jump]').forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.getAttribute('data-tab-jump'));
      });
    });
  }

  function switchTab(tabId) {
    currentTab = tabId;
    const allNav = document.querySelectorAll('.nav-item');
    const allSections = document.querySelectorAll('.tab-section');

    allNav.forEach(n => {
      n.classList.toggle('active', n.getAttribute('data-tab') === tabId);
    });

    allSections.forEach(s => {
      s.classList.toggle('active', s.id === `sec-${tabId}`);
    });

    const titles = {
      overview: 'Dashboard Overview',
      messages: 'Contact Messages Inbox',
      projects: 'Featured Projects Manager',
      profile: 'Profile & Picture Settings'
    };
    if (pageTitle) pageTitle.textContent = titles[tabId] || 'Admin Dashboard';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ============================================================
  // 3. DYNAMIC DATA HELPERS
  // ============================================================
  function loadDynamicData() {
    const raw = localStorage.getItem(STORAGE_KEY_DATA);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) {}
    }
    return {
      profileImage: CONFIG.profileImage || 'assets/images/profile.png',
      name: CONFIG.name || 'Vince Ramos Alvendia',
      title: CONFIG.title || 'Full-Stack Developer',
      phone: CONFIG.contact ? CONFIG.contact.phone : '09565908781',
      email: CONFIG.contact ? CONFIG.contact.email : 'vince.alvendia@gmail.com',
      bio: 'Passionate BSIT student and aspiring Full-Stack Developer with solid expertise in modern frontend technologies, PHP, Laravel, and MySQL database management.',
      github: CONFIG.social ? CONFIG.social.github : 'https://github.com/vinzz-yy',
      facebook: CONFIG.social ? CONFIG.social.facebook : 'https://www.facebook.com/vnce.ramosalvendia',
      linkedin: CONFIG.social ? CONFIG.social.linkedin : 'https://linkedin.com/in/vince-alvendia',
      projects: CONFIG.projects ? JSON.parse(JSON.stringify(CONFIG.projects)) : []
    };
  }

  function saveDynamicData() {
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(dynamicData));
  }

  function loadContactMessages() {
    const raw = localStorage.getItem(STORAGE_KEY_MSGS);
    if (raw) {
      try { return JSON.parse(raw); } catch (e) {}
    }
    return [
      {
        id: 'msg-1',
        name: 'Alex Morgan',
        email: 'alex.m@example.com',
        subject: 'Full-Stack Developer Opportunity',
        message: 'Hi Vince, I saw your portfolio and was thoroughly impressed by your INTAN ELYU project. We are looking for a developer with PHP/Laravel and React skills.',
        date: '2026-07-30 14:30',
        read: false
      },
      {
        id: 'msg-2',
        name: 'Sarah Jenkins',
        email: 's.jenkins@techsolutions.io',
        subject: 'Freelance Web Application Collaboration',
        message: 'Great portfolio! We have a web portal project and would love to discuss a potential collaboration.',
        date: '2026-07-29 09:15',
        read: true
      }
    ];
  }

  function saveContactMessages() {
    localStorage.setItem(STORAGE_KEY_MSGS, JSON.stringify(contactMessages));
  }

  // ============================================================
  // 4. STATS RENDERER
  // ============================================================
  function renderStats() {
    const totalMsgs = contactMessages.length;
    const unreadMsgs = contactMessages.filter(m => !m.read).length;
    const totalProj = dynamicData.projects.length;
    const featuredProj = dynamicData.projects.filter(p => p.featured).length;

    statTotalMsgs.textContent = totalMsgs;
    statUnreadMsgs.textContent = unreadMsgs;
    statTotalProjects.textContent = totalProj;
    statFeaturedProjects.textContent = featuredProj;

    if (unreadMsgs > 0) {
      unreadBadge.textContent = unreadMsgs;
      unreadBadge.classList.remove('hidden');
    } else {
      unreadBadge.classList.add('hidden');
    }
  }

  // ============================================================
  // 5. MESSAGES INBOX & READER MODAL
  // ============================================================
  let activeMsgFilter = 'all';

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeMsgFilter = btn.getAttribute('data-filter');
      renderMessages();
    });
  });

  if (msgSearch) msgSearch.addEventListener('input', renderMessages);

  function renderMessages() {
    const query = msgSearch ? msgSearch.value.toLowerCase().trim() : '';
    let filtered = contactMessages.filter(m => {
      const matchFilter = (activeMsgFilter === 'all') || (!m.read && activeMsgFilter === 'unread');
      const matchQuery = !query ||
        m.name.toLowerCase().includes(query) ||
        m.email.toLowerCase().includes(query) ||
        m.subject.toLowerCase().includes(query) ||
        m.message.toLowerCase().includes(query);
      return matchFilter && matchQuery;
    });

    // Recent Overview
    recentMsgsList.innerHTML = '';
    const recentSample = contactMessages.slice(0, 3);
    if (recentSample.length === 0) {
      recentMsgsList.innerHTML = '<p class="text-muted" style="font-size:13px; padding:10px 0;">No messages received yet.</p>';
    } else {
      recentSample.forEach(msg => {
        const div = document.createElement('div');
        div.className = `recent-msg-item ${msg.read ? 'read' : 'unread'}`;
        div.onclick = () => openMessageModal(msg.id);
        div.innerHTML = `
          <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
            <strong style="font-size:13.5px; color:#fff;">${escapeHtml(msg.name)}</strong>
            <span style="font-size:11px; color:#94a3b8;">${msg.date}</span>
          </div>
          <p style="font-size:12px; color:#cbd5e1; margin:0; line-height:1.4;">${escapeHtml(msg.subject)}</p>
        `;
        recentMsgsList.appendChild(div);
      });
    }

    // Table Inbox
    messagesTbody.innerHTML = '';
    if (filtered.length === 0) {
      messagesTbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding:32px; color:#64748b;">
            No messages matching criteria.
          </td>
        </tr>`;
      return;
    }

    filtered.forEach(msg => {
      const tr = document.createElement('tr');
      tr.onclick = (e) => {
        if (!e.target.closest('.action-btn-wrap')) {
          openMessageModal(msg.id);
        }
      };
      tr.innerHTML = `
        <td>
          <span class="msg-status-dot ${msg.read ? 'status-read' : 'status-unread'}" title="${msg.read ? 'Read' : 'Unread'}"></span>
        </td>
        <td>
          <span class="sender-name">${escapeHtml(msg.name)}</span>
          <span class="sender-email">${escapeHtml(msg.email)}</span>
        </td>
        <td>
          <span class="msg-subject">${escapeHtml(msg.subject)}</span>
          <span class="msg-preview">${escapeHtml(msg.message)}</span>
        </td>
        <td style="font-size:12px; color:#94a3b8; white-space:nowrap;">${msg.date}</td>
        <td class="text-right action-btn-wrap" style="white-space:nowrap;">
          <button class="btn btn-sm btn-ghost" onclick="toggleReadMsg('${msg.id}')" title="${msg.read ? 'Mark Unread' : 'Mark Read'}">
            ${msg.read ? '📩' : '✔️'}
          </button>
          <a class="btn btn-sm btn-outline" href="mailto:${escapeHtml(msg.email)}?subject=Re: ${encodeURIComponent(msg.subject)}" title="Reply via Email">
            ✉️ Reply
          </a>
          <button class="btn btn-sm btn-ghost" onclick="deleteMsg('${msg.id}')" title="Delete Message" style="color:#f87171;">
            🗑️
          </button>
        </td>
      `;
      messagesTbody.appendChild(tr);
    });
  }

  function openMessageModal(msgId) {
    const msg = contactMessages.find(m => m.id === msgId);
    if (!msg) return;

    activeViewMsgId = msgId;
    msg.read = true;
    saveContactMessages();
    renderStats();
    renderMessages();

    viewMsgName.textContent = msg.name;
    viewMsgEmail.textContent = msg.email;
    viewMsgDate.textContent = msg.date;
    viewMsgSubject.textContent = msg.subject;
    viewMsgBody.textContent = msg.message;
    btnReplyViewMsg.href = `mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`;

    viewMsgModal.classList.remove('hidden');
  }

  if (btnCloseViewMsg) btnCloseViewMsg.addEventListener('click', () => viewMsgModal.classList.add('hidden'));
  if (btnDeleteViewMsg) {
    btnDeleteViewMsg.addEventListener('click', () => {
      if (activeViewMsgId) {
        deleteMsg(activeViewMsgId);
        viewMsgModal.classList.add('hidden');
      }
    });
  }

  window.toggleReadMsg = function(msgId) {
    const msg = contactMessages.find(m => m.id === msgId);
    if (msg) {
      msg.read = !msg.read;
      saveContactMessages();
      renderStats();
      renderMessages();
      showToast(msg.read ? 'Message marked as read' : 'Message marked as unread');
    }
  };

  window.deleteMsg = function(msgId) {
    if (confirm('Are you sure you want to delete this message?')) {
      contactMessages = contactMessages.filter(m => m.id !== msgId);
      saveContactMessages();
      renderStats();
      renderMessages();
      showToast('🗑️ Message deleted');
    }
  };

  // ============================================================
  // 6. FEATURED PROJECTS MANAGER & MODALS
  // ============================================================
  function renderProjects() {
    projectsGrid.innerHTML = '';
    dynamicData.projects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'project-admin-card';
      const techTagsHtml = proj.tech ? proj.tech.map(t => `<span class="proj-tag">${escapeHtml(t)}</span>`).join('') : '';

      card.innerHTML = `
        <img class="project-card-thumb" src="${proj.image}" alt="${escapeHtml(proj.title)}" />
        <div class="project-card-body">
          <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:6px;">
            <h4 class="project-card-title">${escapeHtml(proj.title)}</h4>
            ${proj.featured ? '<span class="proj-tag" style="background:rgba(16,185,129,0.2); color:#34d399;">Featured</span>' : ''}
          </div>
          <p class="project-card-desc">${escapeHtml(proj.description)}</p>
          <div class="project-card-tags">${techTagsHtml}</div>
          <div class="project-card-actions">
            <button class="btn btn-sm btn-outline" onclick="toggleFeaturedProj(${idx})">
              ${proj.featured ? '⭐ Featured' : '☆ Feature'}
            </button>
            <div>
              <button class="btn btn-sm btn-secondary" onclick="openEditProjectModal(${idx})">Edit</button>
              <button class="btn btn-sm btn-ghost" onclick="deleteProject(${idx})" style="color:#f87171;">Delete</button>
            </div>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }

  btnAddProject.addEventListener('click', openAddProjectModal);
  btnQuickAddProject.addEventListener('click', () => {
    switchTab('projects');
    openAddProjectModal();
  });

  function openAddProjectModal() {
    editingProjectIndex = -1;
    document.getElementById('modal-project-title').textContent = 'Upload New Project';
    projectForm.reset();
    projectImagePreview.src = 'assets/images/project-portfolio.png';
    projectModal.classList.remove('hidden');
  }

  window.openEditProjectModal = function(idx) {
    editingProjectIndex = idx;
    const proj = dynamicData.projects[idx];
    document.getElementById('modal-project-title').textContent = 'Edit Project';
    document.getElementById('proj-title').value = proj.title;
    document.getElementById('proj-desc').value = proj.description;
    document.getElementById('proj-tech').value = proj.tech ? proj.tech.join(', ') : '';
    document.getElementById('proj-github').value = proj.github || '';
    document.getElementById('proj-demo').value = proj.demo || '';
    document.getElementById('proj-featured').checked = !!proj.featured;
    projectImagePreview.src = proj.image || 'assets/images/project-portfolio.png';
    projectModal.classList.remove('hidden');
  };

  btnCloseProjectModal.addEventListener('click', () => projectModal.classList.add('hidden'));
  btnCancelProject.addEventListener('click', () => projectModal.classList.add('hidden'));

  projectFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => { projectImagePreview.src = evt.target.result; };
      reader.readAsDataURL(file);
    }
  });

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('proj-title').value.trim();
    const desc = document.getElementById('proj-desc').value.trim();
    const tech = document.getElementById('proj-tech').value.split(',').map(t => t.trim()).filter(Boolean);
    const github = document.getElementById('proj-github').value.trim();
    const demo = document.getElementById('proj-demo').value.trim();
    const featured = document.getElementById('proj-featured').checked;
    const image = projectImagePreview.src;

    const projObj = { title, description: desc, tech, github, demo, featured, image };

    if (editingProjectIndex >= 0) {
      dynamicData.projects[editingProjectIndex] = projObj;
      showToast('✨ Project updated successfully!');
    } else {
      dynamicData.projects.unshift(projObj);
      showToast('🚀 New project uploaded!');
    }

    saveDynamicData();
    renderStats();
    renderProjects();
    projectModal.classList.add('hidden');
  });

  window.toggleFeaturedProj = function(idx) {
    dynamicData.projects[idx].featured = !dynamicData.projects[idx].featured;
    saveDynamicData();
    renderStats();
    renderProjects();
    showToast(dynamicData.projects[idx].featured ? '⭐ Marked as Featured' : 'Unfeatured');
  };

  window.deleteProject = function(idx) {
    if (confirm('Are you sure you want to delete this project?')) {
      dynamicData.projects.splice(idx, 1);
      saveDynamicData();
      renderStats();
      renderProjects();
      showToast('🗑️ Project deleted');
    }
  };

  // ============================================================
  // 7. PROFILE PHOTO DRAG & DROP & INFO FORM
  // ============================================================
  function populateProfileForm() {
    profileImgPreview.src = dynamicData.profileImage || 'assets/images/profile.png';
    sidebarAvatarImg.src = dynamicData.profileImage || 'assets/images/profile.png';
    document.getElementById('input-full-name').value = dynamicData.name || '';
    document.getElementById('input-job-title').value = dynamicData.title || '';
    document.getElementById('input-phone').value = dynamicData.phone || '';
    document.getElementById('input-email').value = dynamicData.email || '';
    document.getElementById('input-bio').value = dynamicData.bio || '';
    document.getElementById('input-github').value = dynamicData.github || '';
    document.getElementById('input-facebook').value = dynamicData.facebook || '';
    document.getElementById('input-linkedin').value = dynamicData.linkedin || '';
  }

  // Drag and Drop Photo Dropzone
  if (photoDropzone) {
    photoDropzone.addEventListener('click', () => profileFileInput.click());

    photoDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      photoDropzone.classList.add('dragover');
    });

    photoDropzone.addEventListener('dragleave', () => {
      photoDropzone.classList.remove('dragover');
    });

    photoDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      photoDropzone.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        handleProfilePhotoUpload(file);
      }
    });
  }

  profileFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleProfilePhotoUpload(file);
  });

  function handleProfilePhotoUpload(file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      const base64Img = evt.target.result;
      profileImgPreview.src = base64Img;
      sidebarAvatarImg.src = base64Img;
      dynamicData.profileImage = base64Img;
      saveDynamicData();
      showToast('📷 Profile picture updated successfully!');
    };
    reader.readAsDataURL(file);
  }

  btnQuickChangePhoto.addEventListener('click', () => {
    switchTab('profile');
    profileFileInput.click();
  });

  profileInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    dynamicData.name = document.getElementById('input-full-name').value.trim();
    dynamicData.title = document.getElementById('input-job-title').value.trim();
    dynamicData.phone = document.getElementById('input-phone').value.trim();
    dynamicData.email = document.getElementById('input-email').value.trim();
    dynamicData.bio = document.getElementById('input-bio').value.trim();
    dynamicData.github = document.getElementById('input-github').value.trim();
    dynamicData.facebook = document.getElementById('input-facebook').value.trim();
    dynamicData.linkedin = document.getElementById('input-linkedin').value.trim();

    saveDynamicData();
    showToast('💾 Profile details saved successfully!');
  });

  btnResetData.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all dynamic data back to defaults?')) {
      localStorage.removeItem(STORAGE_KEY_DATA);
      dynamicData = loadDynamicData();
      populateProfileForm();
      renderStats();
      renderProjects();
      showToast('🔄 Dynamic data reset to defaults');
    }
  });

  // ============================================================
  // 8. TOAST NOTIFICATIONS
  // ============================================================
  function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3200);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

});
