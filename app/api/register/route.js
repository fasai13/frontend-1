export async function POST(req) {
  try {
    const body = await req.json();

    // ตัวอย่างการ log ข้อมูลที่ได้รับ
    console.log("Received user data:", body);

    // ส่งไปยัง backend จริง (เช่น itdev.cmtc.ac.th)
    const response = await fetch("http://itdev.cmtc.ac.th:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in /api/users POST:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
