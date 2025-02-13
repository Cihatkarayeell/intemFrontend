// Modalı açmak için butona tıklama eventi
document.querySelector('#menuOpenToggle').onclick = function() {
    document.querySelector('#sidebar').classList.toggle('active');
    document.querySelector('body').classList.add('after');
    
    // Tıklanan butona 'active' sınıfı ekle
    this.classList.add('active');
};

// Modalı kapatmak için butona tıklama eventi
document.querySelector('#menuCloseToggle').onclick = function() {
    document.querySelector('#sidebar').classList.remove('active');
    document.querySelector('body').classList.remove('after');
    document.querySelector('#menuOpenToggle').classList.remove('active');
    // Tıklanan butondan 'active' sınıfını çıkar
};

// .menu-item içindeki a etiketlerine tıklama olayını ekleyelim
document.querySelectorAll('#sidebar .menu-item a').forEach(function(link) {
    link.onclick = function() {
        // Sidebar'ı kapat
        document.querySelector('#sidebar').classList.remove('active');
        document.querySelector('body').classList.remove('after');
        document.querySelector('#menuOpenToggle').classList.remove('active');
    };
});