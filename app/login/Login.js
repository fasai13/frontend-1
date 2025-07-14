export default function Login() {
  return (
<>  {/* ชื่อผู้ใช้เดิม (ลบทิ้ง) */}
  {/* เพิ่ม input-group ใหม่สำหรับชื่อผู้ใช้ */}
  <div className="input-group mb-3">
    <span className="input-group-text" id="basic-addon1">@</span>
    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
  </div>

  {/* เพิ่ม recipient username + domain */}
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
    <span className="input-group-text" id="basic-addon2">@example.com</span>
  </div>

  {/* URL vanity */}
  <div className="mb-3">
    <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
    <div className="input-group">
      <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
    </div>
    <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
  </div>

  {/* Amount input */}
  <div className="input-group mb-3">
    <span className="input-group-text">$</span>
    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
    <span className="input-group-text">.00</span>
  </div>

  {/* Username + Server */}
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
    <span className="input-group-text">@</span>
    <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
  </div>

  {/* Textarea with input group */}
  <div className="input-group">
    <span className="input-group-text">With textarea</span>
    <textarea className="form-control" aria-label="With textarea"></textarea>
  </div>

  {/* ช่องรหัสผ่าน */}
  <div className="mb-3 mt-3">
    <label className="form-label">รหัสผ่าน</label>
    <input type="password" className="form-control" required />
  </div>
  
  {/* ส่วนอื่นๆ ต่อเหมือนเดิม... */}
</>
  )
}