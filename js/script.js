document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan Anda berhasil terkirim melalui halaman terpisah ini!');
    this.reset();
});

document.getElementById('paymentForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form Transaksi berhasil diproses!');
});