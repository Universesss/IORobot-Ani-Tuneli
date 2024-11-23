// script.js
document.addEventListener("scroll", () => {
    const memories = document.querySelectorAll(".memory");
    const triggerPoint = window.innerHeight * 0.8;
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            img.classList.add('visible');
        }
    });
    memories.forEach(memory => {
        const memoryTop = memory.getBoundingClientRect().top;

        if (memoryTop < triggerPoint) {
            memory.style.opacity = "1";
            memory.style.transform = "translateY(0)";
        }
    });
});

function showDetails(eventName, awards) {
    // Bildirim kutusu oluştur
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `
        <strong>${eventName}</strong><br>
        Kazanılan Ödüller: ${awards}
    `;
    
    // Bildirimi sayfaya ekle
    document.body.appendChild(notification);
    
    // Bildirimi 5 saniye sonra kaldır
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

