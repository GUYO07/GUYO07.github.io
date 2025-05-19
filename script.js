document.addEventListener("DOMContentLoaded", () => {
  const heart = document.getElementById("heart");
  const heart2 = document.getElementById("heart2");
  const heart3 = document.getElementById("heart3");
  const message = document.getElementById("message");
  const gallery = document.getElementById("gallery");
  const hbdMessage = document.getElementById("hbd-message");
  const music1 = document.getElementById("music1");
  const music2 = document.getElementById("music2");
  const music3 = document.getElementById("music3");

  // กดที่หัวใจ
  heart.addEventListener("click", () => {
    HideHeart();
    message.classList.remove("hidden");

    // เล่นเพลง
    music1.play();

    // ดึงรูปจาก JSON
    showImage();
  });

  heart2.addEventListener("click", () => {
    HideHeart();
    message.classList.remove("hidden");
    music2.play();
    showImage();
  });

  heart3.addEventListener("click", () => {
    HideHeart();
    message.classList.remove("hidden");
    music3.play();
    showImage();
    document.body.classList.add("flash");
  });

  music3.addEventListener("ended", () => {
    // ลบ class เพื่อหยุดกระพริบเมื่อเพลงจบ
    document.body.classList.remove("flash");
  });

  // ตรวจสอบการเลื่อนหน้าเว็บ
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight; // ตำแหน่งที่เราสามารถเห็นได้ในหน้าจอ
    const documentHeight = document.documentElement.scrollHeight; // ความสูงทั้งหมดของหน้า

    // ถ้าเลื่อนถึงจุดล่างสุดของหน้า
    if (scrollPosition >= documentHeight) {
      hbdMessage.classList.remove("hidden");
    }
  });

  function showImage() {
    fetch("images.json")
      .then((res) => res.json())
      .then((images) => {
        gallery.innerHTML = ""; // ล้างข้อความ "กำลังโหลดภาพ..."
        images.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = src.split("/").pop();
          gallery.appendChild(img);
        });
      })
      .catch((err) => {
        console.error(err);
        gallery.innerText = "ไม่สามารถโหลดภาพได้!";
      });
  }

  function HideHeart() {
    heart.style.fontSize = "0px";
    heart2.style.fontSize = "0px";
    heart3.style.fontSize = "0px";
  }
});
