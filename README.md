# EBYS Otonom

BELGENET/EBYS iş akışlarını güvenli, tipli ve denetlenebilir bir otomasyon çekirdeğine dönüştüren TypeScript projesi.

## Mimari
PDF'deki BELGENET akışları tipli domain eylemlerine çevrilir. AI yalnızca karar önerisi üretir; çıktı doğrudan sisteme gönderilmez. Policy Engine güven seviyesi ve işlem riskini kontrol eder. Kritik işlemler Approval Gate üzerinden kullanıcı onayı ister. Tüm işlemler Audit Log'a kaydedilir.

## Kritik güvenlik sınırı
Paraf, e-imza, nihai gönderim, geri çekme, silme ve rol/yetki değişiklikleri insan onayı olmadan çalıştırılmaz.

## Test
```bash
npm install
npm run check
```

## Entegrasyon durumu
`EbysConnector` gerçek BELGENET entegrasyonu için sözleşmedir. Eğitim PDF'si kullanıcı iş akışlarını gösterir; doğrulanmış resmî API sözleşmesi veya stabil DOM seçicileri sağlamaz. Bu nedenle gerçek connector doğrulanmadan üretim yan etkileri etkinleştirilmez.
