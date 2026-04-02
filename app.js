const state = {
  accounts: [
    { code: '1101', name: '보통예금', fs: 'BS', major: '자산', minor: '유동자산' },
    { code: '1102', name: '외상매출금', fs: 'BS', major: '자산', minor: '유동자산' },
    { code: '1103', name: '미수금', fs: 'BS', major: '자산', minor: '유동자산' },
    { code: '1104', name: '선급금', fs: 'BS', major: '자산', minor: '유동자산' },
    { code: '1105', name: '선급비용', fs: 'BS', major: '자산', minor: '유동자산' },
    { code: '1106', name: '미수수익', fs: 'BS', major: '자산', minor: '유동자산' },
    { code: '1107', name: '매입부가세', fs: 'BS', major: '자산', minor: '유동자산' },
    { code: '1201', name: '임차보증금', fs: 'BS', major: '자산', minor: '비유동자산' },
    { code: '2101', name: '외상매입금', fs: 'BS', major: '부채', minor: '유동부채' },
    { code: '2102', name: '미지급금', fs: 'BS', major: '부채', minor: '유동부채' },
    { code: '2103', name: '가수금', fs: 'BS', major: '부채', minor: '유동부채' },
    { code: '2104', name: '선수금', fs: 'BS', major: '부채', minor: '유동부채' },
    { code: '2105', name: '매출부가세', fs: 'BS', major: '부채', minor: '유동부채' },
    { code: '2106', name: '미지급비용', fs: 'BS', major: '부채', minor: '유동부채' },
    { code: '2107', name: '예수금', fs: 'BS', major: '부채', minor: '유동부채' },
    { code: '2201', name: '퇴직급여충당금', fs: 'BS', major: '부채', minor: '비유동부채' },
    { code: '3101', name: '자본금', fs: 'BS', major: '자본', minor: '자본' },
    { code: '3102', name: '이익잉여금', fs: 'BS', major: '자본', minor: '자본' },
    { code: '4101', name: '용역매출', fs: 'IS', major: '매출', minor: '매출' },
    { code: '4102', name: '상품매출', fs: 'IS', major: '매출', minor: '매출' },
    { code: '4103', name: '기타매출', fs: 'IS', major: '매출', minor: '매출' },
    { code: '5101', name: '용역매출원가', fs: 'IS', major: '원가', minor: '원가' },
    { code: '5102', name: '상품매출원가', fs: 'IS', major: '원가', minor: '원가' },
    { code: '5103', name: '기타매출원가', fs: 'IS', major: '원가', minor: '원가' },
    { code: '6101', name: '급여', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6102', name: '퇴직급여', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6103', name: '복리후생비', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6104', name: '지급수수료', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6105', name: '광고선전비', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6106', name: '소모품비', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6107', name: '여비교통비', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6108', name: '통신비', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6109', name: '임차료', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '6110', name: '대손상각비', fs: 'IS', major: '판관비', minor: '판관비' },
    { code: '7101', name: '잡이익', fs: 'IS', major: '영업외수익', minor: '영업외수익' },
    { code: '8101', name: '잡손실', fs: 'IS', major: '영업외비용', minor: '영업외비용' },
  ],
  vendors: [
    { code: 'V001', businessNo: '111-11-11111', name: 'A고객사', bankName: '국민은행', accountNo: '1002-123-123456', depositor: 'A고객사', ceoName: '김대표', businessType: '서비스', businessCategory: '컨설팅', email: 'a@example.com', address: '서울시 강남구' },
    { code: 'V002', businessNo: '222-22-22222', name: 'B공급사', bankName: '신한은행', accountNo: '1002-222-222222', depositor: 'B공급사', ceoName: '이대표', businessType: 'IT', businessCategory: '외주개발', email: 'b@example.com', address: '서울시 서초구' },
    { code: 'V003', businessNo: '333-33-33333', name: '건물관리사무소', bankName: '하나은행', accountNo: '1002-333-333333', depositor: '건물관리', ceoName: '박대표', businessType: '부동산', businessCategory: '건물관리', email: 'building@example.com', address: '서울시 마포구' },
  ],
  vouchers: [
    { id: 1, no: '1', postingDate: '2026-04-01', evidenceDate: '2026-04-01', desc: '법인 설립 자본금 입금', totalAmount: 50000000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '1101', debitAmount: 50000000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '3101', debitAmount: 0, creditAmount: 50000000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 2, no: '2', postingDate: '2026-04-02', evidenceDate: '2026-04-02', desc: '사무실 임차보증금 지급', totalAmount: 10000000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '1201', debitAmount: 10000000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '1101', debitAmount: 0, creditAmount: 10000000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 3, no: '3', postingDate: '2026-04-03', evidenceDate: '2026-04-03', desc: '용역매출 발생', totalAmount: 220000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '1102', debitAmount: 220000, creditAmount: 0, vendorCode: 'V001' },
      { lineNo: 2, accountCode: '4101', debitAmount: 0, creditAmount: 200000, vendorCode: 'V001' },
      { lineNo: 3, accountCode: '2105', debitAmount: 0, creditAmount: 20000, vendorCode: 'V001' }
    ] },
    { id: 4, no: '4', postingDate: '2026-04-03', evidenceDate: '2026-04-03', desc: '상품매출 발생', totalAmount: 330000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '1102', debitAmount: 330000, creditAmount: 0, vendorCode: 'V001' },
      { lineNo: 2, accountCode: '4102', debitAmount: 0, creditAmount: 300000, vendorCode: 'V001' },
      { lineNo: 3, accountCode: '2105', debitAmount: 0, creditAmount: 30000, vendorCode: 'V001' }
    ] },
    { id: 5, no: '5', postingDate: '2026-04-04', evidenceDate: '2026-04-04', desc: '기타매출 발생', totalAmount: 110000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '1103', debitAmount: 110000, creditAmount: 0, vendorCode: 'V001' },
      { lineNo: 2, accountCode: '4103', debitAmount: 0, creditAmount: 100000, vendorCode: 'V001' },
      { lineNo: 3, accountCode: '2105', debitAmount: 0, creditAmount: 10000, vendorCode: 'V001' }
    ] },
    { id: 6, no: '6', postingDate: '2026-04-05', evidenceDate: '2026-04-05', desc: '외주비 인식', totalAmount: 200000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6104', debitAmount: 200000, creditAmount: 0, vendorCode: 'V002' },
      { lineNo: 2, accountCode: '2101', debitAmount: 0, creditAmount: 200000, vendorCode: 'V002' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 7, no: '7', postingDate: '2026-04-05', evidenceDate: '2026-04-05', desc: '복리후생비 인식', totalAmount: 50000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6103', debitAmount: 50000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '2102', debitAmount: 0, creditAmount: 50000, vendorCode: 'V003' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 8, no: '8', postingDate: '2026-04-06', evidenceDate: '2026-04-06', desc: '급여 지급', totalAmount: 3000000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6101', debitAmount: 3000000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '1101', debitAmount: 0, creditAmount: 3000000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 9, no: '9', postingDate: '2026-04-06', evidenceDate: '2026-04-06', desc: '퇴직급여 인식', totalAmount: 200000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6102', debitAmount: 200000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '2201', debitAmount: 0, creditAmount: 200000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 10, no: '10', postingDate: '2026-04-07', evidenceDate: '2026-04-07', desc: '통신비 지급', totalAmount: 80000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6108', debitAmount: 80000, creditAmount: 0, vendorCode: 'V003' },
      { lineNo: 2, accountCode: '1101', debitAmount: 0, creditAmount: 80000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 11, no: '11', postingDate: '2026-04-08', evidenceDate: '2026-04-08', desc: '광고선전비 지급', totalAmount: 120000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6105', debitAmount: 120000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '1101', debitAmount: 0, creditAmount: 120000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 12, no: '12', postingDate: '2026-04-08', evidenceDate: '2026-04-08', desc: '소모품비 지급', totalAmount: 40000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6106', debitAmount: 40000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '1101', debitAmount: 0, creditAmount: 40000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 13, no: '13', postingDate: '2026-04-09', evidenceDate: '2026-04-09', desc: '여비교통비 지급', totalAmount: 30000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6107', debitAmount: 30000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '1101', debitAmount: 0, creditAmount: 30000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 14, no: '14', postingDate: '2026-04-09', evidenceDate: '2026-04-09', desc: '임차료 인식', totalAmount: 700000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6109', debitAmount: 700000, creditAmount: 0, vendorCode: 'V003' },
      { lineNo: 2, accountCode: '2102', debitAmount: 0, creditAmount: 700000, vendorCode: 'V003' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 15, no: '15', postingDate: '2026-04-10', evidenceDate: '2026-04-10', desc: '선수금 수령', totalAmount: 500000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '1101', debitAmount: 500000, creditAmount: 0, vendorCode: 'V001' },
      { lineNo: 2, accountCode: '2104', debitAmount: 0, creditAmount: 500000, vendorCode: 'V001' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 16, no: '16', postingDate: '2026-04-10', evidenceDate: '2026-04-10', desc: '예수금 인식', totalAmount: 150000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '6101', debitAmount: 150000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '2107', debitAmount: 0, creditAmount: 150000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 17, no: '17', postingDate: '2026-04-11', evidenceDate: '2026-04-11', desc: '고객 입금 반영', totalAmount: 220000, reconciliations: [{ openKey: '3:0', amount: 220000 }], lines: [
      { lineNo: 1, accountCode: '1101', debitAmount: 220000, creditAmount: 0, vendorCode: 'V001' },
      { lineNo: 2, accountCode: '1102', debitAmount: 0, creditAmount: 220000, vendorCode: 'V001' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 18, no: '18', postingDate: '2026-04-11', evidenceDate: '2026-04-11', desc: '외주비 지급', totalAmount: 200000, reconciliations: [{ openKey: '6:1', amount: 200000 }], lines: [
      { lineNo: 1, accountCode: '2101', debitAmount: 200000, creditAmount: 0, vendorCode: 'V002' },
      { lineNo: 2, accountCode: '1101', debitAmount: 0, creditAmount: 200000, vendorCode: 'V002' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 19, no: '19', postingDate: '2026-04-12', evidenceDate: '2026-04-12', desc: '잡이익 인식', totalAmount: 50000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '1101', debitAmount: 50000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '7101', debitAmount: 0, creditAmount: 50000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] },
    { id: 20, no: '20', postingDate: '2026-04-12', evidenceDate: '2026-04-12', desc: '잡손실 인식', totalAmount: 20000, reconciliations: [], lines: [
      { lineNo: 1, accountCode: '8101', debitAmount: 20000, creditAmount: 0, vendorCode: '' },
      { lineNo: 2, accountCode: '1101', debitAmount: 0, creditAmount: 20000, vendorCode: '' },
      { lineNo: 3, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }
    ] }
  ],
  selectedVoucherId: null,
  selectedAccountIndex: null,
  selectedVendorIndex: null,
  reconciliationDocs: [],
  pendingAttachments: [],
  accessRequests: [
    { email: 'guest1@example.com', status: 'pending', requestedAt: '2026-04-02' },
    { email: 'approved@example.com', status: 'approved', requestedAt: '2026-04-02' },
  ],
  currentUser: { email: '', role: 'user', approved: false },
  voucherSort: { key: 'postingDate', order: 'asc' },
  openItemSort: { key: 'postingDate', order: 'asc' },
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const today = () => new Date().toISOString().slice(0,10);
const format = (n) => Number(n || 0).toLocaleString('ko-KR');
const parseNum = (v) => Number(String(v || '').replace(/,/g, '')) || 0;
const accountByCode = (code) => state.accounts.find(a => a.code === code);
const vendorByCode = (code) => state.vendors.find(v => v.code === code);
const accountLabel = (code) => code ? `${code} - ${accountByCode(code)?.name || ''}` : '';
const vendorLabel = (code) => code ? `${code} - ${vendorByCode(code)?.name || ''}` : '';
const openAccountCodes = new Set(['1102','1103','2101','2102']);

function nextReconciliationNo() {
  const nums = state.reconciliationDocs.map(d => Number(String(d.no).replace(/[^0-9]/g, ''))).filter(Boolean);
  const next = nums.length ? Math.max(...nums) + 1 : 1;
  return `R${String(next).padStart(4, '0')}`;
}

function loadSheetJs(callback) {
  if (window.XLSX) return callback();
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
  script.onload = callback;
  script.onerror = () => alert('엑셀 라이브러리를 불러오지 못했어.');
  document.head.appendChild(script);
}

function downloadXlsx(filename, sheetName, rows) {
  if (!rows || !rows.length) return alert('다운로드할 데이터가 없어.');
  loadSheetJs(() => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(rows);
    const colWidths = rows[0].map((_, colIdx) => ({ wch: Math.max(...rows.map(r => String(r[colIdx] ?? '').length), 10) }));
    ws['!cols'] = colWidths;
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, filename);
  });
}

function getSortIndicator(sortState, key) {
  if (sortState.key !== key) return '↕';
  return sortState.order === 'asc' ? '↑' : '↓';
}

function sortBy(rows, sortState, valueGetter) {
  const sorted = [...rows].sort((a, b) => {
    const av = valueGetter(a, sortState.key);
    const bv = valueGetter(b, sortState.key);
    const aNum = typeof av === 'number' ? av : Number(av);
    const bNum = typeof bv === 'number' ? bv : Number(bv);
    let result;
    if (!Number.isNaN(aNum) && !Number.isNaN(bNum) && String(av).trim() !== '' && String(bv).trim() !== '') {
      result = aNum - bNum;
    } else {
      result = String(av ?? '').localeCompare(String(bv ?? ''), 'ko');
    }
    return sortState.order === 'asc' ? result : -result;
  });
  return sorted;
}

function toggleSort(sortState, key) {
  if (sortState.key === key) {
    sortState.order = sortState.order === 'asc' ? 'desc' : 'asc';
  } else {
    sortState.key = key;
    sortState.order = 'asc';
  }
}

function readFilesAsDataUrls(fileList) {
  return Promise.all([...fileList].map(file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, type: file.type, size: file.size, dataUrl: reader.result });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  })));
}

function isAdmin() {
  return state.currentUser?.role === 'admin';
}

function applyAccessUi() {
  const restricted = !state.currentUser || !state.currentUser.approved;
  $('.main').style.display = restricted ? 'none' : 'block';
  $$('.nav-btn').forEach(btn => {
    if (restricted) {
      btn.style.display = btn.dataset.view === 'accessControl' ? 'none' : 'none';
      btn.disabled = true;
    } else {
      btn.disabled = false;
      if (btn.dataset.view === 'accessControl') {
        btn.style.display = isAdmin() ? 'block' : 'none';
      } else {
        btn.style.display = 'block';
      }
    }
  });
  $('.sidebar nav').style.pointerEvents = restricted ? 'none' : 'auto';
  $('.sidebar nav').style.opacity = restricted ? '0.35' : '1';
}

function renderAccessGate() {
  const gate = $('#accessGate');
  const req = state.currentUser?.email ? state.accessRequests.find(r => r.email === state.currentUser.email) : null;
  if (state.currentUser?.approved) {
    gate.classList.add('hidden');
    applyAccessUi();
    return;
  }
  switchView('dashboard');
  gate.classList.remove('hidden');
  gate.innerHTML = `
    <div class="access-card">
      <h2>개미나라 사용 신청</h2>
      <p>사이트를 사용하려면 이메일 주소를 입력하고 권한 신청을 해줘. 관리자가 승인하면 사용할 수 있어.</p>
      <label>이메일 주소<input id="accessEmail" type="email" value="${state.currentUser?.email || ''}" placeholder="name@example.com" /></label>
      <div class="actions">
        <button class="btn success" id="requestAccessBtn">권한 신청</button>
      </div>
      <hr style="margin:18px 0; border:none; border-top:1px solid #e5e7eb;" />
      <h3 style="margin:0 0 10px;">관리자 로그인</h3>
      <div class="form-grid full">
        <label>관리자 이메일<input id="adminEmail" type="email" value="" placeholder="관리자 이메일 입력" /></label>
        <label>비밀번호<input id="adminPassword" type="password" value="" placeholder="비밀번호 입력" /></label>
      </div>
      <div class="actions">
        <button class="btn secondary" id="loginAsAdminBtn">관리자 로그인</button>
      </div>
      <div class="access-status">${req ? `신청 상태: ${req.status}` : '아직 신청 이력이 없어.'}</div>
    </div>`;

  $('#requestAccessBtn').addEventListener('click', () => {
    const email = $('#accessEmail').value.trim();
    if (!email) return alert('이메일 주소를 입력해줘.');
    let target = state.accessRequests.find(r => r.email === email);
    if (!target) {
      target = { email, status: 'pending', requestedAt: today() };
      state.accessRequests.push(target);
    } else {
      target.status = 'pending';
    }
    state.currentUser = { email, role: 'user', approved: false };
    renderAll();
  });

  $('#loginAsAdminBtn').addEventListener('click', () => {
    const email = $('#adminEmail').value.trim();
    const password = $('#adminPassword').value;
    if (email !== 'jonghoon.kim@spc.co.kr' || password !== '1234') {
      return alert('관리자 계정 정보가 올바르지 않아.');
    }
    state.currentUser = { email: 'jonghoon.kim@spc.co.kr', role: 'admin', approved: true };
    renderAll();
    switchView('accessControl');
  });
  applyAccessUi();
}

function switchView(view) {
  if (!state.currentUser?.approved) return;
  $$('.view').forEach(v => v.classList.remove('active'));
  $$('.nav-btn').forEach(v => v.classList.remove('active'));
  document.getElementById(view).classList.add('active');
  const nav = document.querySelector(`[data-view="${view}"]`);
  if (nav) nav.classList.add('active');
}
$$('.nav-btn').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));

function nextVoucherNo() {
  const nums = state.vouchers.map(v => Number(v.no)).filter(Boolean);
  return String(nums.length ? Math.max(...nums) + 1 : 1);
}

function emptyLines() {
  return [1,2,3].map((_, i) => ({ lineNo: i+1, accountCode: '', debitAmount: 0, creditAmount: 0, vendorCode: '' }));
}

function currentOpenItems() {
  const items = [];
  const reconMap = new Map();
  for (const v of state.vouchers) {
    if (v.reconciliations) {
      for (const r of v.reconciliations) {
        reconMap.set(r.openKey, (reconMap.get(r.openKey) || 0) + r.amount);
      }
    }
  }
  for (const v of state.vouchers) {
    v.lines.forEach((line, idx) => {
      if (!openAccountCodes.has(line.accountCode)) return;
      const debit = line.debitAmount || 0;
      const credit = line.creditAmount || 0;
      const baseAmount = debit > 0 ? debit : credit;
      const key = `${v.id}:${idx}`;
      const settled = reconMap.get(key) || 0;
      const remaining = baseAmount - settled;
      items.push({
        key,
        voucherId: v.id,
        voucherNo: v.no,
        postingDate: v.postingDate,
        evidenceDate: v.evidenceDate,
        desc: v.desc,
        accountCode: line.accountCode,
        vendorCode: line.vendorCode,
        debitAmount: debit,
        creditAmount: credit,
        settled,
        remaining,
        status: remaining <= 0 ? 'closed' : settled > 0 ? 'partial' : 'open',
      });
    });
  }
  return items;
}

function computeBalances() {
  const balances = Object.fromEntries(state.accounts.map(a => [a.code, 0]));
  for (const v of state.vouchers) {
    for (const line of v.lines) {
      if (!line.accountCode) continue;
      const acc = accountByCode(line.accountCode);
      if (!acc) continue;
      const normalCredit = ['부채','자본','매출','영업외수익'].includes(acc.major);
      balances[line.accountCode] += normalCredit ? -line.debitAmount + line.creditAmount : line.debitAmount - line.creditAmount;
    }
  }
  return balances;
}

function plSummary() {
  const balances = computeBalances();
  const sumByMajor = (major) => state.accounts.filter(a => a.fs === 'IS' && a.major === major).reduce((s, a) => s + (balances[a.code] || 0), 0);
  const sales = sumByMajor('매출');
  const costs = sumByMajor('원가');
  const sga = sumByMajor('판관비');
  const nonOpIncome = sumByMajor('영업외수익');
  const nonOpExpense = sumByMajor('영업외비용');
  const taxExpense = state.accounts.filter(a => a.fs === 'IS' && a.name.includes('법인세')).reduce((s, a) => s + (balances[a.code] || 0), 0);
  const netIncome = sales - costs - sga + nonOpIncome - nonOpExpense - taxExpense;
  return { sales, costs, sga, nonOpIncome, nonOpExpense, taxExpense, netIncome };
}

function renderDashboard() {
  const balances = computeBalances();
  const openItems = currentOpenItems().filter(i => i.status !== 'closed');
  const pl = plSummary();
  const openByVendor = [...openItems].reduce((acc, item) => {
    const key = vendorLabel(item.vendorCode) || '거래처 없음';
    acc[key] = (acc[key] || 0) + item.remaining;
    return acc;
  }, {});
  const openByAccount = [...openItems].reduce((acc, item) => {
    const key = accountLabel(item.accountCode);
    acc[key] = (acc[key] || 0) + item.remaining;
    return acc;
  }, {});
  const recentVouchers = [...state.vouchers].sort((a, b) => String(b.postingDate).localeCompare(String(a.postingDate)) || Number(b.no) - Number(a.no)).slice(0, 7);
  const topVendors = Object.entries(openByVendor).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const topAccounts = Object.entries(openByAccount).sort((a, b) => b[1] - a[1]).slice(0, 5);

  $('#dashboard').innerHTML = `
    <div class="card-grid six">
      <div class="card"><h3>전표 건수</h3><strong>${format(state.vouchers.length)}</strong></div>
      <div class="card"><h3>미결 건수</h3><strong>${format(openItems.length)}</strong></div>
      <div class="card"><h3>미결 잔액 합계</h3><strong>${format(openItems.reduce((s, i) => s + i.remaining, 0))}</strong></div>
      <div class="card"><h3>당기 매출</h3><strong>${format(pl.sales)}</strong></div>
      <div class="card"><h3>당기 비용</h3><strong>${format(pl.costs + pl.sga + pl.nonOpExpense + pl.taxExpense)}</strong></div>
      <div class="card"><h3>당기순이익</h3><strong>${format(pl.netIncome)}</strong></div>
    </div>

    <div class="report-grid dashboard-grid-3">
      <div class="panel">
        <h2>주요 계정 잔액</h2>
        <div class="table-wrap">
          <table>
            <tbody>
              <tr><td>보통예금</td><td>${format(balances['1101'] || 0)}</td></tr>
              <tr><td>외상매출금</td><td>${format(balances['1102'] || 0)}</td></tr>
              <tr><td>미수금</td><td>${format(balances['1103'] || 0)}</td></tr>
              <tr><td>외상매입금</td><td>${format(balances['2101'] || 0)}</td></tr>
              <tr><td>미지급금</td><td>${format(balances['2102'] || 0)}</td></tr>
              <tr><td>매출부가세</td><td>${format(balances['2105'] || 0)}</td></tr>
              <tr><td>예수금</td><td>${format(balances['2107'] || 0)}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <h2>미결 거래처 TOP</h2>
        <div class="table-wrap">
          <table>
            <tbody>
              ${topVendors.length ? topVendors.map(([name, amount]) => `<tr><td>${name}</td><td>${format(amount)}</td></tr>`).join('') : '<tr><td colspan="2">미결 없음</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <h2>미결 계정 요약</h2>
        <div class="table-wrap">
          <table>
            <tbody>
              ${topAccounts.length ? topAccounts.map(([name, amount]) => `<tr><td>${name}</td><td>${format(amount)}</td></tr>`).join('') : '<tr><td colspan="2">미결 없음</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="report-grid">
      <div class="panel">
        <h2>손익 요약</h2>
        <div class="table-wrap">
          <table>
            <tbody>
              <tr><td>매출</td><td>${format(pl.sales)}</td></tr>
              <tr><td>원가</td><td>${format(pl.costs)}</td></tr>
              <tr><td>판관비</td><td>${format(pl.sga)}</td></tr>
              <tr><td>영업외수익</td><td>${format(pl.nonOpIncome)}</td></tr>
              <tr><td>영업외비용</td><td>${format(pl.nonOpExpense)}</td></tr>
              <tr><th>당기순이익</th><th>${format(pl.netIncome)}</th></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel">
        <h2>최근 전표</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>전기일자</th><th>전표번호</th><th>적요</th><th>금액</th></tr></thead>
            <tbody>
              ${recentVouchers.map(v => `<tr><td>${v.postingDate}</td><td>${v.no}</td><td>${v.desc || ''}</td><td>${format(v.totalAmount)}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

function renderEntries() {
  const voucher = state.vouchers.find(v => v.id === state.selectedVoucherId);
  const editMode = !!voucher;
  const lines = voucher ? voucher.lines : emptyLines();
  const postingDate = voucher?.postingDate || today();
  const evidenceDate = voucher?.evidenceDate || today();
  const no = voucher?.no || nextVoucherNo();
  const desc = voucher?.desc || '';

  $('#entries').innerHTML = `
    <div class="panel">
      <h2>전표 입력</h2>
      <div class="form-grid">
        <label>증빙일자<input id="evidenceDate" type="date" value="${evidenceDate}" /></label>
        <label>전표번호<input id="voucherNo" type="text" value="${no}" readonly /></label>
        <label>전기일자<input id="postingDate" type="date" value="${postingDate}" /></label>
      </div>
      <div class="form-grid full" style="margin-top:12px;">
        <label>적요<input id="voucherDesc" type="text" value="${desc}" placeholder="예: 6월 관리비" /></label>
      </div>
      <div class="form-grid full" style="margin-top:12px;">
        <label>첨부파일<input id="voucherAttachments" type="file" multiple /></label>
      </div>
      <div id="attachmentList" class="small" style="margin-top:8px;"></div>
      <div class="actions" style="margin-top:10px;">
        <div class="card"><h3>차변 합계</h3><strong id="debitTotal">0</strong></div>
        <div class="card"><h3>대변 합계</h3><strong id="creditTotal">0</strong></div>
        <div class="card"><h3>검증 상태</h3><strong><span id="balanceStatus" class="badge open">불일치</span></strong></div>
      </div>
      <div class="table-wrap" style="margin-top:14px;">
        <table>
          <thead><tr><th>행</th><th>계정과목</th><th>차변금액</th><th>대변금액</th><th>거래처</th></tr></thead>
          <tbody>
            ${lines.map((line, idx) => `
              <tr>
                <td>${idx+1}</td>
                <td><select class="line-account" data-idx="${idx}"><option value="">선택</option>${state.accounts.map(a => `<option value="${a.code}" ${line.accountCode===a.code?'selected':''}>${a.code} - ${a.name}</option>`).join('')}</select></td>
                <td><input class="line-debit" data-idx="${idx}" value="${line.debitAmount ? format(line.debitAmount) : ''}" /></td>
                <td><input class="line-credit" data-idx="${idx}" value="${line.creditAmount ? format(line.creditAmount) : ''}" /></td>
                <td><select class="line-vendor" data-idx="${idx}"><option value="">선택</option>${state.vendors.map(v => `<option value="${v.code}" ${line.vendorCode===v.code?'selected':''}>${v.code} - ${v.name}</option>`).join('')}</select></td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="actions">
        <button class="btn success" id="saveVoucherBtn">전표 저장</button>
        <button class="btn secondary" id="newVoucherBtn">신규 생성</button>
      </div>
    </div>
    <div class="panel">
      <h2>전표 목록</h2>
      <div class="form-grid">
        <label>전기일자<input id="filterPostingDate" type="date" value="${today()}" /></label>
        <label>증빙일자<input id="filterEvidenceDate" type="date" value="${today()}" /></label>
        <label>거래처<select id="filterVendor"><option value="">전체</option>${state.vendors.map(v => `<option value="${v.code}">${v.code} - ${v.name}</option>`).join('')}</select></label>
      </div>
      <div class="actions">
        <button class="btn" id="filterVoucherBtn">조회</button>
        <button class="btn secondary" id="resetVoucherFilterBtn">초기화</button>
        <button class="btn secondary" id="selectAllVoucherBtn">전체 선택</button>
        <button class="btn secondary" id="exportVoucherBtn">엑셀 다운로드</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>선택</th>
              <th class="sortable" data-sort="postingDate">전기일자 ${getSortIndicator(state.voucherSort, 'postingDate')}</th>
              <th class="sortable" data-sort="evidenceDate">증빙일자 ${getSortIndicator(state.voucherSort, 'evidenceDate')}</th>
              <th class="sortable" data-sort="no">전표번호 ${getSortIndicator(state.voucherSort, 'no')}</th>
              <th class="sortable" data-sort="debit">차변 ${getSortIndicator(state.voucherSort, 'debit')}</th>
              <th class="sortable" data-sort="credit">대변 ${getSortIndicator(state.voucherSort, 'credit')}</th>
              <th class="sortable" data-sort="totalAmount">금액 ${getSortIndicator(state.voucherSort, 'totalAmount')}</th>
              <th class="sortable" data-sort="vendor">거래처 ${getSortIndicator(state.voucherSort, 'vendor')}</th>
              <th class="sortable" data-sort="desc">적요 ${getSortIndicator(state.voucherSort, 'desc')}</th>
              <th>첨부파일</th>
            </tr>
          </thead>
          <tbody id="voucherTableBody"></tbody>
        </table>
      </div>
      <div class="actions">
        <button class="btn secondary" id="editVoucherBtn">선택 전표 수정</button>
        <button class="btn secondary" id="deleteVoucherBtn">선택 전표 삭제</button>
      </div>
    </div>`;

  function updateTotals() {
    const debit = $$('.line-debit').reduce((s, el) => s + parseNum(el.value), 0);
    const credit = $$('.line-credit').reduce((s, el) => s + parseNum(el.value), 0);
    $('#debitTotal').textContent = format(debit);
    $('#creditTotal').textContent = format(credit);
    const match = debit === credit;
    $('#balanceStatus').textContent = match ? '일치' : '불일치';
    $('#balanceStatus').className = match ? 'badge closed' : 'badge open';
  }

  $$('.line-debit, .line-credit').forEach(el => el.addEventListener('input', (e) => {
    e.target.value = String(parseNum(e.target.value) || '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    updateTotals();
  }));
  updateTotals();

  const voucherRowsNormalized = (rows) => rows.map(v => ({
    ...v,
    debit: accountLabel(v.lines.find(l => l.debitAmount > 0 && l.accountCode)?.accountCode || ''),
    credit: accountLabel(v.lines.find(l => l.creditAmount > 0 && l.accountCode)?.accountCode || ''),
    vendor: vendorLabel(v.lines.find(l => l.vendorCode)?.vendorCode || ''),
    attachments: v.attachments || [],
  }));

  const renderVoucherRows = (rows = state.vouchers) => {
    const sortedRows = sortBy(voucherRowsNormalized(rows), state.voucherSort, (row, key) => row[key] ?? '');
    $('#voucherTableBody').innerHTML = sortedRows.map(v => `
      <tr>
        <td><input type="checkbox" class="voucher-check" value="${v.id}" /></td>
        <td>${v.postingDate}</td>
        <td>${v.evidenceDate}</td>
        <td><button class="btn secondary voucher-link" data-id="${v.id}" style="padding:4px 8px;">${v.no}</button></td>
        <td>${v.debit}</td>
        <td>${v.credit}</td>
        <td>${format(v.totalAmount)}</td>
        <td>${v.vendor}</td>
        <td>${v.desc || ''}</td>
        <td>${v.attachments.length ? v.attachments.map((file, idx) => `<a href="${file.dataUrl}" download="${file.name}" target="_blank">${file.name}</a>`).join('<br>') : '-'}</td>
      </tr>`).join('');

    $$('.voucher-link').forEach(btn => btn.addEventListener('click', () => {
      state.selectedVoucherId = Number(btn.dataset.id);
      renderEntries();
    }));
  };
  renderVoucherRows();

  const existingAttachments = voucher?.attachments || state.pendingAttachments || [];
  $('#attachmentList').innerHTML = existingAttachments.length ? existingAttachments.map(file => `<div>${file.name}</div>`).join('') : '첨부파일 없음';

  $('#voucherAttachments').addEventListener('change', async (e) => {
    const files = await readFilesAsDataUrls(e.target.files);
    state.pendingAttachments = files;
    $('#attachmentList').innerHTML = files.length ? files.map(file => `<div>${file.name}</div>`).join('') : '첨부파일 없음';
  });

  $$('.sortable').forEach(th => th.addEventListener('click', () => {
    toggleSort(state.voucherSort, th.dataset.sort);
    renderEntries();
  }));

  $('#filterVoucherBtn').addEventListener('click', () => {
    const p = $('#filterPostingDate').value;
    const e = $('#filterEvidenceDate').value;
    const v = $('#filterVendor').value;
    const filtered = state.vouchers.filter(row => {
      const ok1 = !p || row.postingDate === p;
      const ok2 = !e || row.evidenceDate === e;
      const ok3 = !v || row.lines.some(l => l.vendorCode === v);
      return ok1 && ok2 && ok3;
    });
    renderVoucherRows(filtered);
  });

  $('#resetVoucherFilterBtn').addEventListener('click', () => {
    $('#filterPostingDate').value = today();
    $('#filterEvidenceDate').value = today();
    $('#filterVendor').value = '';
    renderVoucherRows();
  });

  $('#selectAllVoucherBtn').addEventListener('click', () => $$('.voucher-check').forEach(el => el.checked = true));

  $('#editVoucherBtn').addEventListener('click', () => {
    const target = $('.voucher-check:checked');
    if (!target) return alert('수정할 전표를 선택해줘.');
    state.selectedVoucherId = Number(target.value);
    renderEntries();
  });

  $('#deleteVoucherBtn').addEventListener('click', () => {
    const ids = $$('.voucher-check:checked').map(el => Number(el.value));
    if (!ids.length) return alert('삭제할 전표를 선택해줘.');
    state.vouchers = state.vouchers.filter(v => !ids.includes(v.id));
    state.selectedVoucherId = null;
    renderAll();
  });

  $('#exportVoucherBtn').addEventListener('click', () => {
    const rows = [['전기일자','증빙일자','전표번호','차변','대변','금액','거래처','적요'], ...voucherRowsNormalized(state.vouchers).map(v => [v.postingDate, v.evidenceDate, v.no, v.debit, v.credit, v.totalAmount, v.vendor, v.desc || ''])];
    downloadXlsx('전표목록.xlsx', '전표목록', rows);
  });

  $('#newVoucherBtn').addEventListener('click', () => {
    state.selectedVoucherId = null;
    renderEntries();
  });

  $('#saveVoucherBtn').addEventListener('click', () => {
    const postingDate = $('#postingDate').value;
    const evidenceDate = $('#evidenceDate').value;
    const desc2 = $('#voucherDesc').value.trim();
    const no2 = $('#voucherNo').value;
    const lines2 = [0,1,2].map(idx => ({
      accountCode: document.querySelector(`.line-account[data-idx="${idx}"]`).value,
      debitAmount: parseNum(document.querySelector(`.line-debit[data-idx="${idx}"]`).value),
      creditAmount: parseNum(document.querySelector(`.line-credit[data-idx="${idx}"]`).value),
      vendorCode: document.querySelector(`.line-vendor[data-idx="${idx}"]`).value,
    }));
    const debit = lines2.reduce((s,l)=>s+l.debitAmount,0);
    const credit = lines2.reduce((s,l)=>s+l.creditAmount,0);
    if (debit !== credit) return alert('차변 합계와 대변 합계가 같아야 해.');
    const voucherObj = {
      id: state.selectedVoucherId || Date.now(),
      no: no2,
      postingDate,
      evidenceDate,
      desc: desc2,
      totalAmount: debit,
      lines: lines2,
      attachments: state.pendingAttachments.length ? state.pendingAttachments : (state.vouchers.find(v => v.id === state.selectedVoucherId)?.attachments || []),
      reconciliations: state.vouchers.find(v => v.id === state.selectedVoucherId)?.reconciliations || []
    };
    if (state.selectedVoucherId) {
      state.vouchers = state.vouchers.map(v => v.id === state.selectedVoucherId ? voucherObj : v);
    } else {
      state.vouchers.push(voucherObj);
    }
    state.pendingAttachments = [];
    state.selectedVoucherId = null;
    renderAll();
  });
}

function renderVendors() {
  $('#vendors').innerHTML = `
    <div class="panel">
      <h2>거래처 관리</h2>
      <div class="actions"><button class="btn success" id="addVendorBtn">신규 등록</button><button class="btn secondary" id="exportVendorBtn">엑셀 다운로드</button></div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>코드</th><th>사업자번호</th><th>업체명</th><th>은행</th><th>계좌번호</th><th>예금주명</th><th>대표자명</th><th>업종</th><th>업태</th><th>이메일</th><th>사업장 주소</th><th>수정</th><th>삭제</th></tr></thead>
          <tbody>
            ${state.vendors.map((v, idx) => `<tr><td>${v.code}</td><td>${v.businessNo || ''}</td><td>${v.name}</td><td>${v.bankName || ''}</td><td>${v.accountNo || ''}</td><td>${v.depositor || ''}</td><td>${v.ceoName || ''}</td><td>${v.businessType || ''}</td><td>${v.businessCategory || ''}</td><td>${v.email || ''}</td><td>${v.address || ''}</td><td><button class="btn secondary edit-vendor-btn" data-index="${idx}">수정</button></td><td><button class="btn secondary delete-vendor-btn" data-index="${idx}">삭제</button></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="panel">
        <h2>거래처 등록 / 수정</h2>
        <div class="form-grid">
          <label>거래처코드<input id="vendorCode" type="text" /></label>
          <label>사업자번호<input id="vendorBusinessNo" type="text" /></label>
          <label>업체명<input id="vendorName" type="text" /></label>
          <label>은행<input id="vendorBankName" type="text" /></label>
          <label>계좌번호<input id="vendorAccountNo" type="text" /></label>
          <label>예금주명<input id="vendorDepositor" type="text" /></label>
          <label>대표자명<input id="vendorCeoName" type="text" /></label>
          <label>업종<input id="vendorBusinessType" type="text" /></label>
          <label>업태<input id="vendorBusinessCategory" type="text" /></label>
          <label>이메일 주소<input id="vendorEmail" type="email" /></label>
          <label>사업장 주소<input id="vendorAddress" type="text" /></label>
        </div>
        <div class="actions"><button class="btn success" id="saveVendorBtn">저장</button></div>
      </div>
    </div>`;

  $('#addVendorBtn').addEventListener('click', () => { state.selectedVendorIndex = null; renderVendors(); });
  $$('.edit-vendor-btn').forEach(btn => btn.addEventListener('click', () => { state.selectedVendorIndex = Number(btn.dataset.index); renderVendors(); }));
  $$('.delete-vendor-btn').forEach(btn => btn.addEventListener('click', () => {
    const idx = Number(btn.dataset.index);
    state.vendors.splice(idx, 1);
    state.selectedVendorIndex = null;
    renderAll();
  }));

  const sv = state.vendors[state.selectedVendorIndex] || {};
  if ($('#vendorCode')) {
    $('#vendorCode').value = sv.code || '';
    $('#vendorBusinessNo').value = sv.businessNo || '';
    $('#vendorName').value = sv.name || '';
    $('#vendorBankName').value = sv.bankName || '';
    $('#vendorAccountNo').value = sv.accountNo || '';
    $('#vendorDepositor').value = sv.depositor || '';
    $('#vendorCeoName').value = sv.ceoName || '';
    $('#vendorBusinessType').value = sv.businessType || '';
    $('#vendorBusinessCategory').value = sv.businessCategory || '';
    $('#vendorEmail').value = sv.email || '';
    $('#vendorAddress').value = sv.address || '';
  }

  $('#saveVendorBtn').addEventListener('click', () => {
    const payload = {
      code: $('#vendorCode').value.trim(), businessNo: $('#vendorBusinessNo').value.trim(), name: $('#vendorName').value.trim(),
      bankName: $('#vendorBankName').value.trim(), accountNo: $('#vendorAccountNo').value.trim(), depositor: $('#vendorDepositor').value.trim(),
      ceoName: $('#vendorCeoName').value.trim(), businessType: $('#vendorBusinessType').value.trim(), businessCategory: $('#vendorBusinessCategory').value.trim(),
      email: $('#vendorEmail').value.trim(), address: $('#vendorAddress').value.trim()
    };
    if (state.selectedVendorIndex !== null) state.vendors[state.selectedVendorIndex] = payload; else state.vendors.push(payload);
    state.selectedVendorIndex = null;
    renderAll();
  });

  $('#exportVendorBtn').addEventListener('click', () => {
    const rows = [['코드','사업자번호','업체명','은행','계좌번호','예금주명','대표자명','업종','업태','이메일','사업장주소'], ...state.vendors.map(v => [v.code, v.businessNo, v.name, v.bankName, v.accountNo, v.depositor, v.ceoName, v.businessType, v.businessCategory, v.email, v.address])];
    downloadXlsx('거래처관리.xlsx', '거래처관리', rows);
  });
}

function renderAccounts() {
  $('#accounts').innerHTML = `
    <div class="panel">
      <h2>계정과목</h2>
      <div class="actions">
        <button class="btn success" id="addAccountBtn">신규추가</button>
        <button class="btn secondary" id="deleteCheckedAccountsBtn">선택 삭제</button>
        <button class="btn secondary" id="exportAccountBtn">엑셀 다운로드</button>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>선택</th><th>코드</th><th>계정과목명</th><th>FS</th><th>대분류</th><th>중분류</th><th>수정</th><th>삭제</th></tr></thead>
          <tbody>
            ${state.accounts.map((a, idx) => `<tr><td><input type="checkbox" class="account-check" data-index="${idx}" /></td><td>${a.code}</td><td>${a.name}</td><td>${a.fs}</td><td>${a.major}</td><td>${a.minor}</td><td><button class="btn secondary edit-account-btn" data-index="${idx}">수정</button></td><td><button class="btn secondary delete-account-btn" data-index="${idx}">삭제</button></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel">
      <h2>계정과목 수정</h2>
      <div class="form-grid">
        <label>코드<input id="accountCodeEdit" type="text" /></label>
        <label>계정과목명<input id="accountNameEdit" type="text" /></label>
        <label>FS<select id="accountFsEdit"><option value="BS">BS</option><option value="IS">IS</option></select></label>
        <label>대분류<input id="accountMajorEdit" type="text" /></label>
        <label>중분류<input id="accountMinorEdit" type="text" /></label>
      </div>
      <div class="actions"><button class="btn success" id="saveAccountEditBtn">저장</button></div>
    </div>`;

  $('#addAccountBtn').addEventListener('click', () => { state.selectedAccountIndex = null; renderAccounts(); });
  $$('.edit-account-btn').forEach(btn => btn.addEventListener('click', () => { state.selectedAccountIndex = Number(btn.dataset.index); renderAccounts(); }));
  $$('.delete-account-btn').forEach(btn => btn.addEventListener('click', () => {
    const idx = Number(btn.dataset.index); state.accounts.splice(idx, 1); state.selectedAccountIndex = null; renderAll();
  }));
  $('#deleteCheckedAccountsBtn').addEventListener('click', () => {
    const indexes = $$('.account-check:checked').map(el => Number(el.dataset.index)).sort((a,b)=>b-a);
    indexes.forEach(idx => state.accounts.splice(idx,1));
    state.selectedAccountIndex = null; renderAll();
  });

  const sa = state.accounts[state.selectedAccountIndex] || {};
  if ($('#accountCodeEdit')) {
    $('#accountCodeEdit').value = sa.code || '';
    $('#accountNameEdit').value = sa.name || '';
    $('#accountFsEdit').value = sa.fs || 'BS';
    $('#accountMajorEdit').value = sa.major || '';
    $('#accountMinorEdit').value = sa.minor || '';
  }
  $('#saveAccountEditBtn').addEventListener('click', () => {
    const payload = {
      code: $('#accountCodeEdit').value.trim(),
      name: $('#accountNameEdit').value.trim(),
      fs: $('#accountFsEdit').value,
      major: $('#accountMajorEdit').value.trim(),
      minor: $('#accountMinorEdit').value.trim()
    };
    if (!payload.code || !payload.name) return alert('계정코드와 계정과목명을 입력해줘.');
    if (state.selectedAccountIndex === null) {
      state.accounts.push(payload);
    } else {
      state.accounts[state.selectedAccountIndex] = payload;
    }
    state.selectedAccountIndex = null;
    renderAll();
  });

  $('#exportAccountBtn').addEventListener('click', () => {
    const rows = [['코드','계정과목명','FS','대분류','중분류'], ...state.accounts.map(a => [a.code, a.name, a.fs, a.major, a.minor])];
    downloadXlsx('계정과목.xlsx', '계정과목', rows);
  });
}

function renderOpenItems() {
  const items = currentOpenItems();
  $('#openItems').innerHTML = `
    <div class="panel">
      <h2>미결관리 / 반제 현황</h2>
      <div class="form-grid">
        <label>계정과목<select id="openItemAccountFilter"><option value="">전체</option>${[...openAccountCodes].map(code => `<option value="${code}">${accountLabel(code)}</option>`).join('')}</select></label>
        <label>거래처<select id="openItemVendorFilter"><option value="">전체</option>${state.vendors.map(v => `<option value="${v.code}">${v.code} - ${v.name}</option>`).join('')}</select></label>
      </div>
      <div class="actions">
        <button class="btn" id="filterOpenItemsBtn">조회</button>
        <button class="btn secondary" id="resetOpenItemsBtn">초기화</button>
        <button class="btn secondary" id="selectAllOpenItemsBtn">전체 선택</button>
        <button class="btn success" id="reconcileSelectedBtn">선택 전표 반제</button>
        <button class="btn secondary" id="resetReconcileBtn">반제 재설정</button>
        <button class="btn secondary" id="exportOpenItemsBtn">엑셀 다운로드</button>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead>
            <tr>
              <th>선택</th>
              <th class="sortable-open" data-sort="postingDate">발생일자 ${getSortIndicator(state.openItemSort, 'postingDate')}</th>
              <th class="sortable-open" data-sort="voucherNo">전표번호 ${getSortIndicator(state.openItemSort, 'voucherNo')}</th>
              <th class="sortable-open" data-sort="vendor">거래처 ${getSortIndicator(state.openItemSort, 'vendor')}</th>
              <th class="sortable-open" data-sort="account">계정과목 ${getSortIndicator(state.openItemSort, 'account')}</th>
              <th class="sortable-open" data-sort="desc">적요 ${getSortIndicator(state.openItemSort, 'desc')}</th>
              <th class="sortable-open" data-sort="debitAmount">차변 ${getSortIndicator(state.openItemSort, 'debitAmount')}</th>
              <th class="sortable-open" data-sort="creditAmount">대변 ${getSortIndicator(state.openItemSort, 'creditAmount')}</th>
              <th class="sortable-open" data-sort="settled">반제금액 ${getSortIndicator(state.openItemSort, 'settled')}</th>
              <th class="sortable-open" data-sort="remaining">잔액 ${getSortIndicator(state.openItemSort, 'remaining')}</th>
              <th class="sortable-open" data-sort="status">상태 ${getSortIndicator(state.openItemSort, 'status')}</th>
            </tr>
          </thead>
          <tbody id="openItemTableBody"></tbody>
        </table>
      </div>
    </div>`;

  const normalizeRows = (rows) => rows.map(i => ({ ...i, vendor: vendorLabel(i.vendorCode), account: accountLabel(i.accountCode) }));

  const renderRows = (rows) => {
    const sortedRows = sortBy(normalizeRows(rows), state.openItemSort, (row, key) => row[key] ?? '');
    $('#openItemTableBody').innerHTML = sortedRows.map(i => `<tr><td><input type="checkbox" class="openitem-check" value="${i.key}" /></td><td>${i.postingDate}</td><td>${i.voucherNo}</td><td>${i.vendor}</td><td>${i.account}</td><td>${i.desc}</td><td>${format(i.debitAmount)}</td><td>${format(i.creditAmount)}</td><td>${format(i.settled)}</td><td>${format(i.remaining)}</td><td><span class="badge ${i.status}">${i.status}</span></td></tr>`).join('');
  };

  renderRows(items);

  $$('.sortable-open').forEach(th => th.addEventListener('click', () => {
    toggleSort(state.openItemSort, th.dataset.sort);
    renderOpenItems();
  }));

  $('#filterOpenItemsBtn').addEventListener('click', () => {
    const account = $('#openItemAccountFilter').value;
    const vendor = $('#openItemVendorFilter').value;
    renderRows(currentOpenItems().filter(i => (!account || i.accountCode === account) && (!vendor || i.vendorCode === vendor)));
  });

  $('#resetOpenItemsBtn').addEventListener('click', () => {
    $('#openItemAccountFilter').value = '';
    $('#openItemVendorFilter').value = '';
    renderRows(currentOpenItems());
  });

  $('#selectAllOpenItemsBtn').addEventListener('click', () => {
    $$('.openitem-check').forEach(el => el.checked = true);
  });

  $('#reconcileSelectedBtn').addEventListener('click', () => {
    const selectedKeys = $$('.openitem-check:checked').map(el => el.value);
    if (selectedKeys.length < 2) return alert('반제할 전표를 2개 이상 선택해줘.');
    const selectedItems = currentOpenItems().filter(i => selectedKeys.includes(i.key));
    const debitTotal = selectedItems.reduce((s, i) => s + i.debitAmount, 0);
    const creditTotal = selectedItems.reduce((s, i) => s + i.creditAmount, 0);
    if (debitTotal !== creditTotal) return alert('선택한 전표들의 차변/대변 합계가 일치해야 반제 가능해.');
    const recNo = nextReconciliationNo();
    const amount = Math.min(...selectedItems.map(i => i.remaining));
    selectedItems.forEach(item => {
      const v = state.vouchers.find(x => x.id === item.voucherId);
      v.reconciliations = v.reconciliations || [];
      v.reconciliations.push({ recNo, openKey: item.key, amount });
    });
    state.reconciliationDocs.push({ no: recNo, date: today(), keys: selectedKeys, amount, debitTotal, creditTotal });
    alert(`반제 완료: ${recNo}`);
    renderAll();
  });

  $('#resetReconcileBtn').addEventListener('click', () => {
    const checked = $$('.openitem-check:checked').map(el => el.value);
    if (!checked.length) {
      state.vouchers.forEach(v => v.reconciliations = []);
      state.reconciliationDocs = [];
    } else {
      state.vouchers.forEach(v => {
        v.reconciliations = (v.reconciliations || []).filter(r => !checked.includes(r.openKey));
      });
      state.reconciliationDocs = state.reconciliationDocs.filter(doc => !doc.keys.some(k => checked.includes(k)));
    }
    renderAll();
  });

  $('#exportOpenItemsBtn').addEventListener('click', () => {
    const rows = [['발생일자','전표번호','거래처','계정과목','적요','차변','대변','반제금액','잔액','상태'], ...normalizeRows(currentOpenItems()).map(i => [i.postingDate, i.voucherNo, i.vendor, i.account, i.desc, i.debitAmount, i.creditAmount, i.settled, i.remaining, i.status])];
    downloadXlsx('미결관리.xlsx', '미결관리', rows);
  });
}

function renderBsReport() {
  const balances = computeBalances();
  const pl = plSummary();
  const netIncome = pl.netIncome;

  const rowsBy = (major, minor) => state.accounts
    .filter(a => a.fs === 'BS' && a.major === major && a.minor === minor)
    .map(a => {
      let amount = balances[a.code] || 0;
      if (a.code === '3102') amount = netIncome;
      return { ...a, amount };
    });

  const currentAssets = rowsBy('자산', '유동자산');
  const nonCurrentAssets = rowsBy('자산', '비유동자산');
  const currentLiabilities = rowsBy('부채', '유동부채');
  const nonCurrentLiabilities = rowsBy('부채', '비유동부채');
  const equity = state.accounts.filter(a => a.fs === 'BS' && a.major === '자본').map(a => ({ ...a, amount: a.code === '3102' ? netIncome : (balances[a.code] || 0) }));

  const renderRows = (rows) => rows.map(r => `<tr><td>${r.name}</td><td>${format(r.amount)}</td></tr>`).join('');
  const sum = (rows) => rows.reduce((s, r) => s + r.amount, 0);
  const totalAssets = sum(currentAssets) + sum(nonCurrentAssets);
  const totalLiabilities = sum(currentLiabilities) + sum(nonCurrentLiabilities);
  const totalEquity = sum(equity);
  const check = totalAssets === (totalLiabilities + totalEquity);

  $('#bsReport').innerHTML = `
    <div class="panel">
      <h2>재무상태표(BS)</h2>
      <div class="actions"><button class="btn secondary" id="exportBsBtn">엑셀 다운로드</button></div>
      <div class="report-grid" style="margin-top:12px;">
        <div class="panel">
          <h3>1. 자산</h3>
          <h4>1-1. 유동자산</h4>
          <div class="table-wrap">
            <table><tbody>${renderRows(currentAssets)}<tr><th>유동자산 합계</th><th>${format(sum(currentAssets))}</th></tr></tbody></table>
          </div>
          <h4 style="margin-top:16px;">1-2. 비유동자산</h4>
          <div class="table-wrap">
            <table><tbody>${renderRows(nonCurrentAssets)}<tr><th>비유동자산 합계</th><th>${format(sum(nonCurrentAssets))}</th></tr></tbody></table>
          </div>
          <div class="table-wrap" style="margin-top:16px;">
            <table><tbody><tr><th>자산 합계</th><th>${format(totalAssets)}</th></tr></tbody></table>
          </div>
        </div>
        <div class="panel">
          <h3>2. 부채</h3>
          <h4>2-1. 유동부채</h4>
          <div class="table-wrap">
            <table><tbody>${renderRows(currentLiabilities)}<tr><th>유동부채 합계</th><th>${format(sum(currentLiabilities))}</th></tr></tbody></table>
          </div>
          <h4 style="margin-top:16px;">2-2. 비유동부채</h4>
          <div class="table-wrap">
            <table><tbody>${renderRows(nonCurrentLiabilities)}<tr><th>비유동부채 합계</th><th>${format(sum(nonCurrentLiabilities))}</th></tr></tbody></table>
          </div>
          <div class="table-wrap" style="margin-top:16px;">
            <table><tbody><tr><th>부채 합계</th><th>${format(totalLiabilities)}</th></tr></tbody></table>
          </div>
          <h3 style="margin-top:20px;">3. 자본</h3>
          <div class="table-wrap">
            <table><tbody>${renderRows(equity)}<tr><th>자본 합계</th><th>${format(totalEquity)}</th></tr></tbody></table>
          </div>
          <div class="table-wrap" style="margin-top:16px;">
            <table><tbody><tr><th>BS 검증 (자산 = 부채 + 자본)</th><th>${check ? '일치' : '불일치'} / ${format(totalAssets)} = ${format(totalLiabilities + totalEquity)}</th></tr></tbody></table>
          </div>
        </div>
      </div>
    </div>`;

  $('#exportBsBtn').addEventListener('click', () => {
    const rows = [
      ['구분','계정과목','금액'],
      ...currentAssets.map(r => ['유동자산', r.name, r.amount]),
      ['유동자산 합계','', sum(currentAssets)],
      ...nonCurrentAssets.map(r => ['비유동자산', r.name, r.amount]),
      ['비유동자산 합계','', sum(nonCurrentAssets)],
      ['자산 합계','', totalAssets],
      ...currentLiabilities.map(r => ['유동부채', r.name, r.amount]),
      ['유동부채 합계','', sum(currentLiabilities)],
      ...nonCurrentLiabilities.map(r => ['비유동부채', r.name, r.amount]),
      ['비유동부채 합계','', sum(nonCurrentLiabilities)],
      ['부채 합계','', totalLiabilities],
      ...equity.map(r => ['자본', r.name, r.amount]),
      ['자본 합계','', totalEquity],
      ['BS 검증','', `${totalAssets} = ${totalLiabilities + totalEquity}`]
    ];
    downloadXlsx('재무상태표.xlsx', '재무상태표', rows);
  });
}

function renderPlReport() {
  const balances = computeBalances();
  const rowsByMajor = (major) => state.accounts.filter(a => a.fs === 'IS' && a.major === major).map(a => ({ ...a, amount: balances[a.code] || 0 }));

  const sales = rowsByMajor('매출');
  const costs = rowsByMajor('원가');
  const sga = rowsByMajor('판관비');
  const nonOperatingIncome = rowsByMajor('영업외수익');
  const nonOperatingExpense = rowsByMajor('영업외비용');
  const taxExpense = state.accounts.filter(a => a.fs === 'IS' && a.name.includes('법인세')).map(a => ({ ...a, amount: balances[a.code] || 0 }));

  const sum = (rows) => rows.reduce((s, r) => s + r.amount, 0);
  const renderRows = (rows) => rows.map(r => `<tr><td>${r.name}</td><td>${format(r.amount)}</td></tr>`).join('');

  const salesTotal = sum(sales);
  const costTotal = sum(costs);
  const grossProfit = salesTotal - costTotal;
  const sgaTotal = sum(sga);
  const operatingProfit = grossProfit - sgaTotal;
  const nonOpIncomeTotal = sum(nonOperatingIncome);
  const nonOpExpenseTotal = sum(nonOperatingExpense);
  const pretaxIncome = operatingProfit + nonOpIncomeTotal - nonOpExpenseTotal;
  const taxExpenseTotal = sum(taxExpense);
  const netIncome = pretaxIncome - taxExpenseTotal;

  $('#plReport').innerHTML = `
    <div class="panel">
      <h2>손익계산서(PL)</h2>
      <div class="actions"><button class="btn secondary" id="exportPlBtn">엑셀 다운로드</button></div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <tbody>
            <tr><th colspan="2">1. 매출</th></tr>
            ${renderRows(sales)}
            <tr><th>매출 합계</th><th>${format(salesTotal)}</th></tr>

            <tr><th colspan="2">2. 원가</th></tr>
            ${renderRows(costs)}
            <tr><th>원가 합계</th><th>${format(costTotal)}</th></tr>

            <tr><th>매출총이익 (1-2)</th><th>${format(grossProfit)}</th></tr>

            <tr><th colspan="2">3. 판매비와 관리비</th></tr>
            ${renderRows(sga)}
            <tr><th>판매비와 관리비 합계</th><th>${format(sgaTotal)}</th></tr>

            <tr><th>영업이익 (1-2-3)</th><th>${format(operatingProfit)}</th></tr>

            <tr><th colspan="2">4. 영업외수익</th></tr>
            ${renderRows(nonOperatingIncome)}
            <tr><th>영업외수익 합계</th><th>${format(nonOpIncomeTotal)}</th></tr>

            <tr><th colspan="2">5. 영업외비용</th></tr>
            ${renderRows(nonOperatingExpense)}
            <tr><th>영업외비용 합계</th><th>${format(nonOpExpenseTotal)}</th></tr>

            <tr><th>법인세차감전순이익 (1-2-3+4-5)</th><th>${format(pretaxIncome)}</th></tr>

            <tr><th colspan="2">6. 법인세비용</th></tr>
            ${taxExpense.length ? renderRows(taxExpense) : '<tr><td>법인세비용</td><td>0</td></tr>'}
            <tr><th>법인세비용 합계</th><th>${format(taxExpenseTotal)}</th></tr>

            <tr><th>당기순이익 (1-2-3+4-5-6)</th><th>${format(netIncome)}</th></tr>
          </tbody>
        </table>
      </div>
    </div>`;

  $('#exportPlBtn').addEventListener('click', () => {
    const rows = [
      ['구분','계정과목','금액'],
      ...sales.map(r => ['매출', r.name, r.amount]),
      ['매출 합계','', salesTotal],
      ...costs.map(r => ['원가', r.name, r.amount]),
      ['원가 합계','', costTotal],
      ['매출총이익','', grossProfit],
      ...sga.map(r => ['판매비와관리비', r.name, r.amount]),
      ['판매비와관리비 합계','', sgaTotal],
      ['영업이익','', operatingProfit],
      ...nonOperatingIncome.map(r => ['영업외수익', r.name, r.amount]),
      ['영업외수익 합계','', nonOpIncomeTotal],
      ...nonOperatingExpense.map(r => ['영업외비용', r.name, r.amount]),
      ['영업외비용 합계','', nonOpExpenseTotal],
      ['법인세차감전순이익','', pretaxIncome],
      ...(taxExpense.length ? taxExpense.map(r => ['법인세비용', r.name, r.amount]) : [['법인세비용','법인세비용',0]]),
      ['법인세비용 합계','', taxExpenseTotal],
      ['당기순이익','', netIncome]
    ];
    downloadXlsx('손익계산서.xlsx', '손익계산서', rows);
  });
}

function renderAccessControl() {
  $('#accessControl').innerHTML = `
    <div class="panel">
      <h2>권한처리</h2>
      <div class="actions">
        <button class="btn secondary" id="adminLogoutBtn">관리자 로그아웃</button>
      </div>
      <div class="table-wrap" style="margin-top:12px;">
        <table>
          <thead><tr><th>이메일</th><th>신청일</th><th>상태</th><th>승인</th><th>반려</th></tr></thead>
          <tbody>
            ${state.accessRequests.map((req, idx) => `<tr><td>${req.email}</td><td>${req.requestedAt}</td><td>${req.status}</td><td><button class="btn success approve-access-btn" data-index="${idx}">승인</button></td><td><button class="btn secondary reject-access-btn" data-index="${idx}">반려</button></td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`;

  $('#adminLogoutBtn').addEventListener('click', () => {
    state.currentUser = { email: '', role: 'user', approved: false };
    renderAll();
  });

  $$('.approve-access-btn').forEach(btn => btn.addEventListener('click', () => {
    const req = state.accessRequests[Number(btn.dataset.index)];
    req.status = 'approved';
    if (state.currentUser?.email === req.email) state.currentUser.approved = true;
    renderAll();
  }));

  $$('.reject-access-btn').forEach(btn => btn.addEventListener('click', () => {
    const req = state.accessRequests[Number(btn.dataset.index)];
    req.status = 'rejected';
    if (state.currentUser?.email === req.email) state.currentUser.approved = false;
    renderAll();
  }));
}

function renderAll() {
  renderDashboard();
  renderEntries();
  renderVendors();
  renderAccounts();
  renderOpenItems();
  renderBsReport();
  renderPlReport();
  renderAccessControl();
  renderAccessGate();
}

window.switchView = switchView;
window.renderAll = renderAll;

renderAll();