"use client";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export default function Page() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // ตรวจสอบ token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  // Fetch users
  const getUsers = async () => {
    try {
      const res = await fetch(
        "https://backend-nextjs-virid.vercel.app/api/users"
      );
      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUsers();
    const interval = setInterval(getUsers, 1000);
    return () => clearInterval(interval);
  }, []);

  const openEditModal = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditUser(null);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณต้องการลบผู้ใช้นี้ใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "ใช่, ลบเลย!",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `https://backend-nextjs-virid.vercel.app/api/users/${id}`,
            {
              method: "DELETE",
            }
          );
          if (!res.ok) throw new Error("Failed to delete user");
          Swal.fire({ icon: "success", title: "ลบสำเร็จ!" });
          getUsers();
        } catch (err) {
          console.error(err);
          Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด",
            text: "ไม่สามารถลบข้อมูลผู้ใช้ได้",
          });
        }
      }
    });
  };

  const handleSave = async () => {
    if (!editUser) return;
    try {
      const res = await fetch(
        "https://backend-nextjs-virid.vercel.app/api/users",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editUser),
        }
      );
      if (!res.ok) throw new Error("Failed to update user");

      Swal.fire({ icon: "success", title: "บันทึกสำเร็จ" });
      closeModal();
      getUsers();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถบันทึกข้อมูลผู้ใช้ได้",
      });
    }
  };

  return (
    <div className="container my-4">
      <div className="row g-3">
        {items.length === 0 ? (
          <div className="col-12 text-center">กำลังโหลดข้อมูล...</div>
        ) : (
          items.map((user) => (
            <div className="col-md-6 col-lg-4" key={user.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{user.fullname}</h5>
                  <p className="card-text">
                    <strong>Firstname:</strong> {user.firstname} <br />
                    <strong>Lastname:</strong> {user.lastname} <br />
                    <strong>Username:</strong> {user.username} <br />
                    <strong>Address:</strong> {user.address} <br />
                    <strong>Sex:</strong> {user.sex} <br />
                    <strong>Birthday:</strong> {user.birthday}
                  </p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => openEditModal(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {showModal && editUser && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5 className="mb-3">แก้ไขผู้ใช้: {editUser.firstname}</h5>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              <div className="row g-3">
                {[
                  { label: "Firstname", field: "firstname", type: "text" },
                  { label: "Fullname", field: "fullname", type: "text" },
                  { label: "Lastname", field: "lastname", type: "text" },
                  { label: "Username", field: "username", type: "text" },
                  { label: "Address", field: "address", type: "text" },
                  { label: "Birthday", field: "birthday", type: "date" },
                ].map((item) => (
                  <div className="col-12 col-md-6" key={item.field}>
                    <label className="form-label">{item.label}</label>
                    <input
                      type={item.type}
                      className="form-control"
                      value={editUser[item.field]}
                      onChange={(e) =>
                        setEditUser({
                          ...editUser,
                          [item.field]: e.target.value,
                        })
                      }
                    />
                  </div>
                ))}

                <div className="col-12 col-md-6">
                  <label className="form-label">Sex</label>
                  <select
                    className="form-control"
                    value={editUser.sex}
                    onChange={(e) =>
                      setEditUser({ ...editUser, sex: e.target.value })
                    }
                  >
                    <option value="">เลือกเพศ</option>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 text-end">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={closeModal}
                >
                  ยกเลิก
                </button>
                <button type="submit" className="btn btn-primary">
                  บันทึก
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          width: 400px;
          max-width: 90%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
