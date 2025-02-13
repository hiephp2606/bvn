// document.addEventListener("DOMContentLoaded", function() {
    let p = document.getElementById("text");
    let text = p.innerHTML;

    // Thay thế dấu câu
    text = text.replace(/,/g, "🤔").replace(/\./g, "😲");

    // Tô màu từ có độ dài >= 5 ký tự
    text = text.split(" ").map(word => {
        let cleanWord = word.replace(/[^a-zA-ZÀ-ỹ0-9]/g, ""); // Loại bỏ ký tự đặc biệt
        return cleanWord.length >= 5 ? `<span class="highlight">${word}</span>` : word;
    }).join(" ");

    // Cập nhật nội dung đoạn văn
    p.innerHTML = text;

    // Đếm số từ
    let wordCount = text.split(/\s+/).length;
    let wordCountDiv = document.createElement("div");
    wordCountDiv.innerText = `Số từ trong đoạn văn: ${wordCount}`;
    document.body.appendChild(wordCountDiv);

    // Thêm link Facebook
    let fbLink = document.createElement("a");
    fbLink.href = "https://www.facebook.com";
    fbLink.innerText = "facebook";
    fbLink.style.marginLeft = "10px";
    p.insertAdjacentElement("afterend", fbLink);
// });
