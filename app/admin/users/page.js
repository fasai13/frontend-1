"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export default function Page() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/login");
    return;
  }

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
    const interval = setInterval(getUsers, 1000); // refresh every second
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

          Swal.fire({
            icon: "success",
            title: "ลบสำเร็จ!",
            confirmButtonColor: "#4e73df",
          });
          getUsers();
        } catch (err) {
          console.error(err);
          Swal.fire({
            icon: "error",
            title: "เกิดข้อผิดพลาด",
            text: "ไม่สามารถลบข้อมูลผู้ใช้ได้",
            confirmButtonColor: "#dc3545",
          });
        }
      }
    });
  };

  const handleSave = async () => {
    if (!editUser) return;

    try {
      const res = await fetch(
        `https://backend-nextjs-virid.vercel.app/api/users`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editUser), // editUser ต้องมี id อยู่แล้ว
        }
      );

      if (!res.ok) throw new Error("Failed to update user");

      Swal.fire({
        icon: "success",
        title: "บันทึกสำเร็จ",
        confirmButtonColor: "#4e73df",
      });

      closeModal();
      getUsers();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถบันทึกข้อมูลผู้ใช้ได้",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <>
      <div className="container my-4">
        <div className="card">
          <div className="card-header">Users List</div>
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th>Firstname</th>
                  <th>Fullname</th>
                  <th>Lastname</th>
                  <th>Username</th>
                  <th>Address</th>
                  <th>Sex</th>
                  <th>Birthday</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="text-center">
                      กำลังโหลดข้อมูล...
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id}>
                      <td className="text-center">{item.id}</td>
                      <td>{item.firstname}</td>
                      <td>{item.fullname}</td>
                      <td>{item.lastname}</td>
                      <td>{item.username}</td>
                      <td>{item.address}</td>
                      <td>{item.sex}</td>
                      <td>{item.birthday}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => openEditModal(item)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(item.id)}
                        >
                          ลบ
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && editUser && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5>แก้ไขผู้ใช้: {editUser.firstname}</h5>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              {[
                "firstname",
                "fullname",
                "lastname",
                "username",
                "address",
                "birthday",
              ].map((field) => (
                <div className="mb-3" key={field}>
                  <label className="form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "birthday" ? "date" : "text"}
                    className="form-control"
                    value={editUser[field]}
                    onChange={(e) =>
                      setEditUser({ ...editUser, [field]: e.target.value })
                    }
                  />
                </div>
              ))}

              <div className="mb-3">
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

              <div className="text-end">
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
    </>
  );
}
