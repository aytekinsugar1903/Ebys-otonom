# EBYS Otonom

BELGENET/EBYS eğitimindeki iş akışlarını tipli, denetlenebilir bir otomasyon çekirdeğine dönüştüren TypeScript projesi.

## Aktarılan modüller
Giden evrak ve Olur/Takrir oluşturma; konu/SDP ve klasör; Gereği/Bilgi dağıtımı; onay akışı; ek/ilgi/ilişkili evrak/not; paraf/imza/toplu imza; arama/rapor/tebliğ; birim/kişi/toplu havale ve iade; cevap yazma; geri çekme/silme/kapatma; dağıtım planı; kişisel/birim şablonları; sık kullanılanlar; onay ve kapatma akışları; kullanıcı-birim grupları; vekalet; kullanıcıya evrak devri; kullanıcı/rol/birim yönetimi; evrak kopyalama.

## Güvenlik mimarisi
AI çıktısı doğrudan BELGENET'e uygulanmaz. Tipli karar → doğrulama → yetki/policy → güven eşiği → Approval Gate → Connector → Audit Log zinciri kullanılır. Paraf, e-imza, nihai gönderim, geri çekme, silme, vekalet ve yönetim/yetki değişiklikleri insan onayı gerektirir.

## Test
```bash
npm install
npm run check
```

## Gerçek BELGENET bağlantısı
Eğitim PDF'si kullanıcı arayüzündeki süreçleri açıklar fakat doğrulanmış resmî API sözleşmesi veya stabil DOM seçicileri sağlamaz. Bu nedenle `EbysConnector` tam sözleşmeyi tanımlar; gerçek adapter doğrulanana kadar yan etkili üretim otomasyonu açılmaz. `src/capabilities.ts` bu ayrımı açıkça izler.

Ayrıntılı süreç haritası: `docs/BELGENET_PROCESS_MAP.md`.
