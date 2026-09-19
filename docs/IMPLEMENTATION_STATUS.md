# Uygulama durumu

## Kaynaktan modele aktarıldı
Sunumdaki metinle desteklenen ana işlev aileleri domain modeline ve connector sözleşmesine aktarıldı.

## Bilerek tamamlanmış gibi gösterilmeyen kısım
Sunum, BELGENET'in resmî API endpointlerini, kimlik doğrulama protokolünü, CSRF/session ayrıntılarını veya stabil HTML/DOM seçicilerini vermiyor. Bunlar gözlemlenmeden gerçek browser/API adapter yazmak hataya açık olur. Bu nedenle mevcut kod gerçek sisteme yanlış işlem göndermek yerine fail-closed tasarlanmıştır.

## Sonraki entegrasyon doğrulama listesi
1. Yetkili test hesabında giriş ve oturum akışı.
2. Salt-okunur ekranların ağ çağrıları/DOM sözleşmesi.
3. Taslak oluşturma ve kaydetme test ortamı.
4. Havale/cevap/kapama akışlarının test belgeleriyle doğrulanması.
5. Paraf/e-imza/nihai gönderim yalnızca açık kullanıcı onayıyla.
6. Her sürümde contract ve regression testleri.
