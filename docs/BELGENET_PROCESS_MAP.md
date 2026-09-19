# BELGENET eğitim PDF → ürün süreç haritası

Kaynak: 107 sayfalık BELGENET (EBYS) eğitim sunumu.

## Kapsanan alanlar
- Giriş, MEBBİS/iki adımlı doğrulama, rol ve birim bazlı menüler
- Kullanıcı varsayılanları, erişilebilirlik, kullanıcı/birim/rol yönetimi
- Giden evrak: konu kodu/SDP, konu, kaldırılacak klasör, evrak türü, dil, gizlilik, TC, sayı ek metni, ivedilik, miat
- Gereği/Bilgi dağıtımı; kullanıcı, gerçek/tüzel kişi, kurum, birim ve dağıtım planı
- Onay akışı; kontrol, paraf, imza, koordineli akış
- Editör, PDF önizleme, taslak ve otomatik kayıt davranışı
- Ekler: dosya, fiziksel, kayıtlı evrak, harici referans
- İlgiler: dosya, metin, kayıtlı evrak; ilişkili evraklar; not görünürlüğü; hareket geçmişi
- Paraf/imza ve toplu paraf/imza
- Olur/Takrir yazısı
- Evrak arama, detaylı arama, rapor dışa aktarma, tebliğ/tebellüğ arama, tam metin arama
- Birime/kişiye havale; toplu havale; Gereği/Bilgi; iade
- Gelen evraka cevap; eklerin otomatik taşınması; iç/dış nüsha
- Geri çekme, silme, kapatma ve süreli kapatma
- Kullanıcı-birim grupları
- Dağıtım planı oluşturma/güncelleme/pasif yapma
- Kişisel ve birim içerik şablonları
- Sık kullanılanlar
- Onay/kapatma akışı şablonları
- Vekalet, klasör/rol/evrak devri, listeleme, erken dönüş ve iptal
- Kullanıcıya evrak devretme
- Evrak kopyalama

## Ürün kuralı
Sunum kullanıcı arayüzü davranışlarını öğretir; doğrulanmış BELGENET API sözleşmesi vermez. Bu nedenle gerçek yan etkili entegrasyon connector arkasında tutulur. UI'da görülmüş fakat API'si doğrulanmamış yetenekler `UI_CONFIRMED_API_UNKNOWN` olarak işaretlenir.

## Kritik korumalar
- Sonraki onaylayıcı evrakı açmışsa geri çekme yapılamaz.
- Silme yalnızca onaya sunulmamış veya güvenli biçimde geri çekilmiş evrakta mümkündür.
- Kapatma, kullanıcıya havale edilmiş evrakta yapılır.
- Birim dışına nihai gönderim son imzacı/amir yetkisine bağlıdır.
- Paraf, imza, nihai gönderim, geri çekme, silme, vekalet ve yönetim/yetki değişiklikleri insan onayı gerektirir.
