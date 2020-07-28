
## Instalasi

1. `npm install`
1. Copy `.env.example` ke `.env`
    sesuaikan settingan
1. Jalankan `npm run build` -> akan mem-build code serverside dengan typescript dan clientside dengan laravel-mix
1. lanjutkan setup sesuai environment

## Setup Development

1. Gunakan Visual Studio Code
1. Jika muncul rekomendasi extension waktu awal membuka project, pilih Ya/Install
1. Jika tidak muncul rekomndasi, install manual extension yang diperlukan. Lihat di file .vscode/extension.json
1. Jalankan `npm run dev` untuk menjalankan server di local

## DB Related

1. Untuk menjalankan migrasi `npm run migrate`
1. Untuk menambah fiile migrasi, `npm run migration:generate -- nama-migrasi-kebab-case`
