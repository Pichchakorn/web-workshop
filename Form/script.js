// ================== Register Form ==================
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // ✅ ตรวจสอบชื่อ
    if (name.length < 2) {
      alert("ชื่อต้องมีอย่างน้อย 2 ตัวอักษร");
      return;
    }

    // ✅ ตรวจสอบอีเมล
    if (!email.includes('@') || !email.includes('.')) {
      alert("กรุณากรอกอีเมลให้ถูกต้อง");
      return;
    }

    // ✅ ตรวจสอบรหัสผ่าน
    if (password.length < 6) {
      alert("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }

    // ✅ ตรวจสอบยืนยันรหัสผ่าน
    if (password !== confirmPassword) {
      alert("รหัสผ่านและยืนยันรหัสผ่านต้องตรงกัน");
      return;
    }

    alert("สมัครสมาชิกสำเร็จ!");
  });
}

// ================== Login Form ==================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // ✅ ตรวจสอบอีเมล
    if (!email.includes('@') || !email.includes('.')) {
      alert("กรุณากรอกอีเมลให้ถูกต้อง");
      return;
    }

    // ✅ ตรวจสอบรหัสผ่าน
    if (password.length < 6) {
      alert("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }

    alert("เข้าสู่ระบบสำเร็จ!");
  });
}
