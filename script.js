const applications = [
  {
    id: "app-1",
    company: "腾讯",
    role: "产品经理培训生",
    city: "深圳",
    stage: "wishlist",
    deadline: "04/18",
    deadlineLevel: "urgent",
    badge: "待完善材料",
    nextStep: "今晚 22:00 前补齐作品集并完成网申。",
    channel: "腾讯校招官网",
    jdLink: "https://example.com/tencent-pm",
    contact: "校招 HR - 王同学",
    notes: "优先级最高，完成作品集后可以直接投递。",
    materials: ["中文简历", "作品集", "成绩单"]
  },
  {
    id: "app-2",
    company: "阿里巴巴",
    role: "商业分析实习生",
    city: "杭州",
    stage: "wishlist",
    deadline: "04/21",
    deadlineLevel: "mid",
    badge: "待完善材料",
    nextStep: "调整项目经历描述，突出数据指标。",
    channel: "阿里实习生官网",
    jdLink: "https://example.com/alibaba-analytics",
    contact: "业务侧招聘邮箱",
    notes: "适合补充策略分析方向，材料复用成本低。",
    materials: ["中文简历", "自我介绍"]
  },
  {
    id: "app-3",
    company: "京东",
    role: "用户增长运营实习生",
    city: "北京",
    stage: "wishlist",
    deadline: "04/24",
    deadlineLevel: "mid",
    badge: "待完善材料",
    nextStep: "补充增长项目复盘后完成投递。",
    channel: "系统推荐",
    jdLink: "https://example.com/jd-growth",
    contact: "系统匹配推荐",
    notes: "和当前投递偏好高度匹配，适合进入待投递池。",
    materials: ["中文简历", "作品集"]
  },
  {
    id: "app-4",
    company: "美团",
    role: "策略运营校招生",
    city: "北京",
    stage: "applied",
    deadline: "04/12",
    deadlineLevel: "mid",
    badge: "待回复",
    nextStep: "准备 04/19 笔试，复习数据分析题。",
    channel: "美团校招官网",
    jdLink: "https://example.com/meituan-strategy",
    contact: "笔试通知邮箱",
    notes: "适合补充运营方向机会，保持关注后续状态。",
    materials: ["中文简历", "问卷"]
  },
  {
    id: "app-5",
    company: "快手",
    role: "内容产品培训生",
    city: "北京",
    stage: "applied",
    deadline: "04/10",
    deadlineLevel: "mid",
    badge: "待回复",
    nextStep: "超过 7 天未更新，建议邮件跟进。",
    channel: "快手校招官网",
    jdLink: "https://example.com/kuaishou-content",
    contact: "招聘流程机器人",
    notes: "如果本周仍无回音，可考虑降低优先级。",
    materials: ["中文简历", "作品集"]
  },
  {
    id: "app-6",
    company: "拼多多",
    role: "商业分析实习生",
    city: "上海",
    stage: "applied",
    deadline: "04/20",
    deadlineLevel: "mid",
    badge: "待回复",
    nextStep: "关注站内状态更新，必要时补发邮件跟进。",
    channel: "拼多多招聘官网",
    jdLink: "https://example.com/pdd-analytics",
    contact: "招聘邮箱",
    notes: "作为分析方向补充岗位保留。",
    materials: ["中文简历", "作品集"]
  },
  {
    id: "app-7",
    company: "字节跳动",
    role: "商业化产品经理",
    city: "上海",
    stage: "interview",
    deadline: "04/18",
    deadlineLevel: "urgent",
    badge: "待一面",
    nextStep: "整理两段项目复盘，准备业务理解题。",
    channel: "字节跳动招聘官网",
    jdLink: "https://example.com/bytedance-commercial-pm",
    contact: "面试协调 HR",
    notes: "今天重点准备一面，优先级最高。",
    materials: ["中文简历", "案例题"]
  },
  {
    id: "app-8",
    company: "小红书",
    role: "社区运营",
    city: "上海",
    stage: "interview",
    deadline: "04/23",
    deadlineLevel: "mid",
    badge: "待二面",
    nextStep: "回顾社区增长项目，准备行为面试。",
    channel: "小红书校园招聘",
    jdLink: "https://example.com/xhs-community",
    contact: "招聘 coordinator",
    notes: "适合作为社区/内容方向重点岗位推进。",
    materials: ["中文简历", "作品案例"]
  },
  {
    id: "app-9",
    company: "理想汽车",
    role: "产品策划实习生",
    city: "北京",
    stage: "interview",
    deadline: "04/22",
    deadlineLevel: "mid",
    badge: "待笔试",
    nextStep: "准备 04/22 在线笔试，复习逻辑和数据题。",
    channel: "理想汽车校招官网",
    jdLink: "https://example.com/li-auto-product",
    contact: "招聘经理",
    notes: "作为产品策划方向的补充岗位。",
    materials: ["中文简历", "作品集"]
  },
  {
    id: "app-10",
    company: "网易",
    role: "游戏策划校招",
    city: "广州",
    stage: "offer",
    deadline: "04/09",
    deadlineLevel: "low",
    badge: "待决定",
    nextStep: "和导师沟通岗位发展路径，再做最终选择。",
    channel: "网易游戏校招官网",
    jdLink: "https://example.com/netease-game-planner",
    contact: "业务 HR",
    notes: "可以作为保底 offer 保留。",
    materials: ["中文简历", "笔试记录"]
  },
  {
    id: "app-11",
    company: "Bilibili",
    role: "内容运营",
    city: "上海",
    stage: "offer",
    deadline: "04/08",
    deadlineLevel: "low",
    badge: "已接受",
    nextStep: "等待正式 offer 邮件并整理对比表。",
    channel: "Bilibili 招聘官网",
    jdLink: "https://example.com/bilibili-content",
    contact: "招聘经理",
    notes: "已拿到结果，后续主要做比较和确认。",
    materials: ["中文简历", "作品集"]
  },
  {
    id: "app-12",
    company: "商汤科技",
    role: "策略运营实习生",
    city: "上海",
    stage: "offer",
    deadline: "04/15",
    deadlineLevel: "low",
    badge: "流程终止",
    nextStep: "记录终止原因，后续复盘岗位匹配度。",
    channel: "商汤招聘官网",
    jdLink: "https://example.com/sensetime-strategy",
    contact: "招聘团队",
    notes: "保留作为复盘样本，不再继续推进。",
    materials: ["中文简历", "作品集"]
  }
];

const recommendedJobs = [
  {
    id: "rec-1",
    company: "京东",
    role: "用户运营培训生",
    city: "北京",
    deadline: "04/25",
    match: "匹配度 91%",
    reason: "与你当前的产品/运营投递方向高度匹配，岗位强调增长分析和项目推进。"
  },
  {
    id: "rec-2",
    company: "滴滴",
    role: "策略分析实习生",
    city: "北京",
    deadline: "04/27",
    match: "匹配度 87%",
    reason: "适合补充策略分析方向机会池，能够复用现有数据项目材料。"
  },
  {
    id: "rec-3",
    company: "携程",
    role: "商业产品实习生",
    city: "上海",
    deadline: "04/28",
    match: "匹配度 84%",
    reason: "与当前商业化产品准备内容接近，JD 和字节岗位能力要求相似。"
  }
];

const timelineItems = [
  {
    applicationId: "app-7",
    time: "04/18 10:00",
    title: "字节跳动 一面",
    desc: "线上视频面试，提前 15 分钟检查设备。"
  },
  {
    applicationId: "app-4",
    time: "04/19 19:30",
    title: "美团 笔试",
    desc: "90 分钟，重点准备数据分析题。"
  },
  {
    applicationId: "app-1",
    time: "04/21 14:00",
    title: "腾讯 HR 面",
    desc: "整理过往实习亮点与转正意愿。"
  }
];

const boardColumns = [
  { id: "wishlist", label: "待投递", color: "#cc9232" },
  { id: "applied", label: "已投递", color: "#3768ff" },
  { id: "interview", label: "笔试/面试", color: "#f26f4d" },
  { id: "offer", label: "Offer/结果", color: "#1e9c84" }
];

const stageLabels = {
  wishlist: "待投递",
  applied: "已投递",
  interview: "笔试/面试",
  offer: "Offer/结果"
};

const badgeOptionsByStage = {
  wishlist: ["待完善材料"],
  applied: ["待回复"],
  interview: ["待笔试", "待一面", "待二面", "待三面", "待HR面", "面试完成"],
  offer: ["待决定", "已接受", "已放弃", "流程终止"]
};

const stageSortWeight = {
  wishlist: 1,
  applied: 2,
  interview: 3,
  offer: 4
};

const priorityWeight = {
  urgent: 3,
  mid: 2,
  low: 1
};

const board = document.querySelector("#board");
const tableBody = document.querySelector("#tableBody");
const tableSortButtons = [...document.querySelectorAll(".table-sort")];
const taskList = document.querySelector("#taskList");
const searchInput = document.querySelector("#searchInput");
const filterGroup = document.querySelector("#filterGroup");
const viewSwitch = document.querySelector("#viewSwitch");
const boardView = document.querySelector("#boardView");
const tableView = document.querySelector("#tableView");
const addApplicationBtn = document.querySelector("#addApplicationBtn");
const exportReportBtn = document.querySelector("#exportReportBtn");
const exportCalendarBtn = document.querySelector("#exportCalendarBtn");
const refreshRecommendedBtn = document.querySelector("#refreshRecommendedBtn");
const applicationModal = document.querySelector("#applicationModal");
const applicationForm = document.querySelector("#applicationForm");
const applicationStageSelect = applicationForm.querySelector('[name="stage"]');
const applicationBadgeSelect = document.querySelector("#applicationBadgeSelect");
const applicationCityInput = applicationForm.querySelector('[name="city"]');
const applicationDeadlineInput = applicationForm.querySelector('[name="deadline"]');
const applicationContactInput = applicationForm.querySelector('[name="contact"]');
const applicationLinkInput = applicationForm.querySelector('[name="jdLink"]');
const applicationNextStepInput = applicationForm.querySelector('[name="nextStep"]');
const closeModalBtn = document.querySelector("#closeModalBtn");
const cancelModalBtn = document.querySelector("#cancelModalBtn");
const focusUrgentBtn = document.querySelector("#focusUrgentBtn");
const applicationBoardPanel = document.querySelector("#applicationBoardPanel");
const recommendedList = document.querySelector("#recommendedList");
const timelineContainer = document.querySelector(".timeline");
const materialsPanelActions = document.querySelector("#materialsPanel");
const successToast = document.querySelector("#successToast");
const detailsDrawer = document.querySelector("#detailsDrawer");
const closeDrawerBtn = document.querySelector("#closeDrawerBtn");
const drawerEditToggleBtn = document.querySelector("#drawerEditToggleBtn");
const drawerTitle = document.querySelector("#drawerTitle");
const drawerMeta = document.querySelector("#drawerMeta");
const drawerChannel = document.querySelector("#drawerChannel");
const drawerContact = document.querySelector("#drawerContact");
const drawerLink = document.querySelector("#drawerLink");
const drawerStage = document.querySelector("#drawerStage");
const drawerBadgeView = document.querySelector("#drawerBadgeView");
const drawerPriorityView = document.querySelector("#drawerPriorityView");
const drawerNextStepView = document.querySelector("#drawerNextStepView");
const drawerNotes = document.querySelector("#drawerNotes");
const drawerOverviewView = document.querySelector("#drawerOverviewView");
const drawerOverviewEdit = document.querySelector("#drawerOverviewEdit");
const drawerStageSelect = document.querySelector("#drawerStageSelect");
const drawerDeadlineInput = document.querySelector("#drawerDeadlineInput");
const drawerBadgeSelect = document.querySelector("#drawerBadgeSelect");
const drawerPrioritySelect = document.querySelector("#drawerPrioritySelect");
const drawerContactInput = document.querySelector("#drawerContactInput");
const drawerLinkInput = document.querySelector("#drawerLinkInput");
const drawerNextStepInput = document.querySelector("#drawerNextStepInput");
const drawerNotesInput = document.querySelector("#drawerNotesInput");
const drawerActions = document.querySelector("#drawerActions");
const drawerDeleteBtn = document.querySelector("#drawerDeleteBtn");
const drawerResetBtn = document.querySelector("#drawerResetBtn");
const drawerSaveBtn = document.querySelector("#drawerSaveBtn");
const deleteConfirmModal = document.querySelector("#deleteConfirmModal");
const deleteConfirmText = document.querySelector("#deleteConfirmText");
const cancelDeleteBtn = document.querySelector("#cancelDeleteBtn");
const confirmDeleteBtn = document.querySelector("#confirmDeleteBtn");
const cardTemplate = document.querySelector("#cardTemplate");
const urgentCardTitle = document.querySelector("#urgentCardTitle");
const urgentCardDesc = document.querySelector("#urgentCardDesc");
const urgentCardDeadline = document.querySelector("#urgentCardDeadline");
const urgentCardPriority = document.querySelector("#urgentCardPriority");
const metricTotalValue = document.querySelector("#metricTotalValue");
const metricTotalDesc = document.querySelector("#metricTotalDesc");
const metricDeadlineValue = document.querySelector("#metricDeadlineValue");
const metricDeadlineDesc = document.querySelector("#metricDeadlineDesc");
const metricInterviewValue = document.querySelector("#metricInterviewValue");
const metricInterviewDesc = document.querySelector("#metricInterviewDesc");
const metricMaterialsValue = document.querySelector("#metricMaterialsValue");
const metricMaterialsDesc = document.querySelector("#metricMaterialsDesc");
const metricCards = [...document.querySelectorAll("[data-metric-filter]")];

let activeFilter = "all";
let activeView = "board";
let keyword = "";
let activeTableSort = { key: "", direction: "asc" };
let currentDrawerApplicationId = null;
let isDrawerEditMode = false;
let toastTimer = null;
let syncColumnsFrame = null;

applicationCityInput.removeAttribute("required");
applicationDeadlineInput.removeAttribute("required");
applicationNextStepInput.removeAttribute("required");

function normalizeOptionalUrl(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) {
    return "";
  }
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function dateInputToDeadline(value) {
  if (!value) {
    return "";
  }
  const parts = value.split("-");
  if (parts.length !== 3) {
    return "";
  }
  return `${parts[1]}/${parts[2]}`;
}

function deadlineToDateInput(value) {
  if (!value || !value.includes("/")) {
    return "";
  }
  const [month, day] = value.split("/");
  return `${new Date().getFullYear()}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}

function getDeadlineDate(value) {
  if (!value || !value.includes("/")) {
    return null;
  }
  const [month, day] = value.split("/").map(Number);
  return new Date(new Date().getFullYear(), month - 1, day);
}

function getDeadlineSortValue(item) {
  const date = getDeadlineDate(item.deadline);
  return date ? date.getTime() : Number.MAX_SAFE_INTEGER;
}

function getStageLabel(stage) {
  return stageLabels[stage] || stageLabels.wishlist;
}

function getPriorityMeta(item) {
  const level = item.deadlineLevel || "mid";
  if (level === "urgent") {
    return { label: "高优先", className: "high" };
  }
  if (level === "low") {
    return { label: "低优先", className: "low" };
  }
  return { label: "中优先", className: "mid" };
}

function getPriorityDisplayClass(item) {
  return `is-${getPriorityMeta(item).className}`;
}

function getStatusBadgeClass(item) {
  if (item.badge === "流程终止") {
    return "stopped";
  }
  if (item.stage === "wishlist") {
    return "attention";
  }
  if (item.stage === "applied") {
    return "applied";
  }
  if (item.stage === "interview") {
    return "interview";
  }
  return "offer";
}

function ensureApplicationShape(item, index) {
  item.id = item.id || `app-${index + 1}`;
  item.stageLabel = getStageLabel(item.stage);
  item.channel = item.channel || "校园招聘官网";
  item.jdLink = item.jdLink || "";
  item.contact = item.contact || "";
  item.notes = item.notes || "";
  item.deadline = item.deadline || "TBD";
  item.deadlineLevel = item.deadlineLevel || "mid";
  item.badge = item.badge || (badgeOptionsByStage[item.stage]?.[0] || "");
  item.nextStep = item.nextStep || "补充下一步动作";
  item.materials = Array.isArray(item.materials) ? item.materials : [];
  item.stageLabel = getStageLabel(item.stage);
}

applications.forEach(ensureApplicationShape);

function showSuccessToast(message) {
  successToast.querySelector(".toast__text").textContent = message;
  successToast.classList.add("is-visible");
  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }
  toastTimer = window.setTimeout(() => {
    successToast.classList.remove("is-visible");
  }, 2200);
}

function downloadFile(filename, content, type = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type });
  downloadBlob(filename, blob);
}

function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadExamplePdf(filename) {
  const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Count 1 /Kids [3 0 R] >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R >>
endobj
4 0 obj
<< /Length 0 >>
stream
endstream
endobj
xref
0 5
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000202 00000 n 
trailer
<< /Size 5 /Root 1 0 R >>
startxref
251
%%EOF`;

  downloadFile(filename, content, "application/pdf");
}

function downloadExampleZip(filename) {
  const emptyZipBytes = new Uint8Array([80, 75, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  downloadBlob(filename, new Blob([emptyZipBytes], { type: "application/zip" }));
}

function padCalendarNumber(value) {
  return String(value).padStart(2, "0");
}

function formatICSDate(date) {
  return `${date.getFullYear()}${padCalendarNumber(date.getMonth() + 1)}${padCalendarNumber(date.getDate())}`;
}

function formatICSDateTimeUTC(date) {
  return `${date.getUTCFullYear()}${padCalendarNumber(date.getUTCMonth() + 1)}${padCalendarNumber(date.getUTCDate())}T${padCalendarNumber(date.getUTCHours())}${padCalendarNumber(date.getUTCMinutes())}${padCalendarNumber(date.getUTCSeconds())}Z`;
}

function escapeICS(value) {
  return String(value || "")
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function parseTimelineDateTime(value) {
  if (!value || !value.includes(" ")) {
    return null;
  }

  const [datePart, timePart] = value.split(" ");
  const [month, day] = datePart.split("/").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);

  if ([month, day, hours, minutes].some((part) => Number.isNaN(part))) {
    return null;
  }

  return new Date(new Date().getFullYear(), month - 1, day, hours, minutes, 0, 0);
}

function getTimelineEventDurationMinutes(entry) {
  const match = String(entry?.desc || "").match(/(\d+)\s*分钟/);
  return match ? Number(match[1]) : 60;
}

function buildCalendarEvent({
  uid,
  summary,
  description,
  location,
  startDate,
  endDate,
  allDay = false,
  alarmMinutes = 60
}) {
  const lines = [
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatICSDateTimeUTC(new Date())}`,
    `SUMMARY:${escapeICS(summary)}`,
    `DESCRIPTION:${escapeICS(description)}`
  ];

  if (location) {
    lines.push(`LOCATION:${escapeICS(location)}`);
  }

  if (allDay) {
    lines.push(`DTSTART;VALUE=DATE:${formatICSDate(startDate)}`);
    lines.push(`DTEND;VALUE=DATE:${formatICSDate(endDate)}`);
  } else {
    lines.push(`DTSTART:${formatICSDateTimeUTC(startDate)}`);
    lines.push(`DTEND:${formatICSDateTimeUTC(endDate)}`);
  }

  if (alarmMinutes > 0) {
    lines.push(
      "BEGIN:VALARM",
      `TRIGGER:-PT${alarmMinutes}M`,
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeICS(summary)}`,
      "END:VALARM"
    );
  }

  lines.push("END:VEVENT");
  return lines.join("\r\n");
}

function buildCalendarFileContent() {
  const events = [];

  applications.forEach((item) => {
    const deadlineDate = getDeadlineDate(item.deadline);
    if (!deadlineDate || item.badge === "流程终止" || item.badge === "已放弃") {
      return;
    }

    const nextDate = new Date(deadlineDate);
    nextDate.setDate(nextDate.getDate() + 1);

    events.push(
      buildCalendarEvent({
        uid: `${item.id}-deadline@campus-job-tracker`,
        summary: `${item.company}${item.role} 截止日`,
        description: `${item.stageLabel} / ${item.badge}\n下一步：${item.nextStep}`,
        location: item.city || "",
        startDate: deadlineDate,
        endDate: nextDate,
        allDay: true,
        alarmMinutes: 18 * 60
      })
    );
  });

  timelineItems.forEach((entry) => {
    const item = applications.find((application) => application.id === entry.applicationId);
    const startDate = parseTimelineDateTime(entry.time);
    if (!item || !startDate) {
      return;
    }

    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + getTimelineEventDurationMinutes(entry));

    events.push(
      buildCalendarEvent({
        uid: `${entry.applicationId}-${formatICSDateTimeUTC(startDate)}@campus-job-tracker`,
        summary: `${item.company}${item.role} - ${entry.title}`,
        description: `${entry.desc}\n联系人：${item.contact || "未填写"}\n下一步：${item.nextStep}`,
        location: item.city || "",
        startDate,
        endDate,
        allDay: false,
        alarmMinutes: 60
      })
    );
  });

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Campus Job Tracker//Calendar Export//ZH",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:求职申请日历",
    ...events,
    "END:VCALENDAR"
  ].join("\r\n");
}

function exportCalendar() {
  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Campus Job Tracker//Example Calendar//ZH",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    "UID:example-event@campus-job-tracker",
    "DTSTAMP:20260418T090000Z",
    "DTSTART;VALUE=DATE:20260418",
    "DTEND;VALUE=DATE:20260419",
    "SUMMARY:Example Calendar Event",
    "DESCRIPTION:Example ICS file for demo export.",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  downloadFile("example.ics", content, "text/calendar;charset=utf-8");
  showSuccessToast("已导出 example.ics");
}

function populateStatusSelect(selectEl, stage, selectedValue = "") {
  const options = badgeOptionsByStage[stage] || [];
  selectEl.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "请选择";
  selectEl.appendChild(placeholder);

  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectEl.appendChild(option);
  });

  selectEl.value = selectedValue || "";
}

function syncApplicationBadgeOptions(resetValue = true) {
  populateStatusSelect(applicationBadgeSelect, applicationStageSelect.value, resetValue ? "" : applicationBadgeSelect.value);
}

function syncDrawerBadgeOptions(stage, selectedValue = "") {
  populateStatusSelect(drawerBadgeSelect, stage, selectedValue);
}

function getFilterGroups() {
  return [...document.querySelectorAll("[data-application-filter-group]")];
}

function getSearchInputs() {
  return [...document.querySelectorAll("[data-application-search]")];
}

function syncSearchInputs(rawValue = "") {
  getSearchInputs().forEach((input) => {
    if (input.value !== rawValue) {
      input.value = rawValue;
    }
  });
}

function ensureBoardFilterGroup() {
  if (!boardView || !filterGroup || document.querySelector("#boardFilterGroup")) {
    return;
  }

  filterGroup.dataset.applicationFilterGroup = "true";
  searchInput.dataset.applicationSearch = "true";

  const toolbar = document.createElement("div");
  toolbar.className = "toolbar toolbar--board";

  const boardSearchInput = searchInput.cloneNode(true);
  boardSearchInput.id = "boardSearchInput";
  boardSearchInput.dataset.applicationSearch = "true";
  boardSearchInput.value = searchInput.value;

  const boardFilterGroup = filterGroup.cloneNode(true);
  boardFilterGroup.id = "boardFilterGroup";
  boardFilterGroup.dataset.applicationFilterGroup = "true";

  toolbar.appendChild(boardSearchInput);
  toolbar.appendChild(boardFilterGroup);
  boardView.prepend(toolbar);
}

function isThisWeekDeadline(item) {
  const date = getDeadlineDate(item.deadline);
  if (!date) {
    return false;
  }

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const weekCutoff = new Date(now);
  weekCutoff.setDate(weekCutoff.getDate() + 7);

  return date >= now && date <= weekCutoff;
}

function ensureWeekFilterChip() {
  if (!filterGroup) {
    return;
  }

  getFilterGroups().forEach((group) => {
    if (group.querySelector('[data-filter="week"]')) {
      return;
    }

    const weekChip = document.createElement("button");
    weekChip.className = "chip";
    weekChip.type = "button";
    weekChip.dataset.filter = "week";
    weekChip.textContent = "本周截止";

    const allChip = group.querySelector('[data-filter="all"]');
    if (allChip?.nextSibling) {
      group.insertBefore(weekChip, allChip.nextSibling);
    } else {
      group.appendChild(weekChip);
    }
  });
}

function matchesActiveFilter(item) {
  return activeFilter === "all" || (activeFilter === "week" ? isThisWeekDeadline(item) : item.stage === activeFilter);
}

function matchesKeyword(item) {
  if (!keyword) {
    return true;
  }

  const haystack = `${item.company} ${item.role} ${item.city}`.toLowerCase();
  return haystack.includes(keyword);
}

function getVisibleItems(items) {
  return items.filter((item) => matchesActiveFilter(item) && matchesKeyword(item));
}

function applyActiveFilter(filter) {
  activeFilter = filter;
  renderBoard(applications);
  renderTable(applications);
  syncFilterUI();
}

function openTableViewWithFilter(filter) {
  ensureBoardFilterGroup();
  ensureWeekFilterChip();
  activeView = "table";
  applyActiveFilter(filter);
  syncView();
  applicationBoardPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getFilteredTableItems(items) {
  return getVisibleItems(items);
}

function getSortedTableItems(items) {
  if (!activeTableSort.key) {
    return [...items];
  }

  const direction = activeTableSort.direction === "asc" ? 1 : -1;

  return [...items].sort((left, right) => {
    let result = 0;

    if (activeTableSort.key === "deadline") {
      result = getDeadlineSortValue(left) - getDeadlineSortValue(right);
    } else if (activeTableSort.key === "stage") {
      result = (stageSortWeight[left.stage] || 0) - (stageSortWeight[right.stage] || 0);
    } else if (activeTableSort.key === "priority") {
      result = (priorityWeight[left.deadlineLevel] || 0) - (priorityWeight[right.deadlineLevel] || 0);
    }

    if (result === 0) {
      result = left.company.localeCompare(right.company, "zh-CN");
    }

    return result * direction;
  });
}

function syncTableSortUI() {
  tableSortButtons.forEach((button) => {
    const isActive = activeTableSort.key === button.dataset.sortKey;
    button.classList.toggle("is-active", isActive);
    button.dataset.sortDirection = isActive ? activeTableSort.direction : "";
  });
}

function syncFilterUI() {
  getFilterGroups().forEach((group) => {
    [...group.querySelectorAll(".chip")].forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.filter === activeFilter);
    });
  });
}

function getUrgentApplication(items) {
  return [...items].sort((left, right) => {
    const priorityDiff = (priorityWeight[right.deadlineLevel] || 0) - (priorityWeight[left.deadlineLevel] || 0);
    if (priorityDiff !== 0) {
      return priorityDiff;
    }
    return getDeadlineSortValue(left) - getDeadlineSortValue(right);
  })[0];
}

function renderHeroCard(items) {
  const urgentItem = getUrgentApplication(items);
  if (!urgentItem) {
    return;
  }

  urgentCardTitle.textContent = `${urgentItem.company}${urgentItem.role}`;
  urgentCardDesc.textContent = urgentItem.nextStep;
  urgentCardDeadline.textContent = urgentItem.deadline === "TBD" ? "DDL TBD" : `DDL ${urgentItem.deadline}`;
  urgentCardPriority.textContent = getPriorityMeta(urgentItem).label;
  urgentCardPriority.className = `pulse-card__priority ${getPriorityDisplayClass(urgentItem)}`;
}

function renderMetrics(items) {
  const total = items.length;
  const wishlistCount = items.filter((item) => item.stage === "wishlist").length;
  const interviewCount = items.filter((item) => item.stage === "interview").length;
  const thisWeekDueCount = items.filter((item) => isThisWeekDeadline(item)).length;

  metricTotalValue.textContent = String(total);
  metricTotalDesc.textContent = `${total} 个岗位正在统一管理`;
  metricDeadlineValue.textContent = String(thisWeekDueCount);
  metricDeadlineDesc.textContent = `${wishlistCount} 个岗位仍需要处理`;
  metricInterviewValue.textContent = `${Math.round((interviewCount / total) * 100)}%`;
  metricInterviewDesc.textContent = `${interviewCount} 个申请进入笔试/面试阶段`;
  metricMaterialsValue.textContent = "100%";
  metricMaterialsDesc.textContent = "4/4 份材料已完成整理";
}

function buildTaskItems(items) {
  const tasks = [];

  items.forEach((item) => {
    if (item.stage === "wishlist") {
      tasks.push({
        applicationId: item.id,
        score: (priorityWeight[item.deadlineLevel] || 0) * 10 + 20,
        statusLabel: item.badge,
        statusClass: getStatusBadgeClass(item),
        title: `${item.company} ${item.role}`,
        desc: item.deadline === "TBD" ? item.nextStep : `${item.deadline} 前需要完成投递，建议优先处理材料和网申。`,
        actionLabel: "立即处理"
      });
      return;
    }

    if (item.stage === "interview") {
      tasks.push({
        applicationId: item.id,
        score: (priorityWeight[item.deadlineLevel] || 0) * 10 + 15,
        statusLabel: item.badge,
        statusClass: getStatusBadgeClass(item),
        title: `${item.company} ${item.role}`,
        desc: item.nextStep,
        actionLabel: "查看详情"
      });
      return;
    }

    if (item.stage === "applied") {
      tasks.push({
        applicationId: item.id,
        score: 8,
        statusLabel: item.badge,
        statusClass: getStatusBadgeClass(item),
        title: `${item.company} ${item.role}`,
        desc: item.nextStep,
        actionLabel: "查看详情"
      });
    }
  });

  return tasks.sort((left, right) => right.score - left.score || left.title.localeCompare(right.title, "zh-CN"));
}

function renderTaskCenter(items) {
  const tasks = buildTaskItems(items);
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const article = document.createElement("article");
    article.className = "task-card fade-in";
    article.innerHTML = `
      <span class="task-card__rank">${index + 1}</span>
      <div class="task-card__meta">
        <span class="task-card__type ${task.statusClass}">${task.statusLabel}</span>
        <h3 class="task-card__title">${task.title}</h3>
        <p class="task-card__desc">${task.desc}</p>
      </div>
      <button class="task-card__action" data-task-action="open-detail" data-application-id="${task.applicationId}" type="button">${task.actionLabel}</button>
    `;
    taskList.appendChild(article);
  });
}

function buildTaskItems(items) {
  const actionableBadges = new Set(["待完善材料", "待决定"]);

  return items
    .filter((item) => actionableBadges.has(item.badge))
    .map((item) => {
      const deadlineSortValue = getDeadlineSortValue(item);

      return {
        applicationId: item.id,
        statusLabel: item.badge,
        statusClass: getStatusBadgeClass(item),
        title: `${item.company} ${item.role}`,
        desc: item.nextStep,
        actionLabel: "立即处理",
        priorityRank: priorityWeight[item.deadlineLevel] || 0,
        badgeRank: item.badge === "待完善材料" ? 2 : 1,
        deadlineSortValue: Number.isFinite(deadlineSortValue) ? deadlineSortValue : Number.MAX_SAFE_INTEGER
      };
    })
    .sort((left, right) => {
      if (right.priorityRank !== left.priorityRank) {
        return right.priorityRank - left.priorityRank;
      }

      if (left.deadlineSortValue !== right.deadlineSortValue) {
        return left.deadlineSortValue - right.deadlineSortValue;
      }

      if (right.badgeRank !== left.badgeRank) {
        return right.badgeRank - left.badgeRank;
      }

      return left.title.localeCompare(right.title, "zh-CN");
    });
}

function renderTaskCenter(items) {
  const tasks = buildTaskItems(items);
  taskList.innerHTML = "";

  if (!tasks.length) {
    const article = document.createElement("article");
    article.className = "task-card fade-in";
    article.innerHTML = `
      <span class="task-card__rank">-</span>
      <div class="task-card__meta">
        <span class="task-card__type offer">当前无待处理任务</span>
        <h3 class="task-card__title">所有关键申请都已处理</h3>
        <p class="task-card__desc">任务中心当前只显示待完善材料和待决定的岗位。</p>
      </div>
      <button class="task-card__action" type="button" disabled>已清空</button>
    `;
    taskList.appendChild(article);
    return;
  }

  tasks.forEach((task, index) => {
    const article = document.createElement("article");
    article.className = "task-card fade-in";
    article.innerHTML = `
      <span class="task-card__rank">${index + 1}</span>
      <div class="task-card__meta">
        <span class="task-card__type ${task.statusClass}">${task.statusLabel}</span>
        <h3 class="task-card__title">${task.title}</h3>
        <p class="task-card__desc">${task.desc}</p>
      </div>
      <button class="task-card__action" data-task-action="open-detail" data-application-id="${task.applicationId}" type="button">${task.actionLabel}</button>
    `;
    taskList.appendChild(article);
  });
}

function renderBoard(items) {
  board.innerHTML = "";
  const filteredItems = getVisibleItems(items);

  boardColumns.forEach((column) => {
    const columnItems = filteredItems.filter((item) => item.stage === column.id);
    const section = document.createElement("section");
    section.className = "board-column fade-in";
    section.innerHTML = `
      <div class="board-column__head">
        <div class="board-column__title">
          <span class="board-column__dot" style="background:${column.color};"></span>
          <span>${column.label}</span>
        </div>
        <span class="board-column__count">${columnItems.length}</span>
      </div>
      <div class="column-stack"></div>
    `;

    const stack = section.querySelector(".column-stack");

    columnItems.forEach((item) => {
      const clone = cardTemplate.content.cloneNode(true);
      const card = clone.querySelector(".job-card");
      const badgeEl = clone.querySelector(".job-card__badge");
      const priorityEl = clone.querySelector(".job-card__priority");

      card.dataset.applicationId = item.id;
      clone.querySelector(".job-card__company").textContent = item.company;
      clone.querySelector(".job-card__role").textContent = item.role;
      clone.querySelector(".job-card__role").title = item.role;
      badgeEl.textContent = item.badge;
      badgeEl.className = `job-card__badge is-${getStatusBadgeClass(item)}`;
      priorityEl.textContent = getPriorityMeta(item).label;
      priorityEl.className = `job-card__priority ${getPriorityDisplayClass(item)}`;
      clone.querySelector(".job-card__city").textContent = item.city || "TBD";
      clone.querySelector(".job-card__deadline").textContent = item.deadline === "TBD" ? "截止 TBD" : `截止 ${item.deadline}`;
      clone.querySelector(".job-card__next-text").textContent = item.nextStep;
      clone.querySelector(".job-card__next-text").title = item.nextStep;

      stack.appendChild(clone);
    });

    board.appendChild(section);
  });
}

function renderTable(items) {
  const rows = getSortedTableItems(getFilteredTableItems(items));
  tableBody.innerHTML = "";
  syncTableSortUI();

  if (!rows.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td colspan="6">
        <span class="table-next">
          <strong>当前筛选下暂无数据</strong>
          <span>可以切换筛选条件，或回到看板视图查看全部岗位。</span>
        </span>
      </td>
    `;
    tableBody.appendChild(tr);
    return;
  }

  rows.forEach((item) => {
    const priority = getPriorityMeta(item);
    const tr = document.createElement("tr");
    tr.dataset.applicationId = item.id;
    tr.innerHTML = `
      <td class="table-company">${item.company}</td>
      <td class="table-role">
        <strong>${item.role}</strong>
        <span>${item.city || "TBD"}</span>
      </td>
      <td class="table-due">
        <strong>${item.deadline}</strong>
        <span>${item.deadlineLevel === "urgent" ? "48 小时内需要处理" : "本周持续跟进"}</span>
      </td>
      <td>
        <span class="table-status ${item.stage}">${item.stageLabel}</span>
      </td>
      <td class="table-next">
        <strong>${item.badge}</strong>
        <span>${item.nextStep}</span>
      </td>
      <td>
        <span class="table-priority ${priority.className}">${priority.label}</span>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

function renderTimeline() {
  timelineContainer.innerHTML = "";

  timelineItems.forEach((entry) => {
    const item = applications.find((application) => application.id === entry.applicationId);
    if (!item) {
      return;
    }

    const article = document.createElement("article");
    article.className = "timeline-item";
    article.innerHTML = `
      <span class="timeline-item__time">${entry.time}</span>
      <div>
        <strong>${entry.title}</strong>
        <p>${entry.desc}</p>
        <button class="mini-action" data-open-application-id="${item.id}" type="button">查看申请</button>
      </div>
    `;
    timelineContainer.appendChild(article);
  });
}

function renderRecommended() {
  recommendedList.innerHTML = "";

  recommendedJobs.forEach((job) => {
    const exists = applications.some((item) => item.company === job.company && item.role === job.role);
    const article = document.createElement("article");
    article.className = "recommended-item fade-in";
    article.innerHTML = `
      <div class="recommended-item__top">
        <div>
          <span class="recommended-item__match">${job.match}</span>
          <h3 class="recommended-item__title">${job.company} · ${job.role}</h3>
        </div>
      </div>
      <p class="recommended-item__desc">${job.reason}</p>
      <div class="recommended-item__meta">
        <span>${job.city}</span>
        <span>截止 ${job.deadline}</span>
      </div>
      <button class="recommended-action" data-recommended-id="${job.id}" type="button">${exists ? "已加入待投递" : "加入待投递"}</button>
    `;
    const button = article.querySelector(".recommended-action");
    button.disabled = exists;
    recommendedList.appendChild(article);
  });
}

function syncDrawerMode() {
  drawerOverviewView.hidden = isDrawerEditMode;
  drawerOverviewEdit.hidden = !isDrawerEditMode;
  drawerNotes.hidden = isDrawerEditMode;
  drawerNotesInput.hidden = !isDrawerEditMode;
  drawerActions.hidden = !isDrawerEditMode;
  drawerEditToggleBtn.hidden = isDrawerEditMode;
}

function openDetailsDrawer(applicationId) {
  const item = applications.find((entry) => entry.id === applicationId);
  if (!item) {
    return;
  }

  currentDrawerApplicationId = item.id;
  isDrawerEditMode = false;
  drawerTitle.textContent = `${item.company} · ${item.role}`;
  drawerMeta.innerHTML = `
    <span class="meta-pill ${getPriorityDisplayClass(item)}">${getPriorityMeta(item).label}</span>
    <span>${item.city || "TBD"}</span>
    <span>${item.deadline === "TBD" ? "截止 TBD" : `截止 ${item.deadline}`}</span>
    <span class="meta-pill">${item.badge || "未设置"}</span>
  `;
  drawerChannel.textContent = item.channel || "未填写";
  drawerContact.textContent = item.contact || "未填写";
  if (item.jdLink) {
    drawerLink.textContent = "查看 JD";
    drawerLink.href = item.jdLink;
    drawerLink.classList.remove("is-empty");
    drawerLink.removeAttribute("aria-disabled");
  } else {
    drawerLink.textContent = "未填写";
    drawerLink.removeAttribute("href");
    drawerLink.classList.add("is-empty");
    drawerLink.setAttribute("aria-disabled", "true");
  }
  drawerStage.textContent = item.stageLabel;
  drawerBadgeView.textContent = item.badge || "未设置";
  drawerBadgeView.className = "drawer-pill";
  drawerPriorityView.textContent = getPriorityMeta(item).label;
  drawerPriorityView.className = `drawer-pill ${getPriorityDisplayClass(item)}`;
  drawerNextStepView.textContent = item.nextStep || "未填写";
  drawerNotes.textContent = item.notes || "暂无备注";

  drawerStageSelect.value = item.stage;
  drawerDeadlineInput.value = deadlineToDateInput(item.deadline);
  syncDrawerBadgeOptions(item.stage, item.badge);
  drawerPrioritySelect.value = item.deadlineLevel;
  drawerContactInput.value = item.contact || "";
  drawerLinkInput.value = item.jdLink || "";
  drawerNextStepInput.value = item.nextStep || "";
  drawerNotesInput.value = item.notes || "";

  syncDrawerMode();
  if (!detailsDrawer.open) {
    detailsDrawer.showModal();
  }
}

function syncView() {
  const isBoardView = activeView === "board";
  boardView.classList.toggle("is-active", isBoardView);
  tableView.classList.toggle("is-active", !isBoardView);

  [...viewSwitch.querySelectorAll(".view-switch__btn")].forEach((button) => {
    button.classList.toggle("active", button.dataset.view === activeView);
  });

  syncWorkspaceColumns();
}

function syncWorkspaceColumns() {
  if (syncColumnsFrame) {
    cancelAnimationFrame(syncColumnsFrame);
  }

  syncColumnsFrame = requestAnimationFrame(() => {
    const workspaceGrid = document.querySelector(".workspace-grid");
    const leftRail = document.querySelector(".left-rail");
    const rightRail = document.querySelector(".right-rail");

    if (!workspaceGrid || !leftRail || !rightRail) {
      return;
    }

    workspaceGrid.style.height = "";
    leftRail.style.minHeight = "";
    rightRail.style.minHeight = "";
    leftRail.style.height = "";
    rightRail.style.height = "";

    if (window.innerWidth <= 1180) {
      return;
    }

    const leftMinHeight = 390 + 18 + 840;
    const railGap = Number.parseFloat(window.getComputedStyle(rightRail).gap || "18") || 18;
    const rightPanels = [...rightRail.children].filter((element) => element instanceof HTMLElement);
    const rightNaturalHeight = rightPanels.reduce((total, element, index) => {
      const elementHeight = Math.ceil(element.scrollHeight);
      const gapHeight = index > 0 ? railGap : 0;
      return total + gapHeight + elementHeight;
    }, 0);
    const targetHeight = Math.max(rightNaturalHeight, leftMinHeight);
    workspaceGrid.style.height = `${targetHeight}px`;
    leftRail.style.height = "100%";
    rightRail.style.height = "100%";
  });
}

function rerender() {
  applications.forEach(ensureApplicationShape);
  renderHeroCard(applications);
  renderMetrics(applications);
  renderTaskCenter(applications);
  renderBoard(applications);
  renderTable(applications);
  renderTimeline();
  renderRecommended();
  syncFilterUI();
  syncView();
}

function openApplicationModal() {
  applicationForm.reset();
  applicationStageSelect.value = "wishlist";
  syncApplicationBadgeOptions(true);
  applicationModal.showModal();
}

function closeApplicationModal() {
  applicationModal.close();
  applicationForm.reset();
  applicationStageSelect.value = "wishlist";
  syncApplicationBadgeOptions(true);
}

function exportWeeklyReport() {
  const headers = ["公司", "岗位", "城市", "申请阶段", "截止日期", "优先级", "当前状态", "联系人", "岗位链接", "下一步", "备注"];
  const rows = applications.map((item) => [
    item.company,
    item.role,
    item.city,
    item.stageLabel,
    item.deadline,
    getPriorityMeta(item).label,
    item.badge,
    item.contact || "",
    item.jdLink || "",
    item.nextStep,
    item.notes || ""
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  downloadFile("求职申请周报.csv", `\uFEFF${csv}`, "text/csv;charset=utf-8");
}

function shuffleRecommendedJobs() {
  for (let index = recommendedJobs.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [recommendedJobs[index], recommendedJobs[nextIndex]] = [recommendedJobs[nextIndex], recommendedJobs[index]];
  }
}

applicationStageSelect.addEventListener("change", () => {
  syncApplicationBadgeOptions(true);
});

drawerStageSelect.addEventListener("change", () => {
  syncDrawerBadgeOptions(drawerStageSelect.value, "");
});

addApplicationBtn.addEventListener("click", openApplicationModal);
closeModalBtn.addEventListener("click", closeApplicationModal);
cancelModalBtn.addEventListener("click", closeApplicationModal);

applicationModal.addEventListener("click", (event) => {
  if (event.target === applicationModal) {
    closeApplicationModal();
  }
});

applicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(applicationForm);
  const stage = String(formData.get("stage"));
  const badge = String(formData.get("badge"));

  if (!stage || !badge) {
    return;
  }

  const item = {
    id: `app-${Date.now()}`,
    company: String(formData.get("company")).trim(),
    role: String(formData.get("role")).trim(),
    city: String(formData.get("city")).trim() || "TBD",
    stage,
    deadline: dateInputToDeadline(String(formData.get("deadline"))) || "TBD",
    deadlineLevel: stage === "interview" ? "urgent" : stage === "offer" ? "low" : "mid",
    badge,
    nextStep: String(formData.get("nextStep")).trim() || "Add next step",
    channel: "Manual entry",
    jdLink: normalizeOptionalUrl(formData.get("jdLink")),
    contact: String(formData.get("contact")).trim(),
    notes: String(formData.get("notes")).trim() || "Manual application. Add follow-up notes later.",
    materials: ["中文简历", "作品集"]
  };

  ensureApplicationShape(item, applications.length);
  applications.unshift(item);
  activeView = "board";
  rerender();
  closeApplicationModal();
  showSuccessToast("已添加成功，已同步到看板");
});

exportReportBtn.addEventListener("click", exportWeeklyReport);
exportCalendarBtn?.addEventListener("click", () => {
  exportCalendar();
});

focusUrgentBtn.addEventListener("click", () => {
  const urgentItem = getUrgentApplication(applications);
  if (urgentItem) {
    openDetailsDrawer(urgentItem.id);
  }
});

metricCards.forEach((card) => {
  const handleMetricOpen = () => {
    const filter = card.dataset.metricFilter;
    if (!filter) {
      return;
    }
    openTableViewWithFilter(filter);
  };

  card.addEventListener("click", handleMetricOpen);
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    handleMetricOpen();
  });
});

taskList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-application-id]");
  if (!button) {
    return;
  }
  openDetailsDrawer(button.dataset.applicationId);
});

board.addEventListener("click", (event) => {
  const card = event.target.closest("[data-application-id]");
  if (!card) {
    return;
  }
  openDetailsDrawer(card.dataset.applicationId);
});

tableBody.addEventListener("click", (event) => {
  const row = event.target.closest("[data-application-id]");
  if (!row) {
    return;
  }
  openDetailsDrawer(row.dataset.applicationId);
});

timelineContainer.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-application-id]");
  if (!button) {
    return;
  }
  openDetailsDrawer(button.dataset.openApplicationId);
});

recommendedList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-recommended-id]");
  if (!button) {
    return;
  }

  const job = recommendedJobs.find((item) => item.id === button.dataset.recommendedId);
  if (!job) {
    return;
  }

  const exists = applications.some((item) => item.company === job.company && item.role === job.role);
  if (exists) {
    return;
  }

  const item = {
    id: `app-${Date.now()}`,
    company: job.company,
    role: job.role,
    city: job.city,
    stage: "wishlist",
    deadline: job.deadline,
    deadlineLevel: "mid",
    badge: "待完善材料",
    nextStep: "确认岗位匹配度后完成投递。",
    channel: "系统推荐",
    jdLink: "",
    contact: "系统推荐",
    notes: job.reason,
    materials: ["中文简历", "作品集"]
  };

  ensureApplicationShape(item, applications.length);
  applications.unshift(item);
  activeView = "board";
  rerender();
  applicationBoardPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  showSuccessToast("推荐岗位已加入待投递");
});

refreshRecommendedBtn.addEventListener("click", () => {
  shuffleRecommendedJobs();
  renderRecommended();
  showSuccessToast("推荐岗位已刷新");
});

materialsPanelActions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-material-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.materialAction;
  if (action === "export-resume-cn") {
    downloadExamplePdf("中文简历导出.pdf");
    showSuccessToast("已导出中文简历示例文件");
    return;
  }

  if (action === "export-resume-en") {
    downloadExamplePdf("英文简介导出.pdf");
    showSuccessToast("已导出英文简介示例文件");
    return;
  }

  if (action === "export-portfolio") {
    downloadExampleZip("作品集和成绩单导出.zip");
    showSuccessToast("已导出 ZIP 示例文件");
    return;
  }

  if (action === "export-proofs") {
    downloadExampleZip("作品集和成绩单导出.zip");
    showSuccessToast("已导出 ZIP 示例文件");
  }
});

closeDrawerBtn.addEventListener("click", () => {
  detailsDrawer.close();
});

drawerEditToggleBtn.addEventListener("click", () => {
  isDrawerEditMode = true;
  syncDrawerMode();
});

drawerResetBtn.addEventListener("click", () => {
  if (currentDrawerApplicationId) {
    openDetailsDrawer(currentDrawerApplicationId);
    showSuccessToast("已重置为当前保存内容");
  }
});

drawerSaveBtn.addEventListener("click", () => {
  const item = applications.find((entry) => entry.id === currentDrawerApplicationId);
  if (!item) {
    return;
  }

  item.stage = drawerStageSelect.value;
  item.stageLabel = getStageLabel(item.stage);
  item.deadline = dateInputToDeadline(drawerDeadlineInput.value) || item.deadline || "TBD";
  item.badge = drawerBadgeSelect.value || item.badge;
  item.deadlineLevel = drawerPrioritySelect.value || item.deadlineLevel;
  item.contact = drawerContactInput.value.trim();
  item.jdLink = normalizeOptionalUrl(drawerLinkInput.value);
  item.nextStep = drawerNextStepInput.value.trim() || item.nextStep;
  item.notes = drawerNotesInput.value.trim() || item.notes;

  rerender();
  isDrawerEditMode = false;
  openDetailsDrawer(item.id);
  showSuccessToast("申请详情已更新");
});

drawerDeleteBtn.addEventListener("click", () => {
  const item = applications.find((entry) => entry.id === currentDrawerApplicationId);
  if (!item) {
    return;
  }

  deleteConfirmText.textContent = `将删除「${item.company} · ${item.role}」，删除后会从看板、表格和任务中心中移除。`;
  deleteConfirmModal.showModal();
});

cancelDeleteBtn.addEventListener("click", () => {
  deleteConfirmModal.close();
});

confirmDeleteBtn.addEventListener("click", () => {
  const index = applications.findIndex((item) => item.id === currentDrawerApplicationId);
  if (index === -1) {
    deleteConfirmModal.close();
    return;
  }

  applications.splice(index, 1);
  deleteConfirmModal.close();
  detailsDrawer.close();
  rerender();
  showSuccessToast("岗位已删除");
});

deleteConfirmModal.addEventListener("click", (event) => {
  if (event.target === deleteConfirmModal) {
    deleteConfirmModal.close();
  }
});

detailsDrawer.addEventListener("click", (event) => {
  if (event.target === detailsDrawer) {
    detailsDrawer.close();
  }
});

detailsDrawer.addEventListener("close", () => {
  isDrawerEditMode = false;
  syncDrawerMode();
});

applicationBoardPanel.addEventListener("click", (event) => {
  const chip = event.target.closest("[data-filter]");
  if (!chip || !chip.closest("[data-application-filter-group]")) {
    return;
  }
  applyActiveFilter(chip.dataset.filter);
});

applicationBoardPanel.addEventListener("input", (event) => {
  const input = event.target.closest("[data-application-search]");
  if (!input) {
    return;
  }

  keyword = input.value.trim().toLowerCase();
  syncSearchInputs(input.value);
  renderBoard(applications);
  renderTable(applications);
});

tableSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextKey = button.dataset.sortKey;
    if (activeTableSort.key === nextKey) {
      activeTableSort.direction = activeTableSort.direction === "asc" ? "desc" : "asc";
    } else {
      activeTableSort.key = nextKey;
      activeTableSort.direction = nextKey === "priority" ? "desc" : "asc";
    }

    renderTable(applications);
  });
});

viewSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (!button) {
    return;
  }
  activeView = button.dataset.view;
  syncView();
});

window.addEventListener("resize", syncWorkspaceColumns);

filterGroup.dataset.applicationFilterGroup = "true";
searchInput.dataset.applicationSearch = "true";
ensureBoardFilterGroup();
ensureWeekFilterChip();
syncApplicationBadgeOptions(true);
rerender();
