<html lang="th">
<head>
  <meta charset="UTF-8" />
  <title>Register</title>
</head>
<body class="bg-light">
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center mb-4">ลงทะเบียน</h3>
        <form>
          <div class="mb-3">
            <label class="form-label">ชื่อผู้ใช้</label>
            <input></input> type="text" class="form-control" required{">"}
          </div>
          <div class="mb-3">
            <label class="form-label">รหัสผ่าน</label>
            <input></input> type="password" class="form-control" required{">"}
          </div>
          <div class="mb-3">
            <label class="form-label">คำนำหน้าชื่อ</label>
            <select class="form-select">
              <option>นาย</option>
              <option>นางสาว</option>
              <option>อื่นๆ</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label">ชื่อ</label>
            <input></input> type="text" class="form-control{">"}
          </div>
          <div class="mb-3">
            <label class="form-label">นามสกุล</label>
            <input></input> type="text" class="form-control{">"}
          </div>
          <div class="mb-3">
            <label class="form-label">ที่อยู่</label>
            <textarea class="form-control" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label d-block">เพศ</label>
            <div class="form-check form-check-inline">
              <input></input> class="form-check-input" type="radio" name="gender" value="male"{">"}
              <label class="form-check-label">ชาย</label>
            </div>
            <div class="form-check form-check-inline">
              <input></input> class="form-check-input" type="radio" name="gender" value="female"{">"}
              <label class="form-check-label">หญิง</label>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">วันเกิด</label>
            <input></input> type="date" class="form-control"{">"}
          </div>
          <div class="mb-3 form-check">
            <input></input> type="checkbox" class="form-check-input" id="acceptTerms"{">"}
            <label class="form-check-label" for="acceptTerms">ยอมรับเงื่อนไข</label>
          </div>
          <button type="submit" class="btn btn-success w-100">ลงทะเบียน</button>
        </form>
      </div>
    </div>
  </div>
</body>
</html>
